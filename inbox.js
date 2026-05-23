// Deployed fallback for the static GitHub Pages version.
// If script.js already has native inbox support, this file only applies the visual CSS repair.
(() => {
  const SUBMISSION_KEY = "eliasJulekalenderSubmissions";
  const ADMIN_SESSION_KEY = "eliasJulekalenderAdminSession";

  repairDeployedStyles();

  if (window.ELIAS_INBOX_NATIVE) return;

  const $ = (selector) => document.querySelector(selector);
  const dom = {
    trigger: $("#inboxTrigger"),
    modal: $("#inboxModal"),
    close: $("#closeInboxModal"),
    list: $("#inboxList"),
    count: $("#inboxCount"),
    clear: $("#clearInboxButton"),
    form: $("#challengeForm"),
    name: $("#nameInput"),
    comment: $("#commentInput"),
    styleResult: $("#styleResultPill"),
    songResult: $("#songResultPill"),
    styleTitle: $("#styleWheelTitle"),
    loginForm: $("#adminLoginForm"),
    logout: $("#logoutButton"),
    openFromPanel: $("#openInboxFromPanel"),
    toast: $("#toast"),
    sparkLayer: $(".spark-layer")
  };

  if (!dom.form || !dom.trigger || !dom.modal) return;

  function repairDeployedStyles() {
    fetch(`styles.css?repair=${Date.now()}`, { cache: "no-store" })
      .then((response) => response.ok ? response.text() : "")
      .then((css) => {
        const fixed = css
          .replace("margin:-bottom: 1.4rem;", "margin-bottom: 1.4rem;")
          .replace(
            "linear-gradient(135deg, rgba(255, 255, 255, 0.44), rgba(255, 248, 231, 0.44),\n    repeating-linear-gradient",
            "linear-gradient(135deg, rgba(255, 255, 255, 0.44), rgba(255, 248, 231, 0.44)),\n    repeating-linear-gradient"
          );

        if (!fixed || fixed === css || document.querySelector("#elias-css-repair")) return;
        const style = document.createElement("style");
        style.id = "elias-css-repair";
        style.textContent = fixed;
        document.head.append(style);
      })
      .catch(() => {});
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function loadSubmissions() {
    try {
      const submissions = JSON.parse(localStorage.getItem(SUBMISSION_KEY)) || [];
      return Array.isArray(submissions) ? submissions : [];
    } catch {
      return [];
    }
  }

  function saveSubmissions(submissions) {
    localStorage.setItem(SUBMISSION_KEY, JSON.stringify(submissions));
  }

  function isAdmin() {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
  }

  function showToast(message) {
    if (!dom.toast) return;
    dom.toast.textContent = message;
    dom.toast.classList.add("is-visible");
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
      dom.toast.classList.remove("is-visible");
    }, 2600);
  }

  function openModal() {
    renderInbox();
    dom.modal.hidden = false;
    requestAnimationFrame(() => dom.modal.classList.add("is-open"));
  }

  function closeModal() {
    dom.modal.classList.remove("is-open");
    window.setTimeout(() => {
      dom.modal.hidden = true;
    }, 180);
  }

  function formatDate(value) {
    try {
      return new Intl.DateTimeFormat("no-NO", {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(new Date(value));
    } catch {
      return "Ukjent tidspunkt";
    }
  }

  function updateInboxButton() {
    const count = loadSubmissions().length;
    dom.trigger.hidden = !isAdmin();
    dom.trigger.textContent = count > 0 ? `Inbox (${count})` : "Inbox";
    if (dom.count) dom.count.textContent = count === 1 ? "1 innsending" : `${count} innsendinger`;
    if (dom.clear) dom.clear.disabled = count === 0;
  }

  function renderInbox() {
    const submissions = loadSubmissions();
    updateInboxButton();

    if (!submissions.length) {
      dom.list.innerHTML = `
        <div class="inbox-empty">
          <strong>Ingen innsendinger ennå.</strong>
          <p>Når noen sender inn fra denne nettleseren, dukker ideene opp her.</p>
        </div>
      `;
      return;
    }

    dom.list.innerHTML = submissions.map((submission) => `
      <article class="inbox-item">
        <div class="inbox-item-header">
          <div>
            <strong>${escapeHtml(submission.name)}</strong>
            <span>${escapeHtml(formatDate(submission.createdAt))}</span>
          </div>
          <button class="ghost-button danger compact" type="button" data-delete-submission="${escapeHtml(submission.id)}">Slett</button>
        </div>
        <p class="inbox-idea">${escapeHtml(submission.fullIdea)}</p>
        <dl class="inbox-meta">
          <div><dt>Valgt hjul</dt><dd>${escapeHtml(submission.categoryTitle)}</dd></div>
          <div><dt>Stilresultat</dt><dd>${escapeHtml(submission.styleResult)}</dd></div>
          <div><dt>Julesang</dt><dd>${escapeHtml(submission.songResult)}</dd></div>
        </dl>
        <p class="inbox-comment">${escapeHtml(submission.comment)}</p>
      </article>
    `).join("");
  }

  function addConfetti() {
    if (!dom.sparkLayer) return;
    const colors = ["#f5bf42", "#b11226", "#0f6b3a", "#ffffff"];
    dom.sparkLayer.insertAdjacentHTML(
      "beforeend",
      Array.from({ length: 36 }, () => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return `<span class="confetti" style="--x:${Math.random() * 100}vw; --dx:${-120 + Math.random() * 240}px; background:${color}"></span>`;
      }).join("")
    );
    window.setTimeout(() => {
      dom.sparkLayer.innerHTML = "";
    }, 2400);
  }

  function saveSubmission(event) {
    const styleResult = dom.styleResult.textContent.trim();
    const songResult = dom.songResult.textContent.trim();
    const hasResults = styleResult &&
      songResult &&
      styleResult !== "Ikke spunnet" &&
      songResult !== "Klar til spinn" &&
      songResult !== "Venter på stil";

    if (!hasResults) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const fullIdea = `Lag ${songResult} i stil med ${styleResult}.`;
    const submissions = loadSubmissions();
    submissions.unshift({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      createdAt: new Date().toISOString(),
      name: dom.name.value.trim() || "Anonym juleutfordrer",
      comment: dom.comment.value.trim() || "Ingen kommentar",
      categoryTitle: dom.styleTitle.textContent.trim(),
      styleResult,
      songResult,
      fullIdea
    });

    saveSubmissions(submissions);
    dom.form.reset();
    updateInboxButton();
    addConfetti();
    showToast("Ideen er lagret i admin-inboxen på denne nettleseren.");
  }

  dom.form.addEventListener("submit", saveSubmission, true);
  dom.trigger.addEventListener("click", () => {
    if (isAdmin()) openModal();
  });
  dom.openFromPanel?.addEventListener("click", () => {
    if (isAdmin()) openModal();
  });
  dom.close?.addEventListener("click", closeModal);
  dom.modal.addEventListener("click", (event) => {
    if (event.target === dom.modal) closeModal();
  });
  dom.list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-submission]");
    if (!button || !isAdmin()) return;
    saveSubmissions(loadSubmissions().filter((item) => item.id !== button.dataset.deleteSubmission));
    renderInbox();
    showToast("Innsendingen er slettet.");
  });
  dom.clear?.addEventListener("click", () => {
    if (!isAdmin()) return;
    saveSubmissions([]);
    renderInbox();
    showToast("Inboxen er tømt.");
  });
  dom.loginForm?.addEventListener("submit", () => window.setTimeout(updateInboxButton, 250));
  dom.logout?.addEventListener("click", () => window.setTimeout(updateInboxButton, 250));
  window.addEventListener("storage", updateInboxButton);

  updateInboxButton();
  renderInbox();
})();