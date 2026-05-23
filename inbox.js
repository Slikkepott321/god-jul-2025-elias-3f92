// Fallback-inbox for the deployed static site. If script.js already contains
// native inbox support, this file exits quietly to avoid double-handling.
if (!window.ELIAS_INBOX_NATIVE) {
  const SUBMISSION_KEY = "eliasJulekalenderSubmissions";
  const ADMIN_SESSION_KEY = "eliasJulekalenderAdminSession";

  const inboxDom = {
    trigger: document.querySelector("#inboxTrigger"),
    modal: document.querySelector("#inboxModal"),
    close: document.querySelector("#closeInboxModal"),
    list: document.querySelector("#inboxList"),
    count: document.querySelector("#inboxCount"),
    clear: document.querySelector("#clearInboxButton"),
    form: document.querySelector("#challengeForm"),
    name: document.querySelector("#nameInput"),
    comment: document.querySelector("#commentInput"),
    styleResult: document.querySelector("#styleResultPill"),
    songResult: document.querySelector("#songResultPill"),
    styleTitle: document.querySelector("#styleWheelTitle"),
    loginForm: document.querySelector("#adminLoginForm"),
    logout: document.querySelector("#logoutButton"),
    openFromPanel: document.querySelector("#openInboxFromPanel"),
    toast: document.querySelector("#toast"),
    sparkLayer: document.querySelector(".spark-layer")
  };

  function escapeInboxHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function loadInboxSubmissions() {
    try {
      const submissions = JSON.parse(localStorage.getItem(SUBMISSION_KEY)) || [];
      return Array.isArray(submissions) ? submissions : [];
    } catch {
      return [];
    }
  }

  function saveInboxSubmissions(submissions) {
    localStorage.setItem(SUBMISSION_KEY, JSON.stringify(submissions));
  }

  function isInboxAdmin() {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
  }

  function showInboxToast(message) {
    if (!inboxDom.toast) return;
    inboxDom.toast.textContent = message;
    inboxDom.toast.classList.add("is-visible");
    window.clearTimeout(showInboxToast.timeoutId);
    showInboxToast.timeoutId = window.setTimeout(() => {
      inboxDom.toast.classList.remove("is-visible");
    }, 2600);
  }

  function openInboxModal() {
    renderInbox();
    inboxDom.modal.hidden = false;
    requestAnimationFrame(() => inboxDom.modal.classList.add("is-open"));
  }

  function closeInboxModal() {
    inboxDom.modal.classList.remove("is-open");
    window.setTimeout(() => {
      inboxDom.modal.hidden = true;
    }, 180);
  }

  function formatInboxDate(value) {
    return new Intl.DateTimeFormat("no-NO", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(value));
  }

  function updateInboxButton() {
    const count = loadInboxSubmissions().length;
    inboxDom.trigger.hidden = !isInboxAdmin();
    inboxDom.trigger.textContent = count > 0 ? `Inbox (${count})` : "Inbox";
    inboxDom.count.textContent = count === 1 ? "1 innsending" : `${count} innsendinger`;
    inboxDom.clear.disabled = count === 0;
  }

  function renderInbox() {
    const submissions = loadInboxSubmissions();
    updateInboxButton();
    if (!submissions.length) {
      inboxDom.list.innerHTML = `
        <div class="inbox-empty">
          <strong>Ingen innsendinger ennå.</strong>
          <p>Når noen sender inn fra denne nettleseren, dukker ideene opp her.</p>
        </div>
      `;
      return;
    }

    inboxDom.list.innerHTML = submissions
      .map((submission) => `
        <article class="inbox-item">
          <div class="inbox-item-header">
            <div>
              <strong>${escapeInboxHtml(submission.name)}</strong>
              <span>${escapeInboxHtml(formatInboxDate(submission.createdAt))}</span>
            </div>
            <button class="ghost-button danger compact" type="button" data-delete-submission="${escapeInboxHtml(submission.id)}">Slett</button>
          </div>
          <p class="inbox-idea">${escapeInboxHtml(submission.fullIdea)}</p>
          <dl class="inbox-meta">
            <div><dt>Valgt hjul</dt><dd>${escapeInboxHtml(submission.categoryTitle)}</dd></div>
            <div><dt>Stilresultat</dt><dd>${escapeInboxHtml(submission.styleResult)}</dd></div>
            <div><dt>Julesang</dt><dd>${escapeInboxHtml(submission.songResult)}</dd></div>
          </dl>
          <p class="inbox-comment">${escapeInboxHtml(submission.comment)}</p>
        </article>
      `)
      .join("");
  }

  function addInboxConfetti() {
    if (!inboxDom.sparkLayer) return;
    inboxDom.sparkLayer.insertAdjacentHTML(
      "beforeend",
      Array.from({ length: 36 })
        .map(() => {
          const color = ["#f5bf42", "#b11226", "#0f6b3a", "#ffffff"][Math.floor(Math.random() * 4)];
          return `<span class="confetti" style="--x:${Math.random() * 100}vw; --dx:${-120 + Math.random() * 240}px; background:${color}"></span>`;
        })
        .join("")
    );
    window.setTimeout(() => {
      inboxDom.sparkLayer.innerHTML = "";
    }, 2400);
  }

  function saveInboxSubmission(event) {
    const styleResult = inboxDom.styleResult.textContent.trim();
    const songResult = inboxDom.songResult.textContent.trim();
    if (!styleResult || !songResult || styleResult === "Ikke spunnet" || songResult === "Klar til spinn" || songResult === "Venter på stil") {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    const fullIdea = `Lag ${songResult} i stil med ${styleResult}.`;
    const submissions = loadInboxSubmissions();
    submissions.unshift({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      createdAt: new Date().toISOString(),
      name: inboxDom.name.value.trim() || "Anonym juleutfordrer",
      comment: inboxDom.comment.value.trim() || "Ingen kommentar",
      categoryTitle: inboxDom.styleTitle.textContent.trim(),
      styleResult,
      songResult,
      fullIdea
    });
    saveInboxSubmissions(submissions);
    inboxDom.form.reset();
    updateInboxButton();
    addInboxConfetti();
    showInboxToast("Ideen er lagret i admin-inboxen på denne nettleseren.");
  }

  inboxDom.form.addEventListener("submit", saveInboxSubmission, true);
  inboxDom.trigger.addEventListener("click", () => {
    if (isInboxAdmin()) openInboxModal();
  });
  inboxDom.openFromPanel.addEventListener("click", () => {
    if (isInboxAdmin()) openInboxModal();
  });
  inboxDom.close.addEventListener("click", closeInboxModal);
  inboxDom.modal.addEventListener("click", (event) => {
    if (event.target === inboxDom.modal) closeInboxModal();
  });
  inboxDom.list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-submission]");
    if (!button || !isInboxAdmin()) return;
    saveInboxSubmissions(loadInboxSubmissions().filter((item) => item.id !== button.dataset.deleteSubmission));
    renderInbox();
    showInboxToast("Innsendingen er slettet.");
  });
  inboxDom.clear.addEventListener("click", () => {
    if (!isInboxAdmin()) return;
    saveInboxSubmissions([]);
    renderInbox();
    showInboxToast("Inboxen er tømt.");
  });
  inboxDom.loginForm.addEventListener("submit", () => window.setTimeout(updateInboxButton, 250));
  inboxDom.logout.addEventListener("click", () => window.setTimeout(updateInboxButton, 250));
  window.addEventListener("storage", updateInboxButton);

  updateInboxButton();
  renderInbox();
}
