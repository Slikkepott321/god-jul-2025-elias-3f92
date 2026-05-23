// Enkel frontend-admin for privat bruk. Dette er ikke ekte sikker innlogging,
// fordi brukernavn og passord ligger i klientkoden og kan leses av tekniske brukere.
const ADMIN_CREDENTIALS = {
  username: "elias.dinneboss@gmail.com",
  password: "Slikkepott123"
};

const STORAGE_KEYS = {
  doors: "eliasJulekalenderDoors",
  adminSession: "eliasJulekalenderAdminSession"
};

const MAX_VISIBLE_SEGMENTS = 28;

// Alle hjulkategorier bor her. Legg til nye kategorier eller flere items uten å endre spinnlogikken.
const wheelData = {
  songs: {
    title: "Julesang-hjul",
    icon: "🎄",
    description: "Klassikeren Elias må forvandle.",
    items: [
      "Last Christmas",
      "All I Want for Christmas Is You",
      "Jingle Bells",
      "Silent Night",
      "O Holy Night",
      "Feliz Navidad",
      "Driving Home for Christmas",
      "Santa Tell Me",
      "Rockin' Around the Christmas Tree",
      "Let It Snow",
      "Have Yourself a Merry Little Christmas",
      "White Christmas",
      "Santa Claus Is Coming to Town",
      "Mary, Did You Know?",
      "Fairytale of New York",
      "It's Beginning to Look a Lot Like Christmas",
      "Wonderful Christmastime",
      "Happy Xmas",
      "Do They Know It's Christmas?",
      "En stjerne skinner i natt",
      "Deilig er jorden",
      "Glade jul",
      "På låven sitter nissen",
      "Musevisa",
      "Romjulsdrøm",
      "Himmel på jord",
      "Jul i svingen",
      "Når himmelen faller ned",
      "Nordnorsk julesalme",
      "Tenn lys",
      "Jeg så mamma kysse nissen",
      "Nå tennes tusen julelys",
      "Et barn er født i Betlehem",
      "Rudolph the Red-Nosed Reindeer",
      "Blue Christmas",
      "The Christmas Song",
      "Winter Wonderland",
      "Sleigh Ride",
      "Underneath the Tree",
      "Mistletoe",
      "Christmas Lights",
      "Merry Christmas Everyone",
      "Step Into Christmas",
      "Little Drummer Boy",
      "Carol of the Bells",
      "God Rest Ye Merry Gentlemen",
      "What Christmas Means to Me",
      "Baby, It's Cold Outside",
      "A Holly Jolly Christmas",
      "Christmas Time Is Here",
      "Merry Xmas Everybody",
      "I Wish It Could Be Christmas Everyday",
      "Someday at Christmas",
      "This Christmas",
      "Please Come Home for Christmas",
      "Deck the Halls",
      "We Wish You a Merry Christmas",
      "Hark! The Herald Angels Sing",
      "Joy to the World",
      "O Come, All Ye Faithful",
      "O Come, O Come Emmanuel",
      "Angels We Have Heard on High",
      "Away in a Manger",
      "Coventry Carol",
      "Here Comes Santa Claus",
      "Silver Bells",
      "The First Noel",
      "We Three Kings",
      "I Saw Three Ships",
      "Good King Wenceslas",
      "It Came Upon the Midnight Clear",
      "Ding Dong Merrily on High",
      "Pat-a-Pan",
      "In the Bleak Midwinter",
      "Auld Lang Syne",
      "Merry Christmas",
      "Cozy Little Christmas",
      "Like It's Christmas",
      "Christmas Tree Farm",
      "One More Sleep",
      "8 Days of Christmas",
      "My Only Wish This Year",
      "Oh Santa!",
      "Santa Baby",
      "Merry Christmas, Happy Holidays",
      "Where Are You Christmas?",
      "You're a Mean One, Mr. Grinch",
      "Believe",
      "What's This?",
      "Somewhere in My Memory",
      "The Polar Express",
      "That Christmas Morning Feelin'",
      "December Song",
      "Julekveldsvisa",
      "Vi tenner våre lykter",
      "Nissen på låven",
      "Hei hå nå er det jul igjen",
      "Jul, jul, strålande jul",
      "Det hev ei rose sprunge",
      "Mitt hjerte alltid vanker",
      "Å kom nå med lovsang",
      "Her kommer dine arme små",
      "Kimer, I klokker",
      "Deilig er den himmel blå",
      "Skomakervise",
      "Julekveld i skogen",
      "Julenissen kommer i kveld",
      "Så går vi rundt om en enebærbusk",
      "Et lys imot mørketida",
      "Vårres jul",
      "Jul i Blåfjell",
      "Den lille stjernen"
    ]
  },
  genre: {
    title: "Sjanger-hjul",
    icon: "🎸",
    description: "Musikalsk sjanger og energi.",
    promptLabel: "Sjanger",
    items: [
      "Pop",
      "Rock",
      "Punk",
      "Metal",
      "Jazz",
      "Soul",
      "Funk",
      "Disco",
      "Country",
      "EDM",
      "House",
      "Techno",
      "Trance",
      "Hip-hop",
      "Trap",
      "R&B",
      "Gospel",
      "Reggae",
      "Ska",
      "Indie",
      "Folk",
      "Synthwave",
      "Hyperpop",
      "Lo-fi",
      "K-pop",
      "Latin pop",
      "Blues",
      "Opera",
      "Barokk",
      "Klassisk",
      "Drum and bass",
      "Dubstep",
      "Afrobeat",
      "Bossa nova",
      "Motown",
      "Grunge",
      "New wave",
      "Shoegaze",
      "Emo",
      "Post-rock",
      "Garage rock",
      "Britpop",
      "Dancehall",
      "Salsa",
      "Flamenco",
      "Reggaeton",
      "Ambient",
      "Industrial",
      "Bluegrass",
      "Swing",
      "Doo-wop",
      "Psychedelic rock",
      "Neo-soul",
      "Amapiano",
      "Jersey club",
      "UK garage",
      "Power ballad",
      "Vaporwave",
      "Dream pop",
      "Bedroom pop",
      "Art pop",
      "Chamber pop",
      "Dance-pop",
      "Electropop",
      "Alt-pop",
      "Bubblegum pop",
      "Pop punk",
      "Post-punk",
      "Hardcore punk",
      "Indie sleaze",
      "Math rock",
      "Prog rock",
      "Glam rock",
      "Classic rock",
      "Arena rock",
      "Heavy metal",
      "Black metal",
      "Death metal",
      "Power metal",
      "Doom metal",
      "Nu metal",
      "Metalcore",
      "Synth-pop",
      "Darkwave",
      "Chillwave",
      "Future bass",
      "Future funk",
      "Breakbeat",
      "Big beat",
      "Gabber",
      "Hardstyle",
      "IDM",
      "Glitch pop",
      "Phonk",
      "Drift phonk",
      "Cloud rap",
      "Boom bap",
      "Grime",
      "Drill",
      "Afroswing",
      "UK funky",
      "Nu-disco",
      "French house",
      "Acid house",
      "Deep house",
      "Minimal techno",
      "Electro swing",
      "Folkrock",
      "Visepop",
      "Danseband",
      "Russelåt",
      "Joik-pop",
      "Norsk bygdepop",
      "Kveding",
      "Nordic folk",
      "Free jazz",
      "Bebop",
      "Cool jazz",
      "Jazz fusion",
      "Smooth jazz",
      "Ragtime",
      "Chanson",
      "Tango",
      "Mariachi",
      "Cumbia",
      "Samba",
      "Highlife",
      "Gqom",
      "City pop",
      "J-pop",
      "C-pop"
    ]
  },
  artist: {
    title: "Artist-hjul",
    icon: "🎤",
    description: "Lag den som en ikonisk artist.",
    promptLabel: "Artist",
    items: [
      "Elvis Presley",
      "The Beatles",
      "Aretha Franklin",
      "Queen",
      "ABBA",
      "Michael Jackson",
      "Madonna",
      "Prince",
      "Whitney Houston",
      "Nirvana",
      "Oasis",
      "Britney Spears",
      "Beyoncé",
      "Coldplay",
      "Eminem",
      "Kanye West",
      "Lady Gaga",
      "Taylor Swift",
      "Bruno Mars",
      "Adele",
      "The Weeknd",
      "Billie Eilish",
      "Dua Lipa",
      "Harry Styles",
      "Olivia Rodrigo",
      "SZA",
      "Kendrick Lamar",
      "Tyler, The Creator",
      "Karpe",
      "A-ha",
      "Aurora",
      "Kygo",
      "Chuck Berry",
      "Little Richard",
      "Buddy Holly",
      "Ray Charles",
      "Nina Simone",
      "The Supremes",
      "Bob Dylan",
      "The Rolling Stones",
      "The Beach Boys",
      "Jimi Hendrix",
      "Janis Joplin",
      "Simon & Garfunkel",
      "Marvin Gaye",
      "Joni Mitchell",
      "Stevie Wonder",
      "David Bowie",
      "Fleetwood Mac",
      "Dolly Parton",
      "Bee Gees",
      "Elton John",
      "Led Zeppelin",
      "Pink Floyd",
      "Bruce Springsteen",
      "Tina Turner",
      "Metallica",
      "Bon Jovi",
      "U2",
      "The Cure",
      "Depeche Mode",
      "Guns N' Roses",
      "Mariah Carey",
      "Tupac",
      "The Notorious B.I.G.",
      "Radiohead",
      "Spice Girls",
      "Backstreet Boys",
      "NSYNC",
      "Daft Punk",
      "R.E.M.",
      "Red Hot Chili Peppers",
      "Rihanna",
      "Justin Timberlake",
      "Amy Winehouse",
      "Katy Perry",
      "Miley Cyrus",
      "Drake",
      "Lana Del Rey",
      "Frank Ocean",
      "Ariana Grande",
      "Post Malone",
      "Lizzo",
      "Doja Cat",
      "Bad Bunny",
      "Rosalía",
      "Tame Impala",
      "Hozier",
      "Sam Smith",
      "Ed Sheeran",
      "BTS",
      "Blackpink",
      "Phoebe Bridgers",
      "Lorde",
      "Charli XCX",
      "Mitski",
      "Steve Lacy",
      "Lil Nas X",
      "Ice Spice",
      "Sabrina Carpenter",
      "Chappell Roan",
      "Tate McRae",
      "Noah Kahan",
      "girl in red",
      "Sigrid",
      "Astrid S",
      "Alan Walker",
      "Dagny",
      "Chris Holsten",
      "Cezinando",
      "deLillos",
      "DumDum Boys",
      "Jokke & Valentinerne",
      "Raga Rockers",
      "Turboneger",
      "Madrugada",
      "Bigbang",
      "Kaizers Orchestra",
      "Highasakite",
      "Susanne Sundfør",
      "Sondre Lerche",
      "Maria Mena",
      "Ane Brun",
      "Odd Nordstoga",
      "Hellbillies",
      "D.D.E.",
      "Postgirobygget",
      "Trang Fødsel",
      "Seeb",
      "Matoma",
      "TIX",
      "Ballinciaga",
      "Undergrunn",
      "Emma Steinbakken",
      "Ramón",
      "Gabrielle",
      "Julie Bergan"
    ]
  },
  production: {
    title: "Produksjonsstil-hjul",
    icon: "🎛️",
    description: "Arrangement, lydbilde og produksjon.",
    promptLabel: "Produksjonsstil",
    items: [
      "Akustisk gitarversjon",
      "Stadionrock",
      "80-talls synth",
      "Lo-fi bedroom pop",
      "Disney-musikal",
      "Kirkekor",
      "Trap beat",
      "Funky basslinje",
      "Country-ballade",
      "Orkestral filmtrailer",
      "Eurovision-stil",
      "Norsk visepop",
      "TikTok-pop",
      "Jazzklubb",
      "Heavy metal-cover",
      "Reggae-versjon",
      "EDM festival-drop",
      "Piano-ballade",
      "Barbershop-kvartett",
      "Gospelkor",
      "VHS-julefilm",
      "Analog synth",
      "Boyband-ballade",
      "Stadionrefreng",
      "Norsk danseband",
      "Broadway-musikal",
      "Mørk trap",
      "Hyperpop remix",
      "Akustisk live session",
      "90-talls eurodance",
      "2000-talls radio-pop",
      "TikTok sped-up versjon",
      "Filmatisk trailer",
      "Barokk kammermusikk",
      "Lo-fi peiskos",
      "Girl group-harmonier",
      "Synthbass og gated reverb",
      "Storband med blåserekke",
      "Minimalistisk a cappella",
      "Ukulele ved peisen",
      "Hard autotune-pop",
      "Indie-film soundtrack",
      "Nordic noir-intro",
      "Barneskolekor",
      "Bossa nova-lounge",
      "Club remix",
      "Surf rock-gitarer",
      "Kassett-demo fra 1993",
      "Dramatisk powerballade",
      "Keltisk folkemusikk",
      "Game show-jingle",
      "Klassisk strykekvartett",
      "Garageband i kjelleren",
      "Broadway-finale",
      "Motown-julegroove",
      "Phil Spector wall of sound",
      "Nashville session band",
      "Berlin techno-klubb",
      "Ibiza sunset mix",
      "Chiptune-juleverksted",
      "8-bit bossfight",
      "Kirkeorgel og torden",
      "Svensk schlager",
      "Norsk russemiks",
      "Hybel-demo med billig mikrofon",
      "Royal Albert Hall live",
      "MTV Unplugged",
      "Tiny Desk-konsert",
      "Julemarked med trekkspill",
      "Stumfilm-piano",
      "Korps på torget",
      "Frostet ambient intro",
      "Massivt drop etter bjeller",
      "Whisper-pop med ASMR-vokal",
      "Karaoke-video fra 2004",
      "Glitrende disco-strykere",
      "Sakte vals i ballsal",
      "Hard rock gitar-solo",
      "Lo-fi hiphop radio",
      "Trap-kor med 808",
      "Operafinale",
      "Fjernsynsjulekalender-intro",
      "Dramatisk Disney-skurk-nummer",
      "Peisestue med kontrabass",
      "Rå live take uten klikk"
    ]
  },
  mood: {
    title: "Stemning-hjul",
    icon: "✨",
    description: "Følelsen sangen må bære.",
    promptLabel: "Stemning",
    items: [
      "Ekstremt glad",
      "Melankolsk",
      "Dramatisk",
      "Koselig",
      "Mystisk",
      "Episk",
      "Romantisk",
      "Kaotisk",
      "Barnslig og tullete",
      "Mørk og intens",
      "Nostalgisk",
      "Absurd",
      "Majestetisk",
      "Sårbar",
      "Vintermagisk",
      "Overtent",
      "Komisk dramatisk",
      "Mørk Disney-skurk",
      "Romantisk julefilm",
      "Norsk hyttekos",
      "Ensom desembernatt",
      "Familiekaos",
      "Himmelsk",
      "Snøstorm",
      "Triumferende",
      "Overdrevent teatralsk",
      "Veldig norsk",
      "Veldig amerikansk julefilm",
      "Ironisk",
      "Hjertevarm",
      "Stresset lille julaften",
      "Stille og hellig",
      "Rimelig passiv-aggressiv",
      "Overtent familiefest",
      "Drømmende",
      "Reklamefilm for pepperkaker",
      "Retro og glitrende",
      "Luksuriøs hotell-lobby",
      "Varm kakao etter midnatt",
      "Full julenisse-panikk",
      "Tårevåt finale",
      "Magisk adventsmorgen",
      "Lett absurd",
      "Høytidelig og stor",
      "Søvnig romjul",
      "Optimistisk nyttårsnær",
      "Knisete hemmelighetsfull",
      "Storslått og tårevåt",
      "Kaldt og minimalistisk",
      "Varmt og inkluderende",
      "Litt farlig",
      "Kaotisk julebord",
      "Kirkeklokker ved midnatt",
      "Håpefull etter stormen",
      "Klein familiesamling",
      "Eventyrlig skogstur",
      "Hjemlengsel på tog",
      "Snill rebell",
      "Glitrende selvtillit",
      "Urolig før gaveåpning",
      "Myk romjulsmorgen",
      "Frossen storby",
      "Hemningsløs allsang",
      "Stille etter festen",
      "Kongelig juleball",
      "Juleverksted på overtid",
      "Nesten litt skummelt",
      "Naivt og oppriktig",
      "Sofistikert nattklubb",
      "Overveldende takknemlig"
    ]
  }
};

const palette = [
  "#9f1239",
  "#166534",
  "#b7791f",
  "#7f1d1d",
  "#0f766e",
  "#be3a2f",
  "#315a8c",
  "#6d4c1f"
];

const state = {
  selectedCategory: "genre",
  styleResult: "",
  songResult: "",
  styleSpun: false,
  songSpun: false,
  spinning: false,
  isAdmin: sessionStorage.getItem(STORAGE_KEYS.adminSession) === "true",
  calendarLinks: loadCalendarLinks(),
  activeDoor: null,
  visibleWheelItems: {
    style: [],
    song: []
  },
  rotations: {
    style: 0,
    song: 0
  }
};

const dom = {
  adminTrigger: document.querySelector("#adminTrigger"),
  adminLoginModal: document.querySelector("#adminLoginModal"),
  adminPanelModal: document.querySelector("#adminPanelModal"),
  closeLoginModal: document.querySelector("#closeLoginModal"),
  closeAdminPanel: document.querySelector("#closeAdminPanel"),
  adminLoginForm: document.querySelector("#adminLoginForm"),
  adminUsername: document.querySelector("#adminUsername"),
  adminPassword: document.querySelector("#adminPassword"),
  adminLoginError: document.querySelector("#adminLoginError"),
  doorEditorForm: document.querySelector("#doorEditorForm"),
  doorEditorNote: document.querySelector("#doorEditorNote"),
  doorNumberInput: document.querySelector("#doorNumberInput"),
  doorUrlInput: document.querySelector("#doorUrlInput"),
  doorTitleInput: document.querySelector("#doorTitleInput"),
  doorEditorError: document.querySelector("#doorEditorError"),
  removeDoorLink: document.querySelector("#removeDoorLink"),
  cancelDoorEditor: document.querySelector("#cancelDoorEditor"),
  logoutButton: document.querySelector("#logoutButton"),
  toast: document.querySelector("#toast"),
  snowLayer: document.querySelector(".snow-layer"),
  sparkLayer: document.querySelector(".spark-layer"),
  categoryGrid: document.querySelector("#categoryGrid"),
  calendarGrid: document.querySelector("#calendarGrid"),
  styleWheel: document.querySelector("#styleWheel"),
  songWheel: document.querySelector("#songWheel"),
  styleWheelRotor: document.querySelector("#styleWheelRotor"),
  songWheelRotor: document.querySelector("#songWheelRotor"),
  styleWheelList: document.querySelector("#styleWheelList"),
  songWheelList: document.querySelector("#songWheelList"),
  styleWheelTitle: document.querySelector("#styleWheelTitle"),
  styleResultPill: document.querySelector("#styleResultPill"),
  songResultPill: document.querySelector("#songResultPill"),
  spinStyle: document.querySelector("#spinStyle"),
  spinSong: document.querySelector("#spinSong"),
  challengeText: document.querySelector("#challengeText"),
  summaryText: document.querySelector("#summaryText"),
  form: document.querySelector("#challengeForm"),
  sendButton: document.querySelector("#sendButton"),
  nameInput: document.querySelector("#nameInput"),
  commentInput: document.querySelector("#commentInput")
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadCalendarLinks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.doors)) || {};
  } catch {
    return {};
  }
}

function saveCalendarLinks() {
  localStorage.setItem(STORAGE_KEYS.doors, JSON.stringify(state.calendarLinks));
}

function normalizeUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) return "";
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  return new URL(withProtocol).href;
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    dom.toast.classList.remove("is-visible");
  }, 2600);
}

function openModal(modal) {
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add("is-open"));
}

function closeModal(modal) {
  modal.classList.remove("is-open");
  window.setTimeout(() => {
    modal.hidden = true;
  }, 180);
}

function polarToCartesian(cx, cy, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians)
  };
}

function describeArc(cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [`M ${cx} ${cy}`, `L ${start.x} ${start.y}`, `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`, "Z"].join(" ");
}

function truncateLabel(label, maxLength = 22) {
  return label.length > maxLength ? `${label.slice(0, maxLength - 1)}…` : label;
}

function sampleItems(items, count, requiredItem = "") {
  const unique = [...new Set(items)];
  const pool = unique.filter((item) => item !== requiredItem);
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }
  const sample = pool.slice(0, Math.max(0, count - (requiredItem ? 1 : 0)));
  if (requiredItem) {
    const insertAt = Math.floor(Math.random() * (sample.length + 1));
    sample.splice(insertAt, 0, requiredItem);
  }
  return sample;
}

function createVisibleWheelItems(items, requiredItem = "") {
  if (items.length <= MAX_VISIBLE_SEGMENTS && (!requiredItem || items.includes(requiredItem))) {
    return [...items];
  }
  return sampleItems(items, MAX_VISIBLE_SEGMENTS, requiredItem);
}

function getLabelSettings(itemCount) {
  if (itemCount >= 26) return { fontSize: 2.05, maxLength: 20, radius: 44 };
  if (itemCount >= 20) return { fontSize: 2.25, maxLength: 22, radius: 43 };
  return { fontSize: 2.55, maxLength: 24, radius: 42 };
}

// SpinningWheel: tegner et lesbart hjul. Ved store lister vises et smart utvalg,
// men resultatet som trekkes fra full liste blir alltid lagt på hjulet før spinn.
function SpinningWheel(svg, items, ariaLabel) {
  const slice = 360 / items.length;
  const labelSettings = getLabelSettings(items.length);
  const segments = items
    .map((item, index) => {
      const start = index * slice;
      const end = start + slice;
      const mid = start + slice / 2;
      const textPoint = polarToCartesian(50, 50, labelSettings.radius, mid);
      const isLeftSide = mid > 180;
      const rotate = isLeftSide ? mid + 90 : mid - 90;
      const color = palette[index % palette.length];
      return `
        <g>
          <path d="${describeArc(50, 50, 48, start, end)}" fill="${color}"></path>
          <path d="${describeArc(50, 50, 48, start, end)}" fill="none" stroke="rgba(255,255,255,.55)" stroke-width=".42"></path>
          <text x="${textPoint.x}" y="${textPoint.y}" font-size="${labelSettings.fontSize}" text-anchor="${isLeftSide ? "start" : "end"}" transform="rotate(${rotate} ${textPoint.x} ${textPoint.y})">${escapeHtml(truncateLabel(item, labelSettings.maxLength))}</text>
        </g>
      `;
    })
    .join("");

  svg.setAttribute("aria-label", ariaLabel);
  svg.innerHTML = `${segments}<circle cx="50" cy="50" r="48" fill="none" stroke="#fff8e7" stroke-width="1.2"></circle>`;
}

function renderWheelList(container, items) {
  container.innerHTML = items
    .map((item, index) => `<span title="${escapeHtml(item)}">${index + 1}. ${escapeHtml(item)}</span>`)
    .join("");
}

// WheelSelector: stilkortene som bytter hvilket ekstra hjul som brukes.
function WheelSelector() {
  const categories = ["genre", "artist", "production", "mood"];
  dom.categoryGrid.innerHTML = categories
    .map((key) => {
      const category = wheelData[key];
      const selected = key === state.selectedCategory;
      return `
        <button class="category-card" type="button" data-category="${key}" aria-pressed="${selected}">
          <span aria-hidden="true">${category.icon}</span>
          <strong>${escapeHtml(category.title.replace("-hjul", ""))}</strong>
          <small>${escapeHtml(category.description)}</small>
        </button>
      `;
    })
    .join("");
}

function renderSelectedStyleWheel() {
  const category = wheelData[state.selectedCategory];
  state.visibleWheelItems.style = createVisibleWheelItems(category.items);
  dom.styleWheelTitle.textContent = category.title;
  SpinningWheel(dom.styleWheel, state.visibleWheelItems.style, category.title);
  renderWheelList(dom.styleWheelList, category.items);
}

function renderSongWheel() {
  state.visibleWheelItems.song = createVisibleWheelItems(wheelData.songs.items);
  SpinningWheel(dom.songWheel, state.visibleWheelItems.song, wheelData.songs.title);
  renderWheelList(dom.songWheelList, wheelData.songs.items);
}

function resetResultsForCategory() {
  state.styleResult = "";
  state.songResult = "";
  state.styleSpun = false;
  state.songSpun = false;
  state.rotations.style = 0;
  state.rotations.song = 0;
  setRotorRotation(dom.styleWheelRotor, 0);
  setRotorRotation(dom.songWheelRotor, 0);
  renderSelectedStyleWheel();
  renderSongWheel();
  ResultCard();
}

function setRotorRotation(rotor, degrees) {
  rotor.style.setProperty("--wheel-rotation", `${degrees}deg`);
  rotor.style.transform = "";
}

function getCurrentRotorDegrees(rotor) {
  const transform = getComputedStyle(rotor).transform;
  if (!transform || transform === "none") return 0;
  const matrix = new DOMMatrixReadOnly(transform);
  const degrees = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
  return ((degrees % 360) + 360) % 360;
}

function normalizeDegrees(degrees) {
  return ((degrees % 360) + 360) % 360;
}

function spinWheel({ svg, rotor, key, sourceItems, title, onComplete }) {
  if (state.spinning) return;

  const selectedItem = sourceItems[Math.floor(Math.random() * sourceItems.length)];
  const visibleItems = createVisibleWheelItems(sourceItems, selectedItem);
  const selectedIndex = visibleItems.indexOf(selectedItem);
  state.visibleWheelItems[key] = visibleItems;
  SpinningWheel(svg, visibleItems, title);

  state.spinning = true;
  setControls();
  rotor.classList.add("is-kicking");
  ringBell();
  launchConfetti();

  // Resultatet trekkes først. Rotasjonen plasserer deretter samme segment under pekeren.
  const slice = 360 / visibleItems.length;
  const selectedCenter = selectedIndex * slice + slice / 2;
  const targetRotation = normalizeDegrees(360 - selectedCenter);
  const startRotation = getCurrentRotorDegrees(rotor);
  const travelToTarget = normalizeDegrees(targetRotation - startRotation);
  const finalRotation = startRotation + 360 * 7 + travelToTarget;

  state.rotations[key] = finalRotation;
  rotor.style.transform = `rotate(${startRotation}deg)`;

  window.setTimeout(() => {
    rotor.classList.remove("is-kicking");
    rotor.classList.add("is-spinning");
    rotor.offsetWidth;
    rotor.style.transform = `rotate(${finalRotation}deg)`;
  }, 180);

  window.setTimeout(() => {
    rotor.classList.remove("is-spinning");
    setRotorRotation(rotor, finalRotation);
    state.spinning = false;
    onComplete(selectedItem);
    ResultCard();
    setControls();
  }, 5350);
}

function setControls() {
  dom.spinStyle.disabled = state.spinning;
  dom.spinSong.disabled = state.spinning || !state.styleSpun;
  dom.sendButton.disabled = !state.styleSpun || !state.songSpun;
}

// ResultCard: holder resultatfeltet og mailto-status samlet.
function ResultCard() {
  const category = wheelData[state.selectedCategory];
  dom.styleResultPill.textContent = state.styleResult || "Ikke spunnet";
  dom.styleResultPill.title = state.styleResult || "";
  dom.songResultPill.textContent = state.songResult ? state.songResult : state.styleSpun ? "Klar til spinn" : "Venter på stil";
  dom.songResultPill.title = state.songResult || "";

  if (!state.styleSpun && !state.songSpun) {
    dom.challengeText.textContent = "Spinn hjulene og send ideen til Elias.";
    dom.summaryText.textContent = "Velg en stilkategori og en julesang. Resultatet blir en idé Elias kan lage som julevideo.";
    return;
  }

  if (state.styleSpun && !state.songSpun) {
    dom.challengeText.textContent = `Stilen er ${state.styleResult}.`;
    dom.summaryText.textContent = "Nå mangler bare julesangen. Spinn julesang-hjulet for å gjøre innsendingen klar.";
    return;
  }

  dom.challengeText.textContent = `Send inn: Elias lager ${state.songResult} i stil med ${state.styleResult}.`;
  dom.summaryText.textContent = `Ideen kombinerer ${category.promptLabel.toLowerCase()}en "${state.styleResult}" med "${state.songResult}", klar til å sendes inn til Elias sin julekalender.`;
}

function buildMailtoUrl() {
  const category = wheelData[state.selectedCategory];
  const name = dom.nameInput.value.trim() || "Anonym juleutfordrer";
  const comment = dom.commentInput.value.trim() || "Ingen kommentar";
  const fullChallenge = `Lag ${state.songResult} i stil med ${state.styleResult}.`;
  const body = [
    `Navn: ${name}`,
    `Kommentar/ønske: ${comment}`,
    "",
    `Valgt hjul: ${category.title}`,
    `Resultat fra stilhjulet: ${state.styleResult}`,
    `Valgt julesang: ${state.songResult}`,
    "",
    `Full idé: ${fullChallenge}`
  ].join("\n");

  return `mailto:elias.dinneboss@gmail.com?subject=${encodeURIComponent("Ny julekalender-idé")}&body=${encodeURIComponent(body)}`;
}

// CalendarDoor: en enkelt luke. Admin får redigering, vanlig bruker åpner lagret lenke.
function CalendarDoor(day, data) {
  const hasLink = Boolean(data?.url);
  const title = data?.title?.trim();
  const tag = hasLink && !state.isAdmin ? "a" : "button";
  const linkAttributes = tag === "a" ? `href="${escapeHtml(data.url)}" target="_blank" rel="noopener noreferrer"` : `type="button"`;
  return `
    <${tag} class="calendar-door ${hasLink ? "has-link" : ""} ${state.isAdmin ? "is-admin" : ""}" ${linkAttributes} data-door="${day}" aria-label="Luke ${day}${hasLink ? `: ${escapeHtml(title || "åpne lenke")}` : " ikke klar"}">
      <span class="door-number">${day}</span>
      ${hasLink ? `<strong>${escapeHtml(title || `Luke ${day}`)}</strong><small>${state.isAdmin ? "Klikk for å redigere" : "Åpne luke"}</small>` : `<strong>Kommer ${day}. desember</strong><small>Luke ${day}</small>`}
    </${tag}>
  `;
}

// CalendarGrid: alle 24 kalenderlukene.
function CalendarGrid() {
  dom.calendarGrid.innerHTML = Array.from({ length: 24 })
    .map((_, index) => {
      const day = index + 1;
      return CalendarDoor(day, state.calendarLinks[day]);
    })
    .join("");
}

// AdminLogin: enkel lokal innlogging mot hardkodede credentials.
function AdminLogin() {
  dom.adminTrigger.textContent = state.isAdmin ? "Adminpanel" : "Admin-innlogging";
  document.body.classList.toggle("admin-active", state.isAdmin);
}

function loginAdmin() {
  const username = dom.adminUsername.value.trim();
  const password = dom.adminPassword.value;
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    state.isAdmin = true;
    sessionStorage.setItem(STORAGE_KEYS.adminSession, "true");
    dom.adminLoginError.textContent = "";
    dom.adminLoginForm.reset();
    closeModal(dom.adminLoginModal);
    AdminLogin();
    CalendarGrid();
    showToast("Adminpanel er aktivert.");
    return;
  }

  dom.adminLoginError.textContent = "Feil brukernavn eller passord.";
}

function logoutAdmin() {
  state.isAdmin = false;
  sessionStorage.removeItem(STORAGE_KEYS.adminSession);
  closeModal(dom.adminPanelModal);
  AdminLogin();
  CalendarGrid();
  showToast("Du er logget ut av adminpanelet.");
}

// AdminPanel/AdminModal: editoren som kobler URL og tittel til riktig luke.
function AdminPanel(day) {
  const saved = state.calendarLinks[day] || {};
  state.activeDoor = day;
  dom.doorNumberInput.value = String(day);
  dom.doorUrlInput.value = saved.url || "";
  dom.doorTitleInput.value = saved.title || "";
  dom.doorEditorError.textContent = "";
  dom.doorEditorNote.textContent = `Rediger luke ${day}. Lenken lagres lokalt i denne nettleseren.`;
  dom.removeDoorLink.disabled = !saved.url;
  openModal(dom.adminPanelModal);
  window.setTimeout(() => dom.doorUrlInput.focus(), 80);
}

function saveDoorLink() {
  const day = Number(dom.doorNumberInput.value);
  const title = dom.doorTitleInput.value.trim();
  let url = "";

  if (!Number.isInteger(day) || day < 1 || day > 24) {
    dom.doorEditorError.textContent = "Velg en luke i kalenderen før du lagrer.";
    return;
  }

  try {
    url = normalizeUrl(dom.doorUrlInput.value);
  } catch {
    dom.doorEditorError.textContent = "Skriv inn en gyldig URL.";
    return;
  }

  if (!url) {
    dom.doorEditorError.textContent = "Legg inn en URL før du lagrer.";
    return;
  }

  state.calendarLinks[day] = { url, title };
  saveCalendarLinks();
  CalendarGrid();
  closeModal(dom.adminPanelModal);
  showToast(`Luke ${day} er lagret.`);
}

function removeDoorLink() {
  const day = Number(dom.doorNumberInput.value);
  if (!Number.isInteger(day) || day < 1 || day > 24) {
    dom.doorEditorError.textContent = "Velg en luke i kalenderen først.";
    return;
  }
  delete state.calendarLinks[day];
  saveCalendarLinks();
  CalendarGrid();
  closeModal(dom.adminPanelModal);
  showToast(`Lenken på luke ${day} er fjernet.`);
}

function handleDoorClick(day) {
  const data = state.calendarLinks[day];
  if (state.isAdmin) {
    AdminPanel(day);
    return;
  }

  if (!data?.url) {
    showToast("Denne luka er ikke klar ennå 🎄");
    return;
  }
}

function createSnow() {
  const flakes = ["✦", "✧", "❄", "•"];
  const count = window.matchMedia("(max-width: 560px)").matches ? 32 : 58;
  dom.snowLayer.innerHTML = Array.from({ length: count })
    .map(() => {
      const left = Math.random() * 100;
      const duration = 10 + Math.random() * 14;
      const delay = Math.random() * -20;
      const drift = -36 + Math.random() * 72;
      const size = 0.5 + Math.random() * 1;
      const flake = flakes[Math.floor(Math.random() * flakes.length)];
      return `<span class="snowflake" style="left:${left}%; --drift:${drift}px; animation-duration:${duration}s; animation-delay:${delay}s; font-size:${size}rem">${flake}</span>`;
    })
    .join("");
}

function launchConfetti() {
  const colors = ["#f5bf42", "#b11226", "#0f6b3a", "#ffffff", "#d9f7ff"];
  const html = Array.from({ length: 42 })
    .map(() => {
      const x = Math.random() * 100;
      const dx = -120 + Math.random() * 240;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 0.28;
      return `<span class="confetti" style="--x:${x}vw; --dx:${dx}px; background:${color}; animation-delay:${delay}s"></span>`;
    })
    .join("");

  dom.sparkLayer.insertAdjacentHTML("beforeend", html);
  window.setTimeout(() => {
    dom.sparkLayer.innerHTML = "";
  }, 2400);
}

function ringBell() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const audio = new AudioContext();
  const now = audio.currentTime;
  [880, 1175, 1568].forEach((frequency, index) => {
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, now + index * 0.045);
    gain.gain.setValueAtTime(0.0001, now + index * 0.045);
    gain.gain.exponentialRampToValueAtTime(0.085, now + index * 0.065);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55 + index * 0.08);
    oscillator.connect(gain).connect(audio.destination);
    oscillator.start(now + index * 0.045);
    oscillator.stop(now + 0.7 + index * 0.08);
  });
  window.setTimeout(() => audio.close(), 1000);
}

function bindEvents() {
  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(button.dataset.scrollTarget).scrollIntoView({ behavior: "smooth" });
    });
  });

  dom.adminTrigger.addEventListener("click", () => {
    if (state.isAdmin) {
      openModal(dom.adminPanelModal);
      dom.doorEditorNote.textContent = "Velg en luke i kalenderen for å redigere, eller logg ut her.";
      dom.doorNumberInput.value = "";
      dom.doorUrlInput.value = "";
      dom.doorTitleInput.value = "";
      dom.removeDoorLink.disabled = true;
      return;
    }
    openModal(dom.adminLoginModal);
    window.setTimeout(() => dom.adminUsername.focus(), 80);
  });

  dom.closeLoginModal.addEventListener("click", () => closeModal(dom.adminLoginModal));
  dom.closeAdminPanel.addEventListener("click", () => closeModal(dom.adminPanelModal));
  dom.cancelDoorEditor.addEventListener("click", () => closeModal(dom.adminPanelModal));
  dom.logoutButton.addEventListener("click", logoutAdmin);

  dom.adminLoginModal.addEventListener("click", (event) => {
    if (event.target === dom.adminLoginModal) closeModal(dom.adminLoginModal);
  });

  dom.adminPanelModal.addEventListener("click", (event) => {
    if (event.target === dom.adminPanelModal) closeModal(dom.adminPanelModal);
  });

  dom.adminLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loginAdmin();
  });

  dom.doorEditorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveDoorLink();
  });

  dom.removeDoorLink.addEventListener("click", removeDoorLink);

  dom.categoryGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button || state.spinning) return;
    state.selectedCategory = button.dataset.category;
    WheelSelector();
    resetResultsForCategory();
    setControls();
  });

  dom.calendarGrid.addEventListener("click", (event) => {
    const door = event.target.closest("[data-door]");
    if (!door) return;
    if (!state.isAdmin && door.tagName === "A") return;
    handleDoorClick(Number(door.dataset.door));
  });

  dom.spinStyle.addEventListener("click", () => {
    const category = wheelData[state.selectedCategory];
    spinWheel({
      svg: dom.styleWheel,
      rotor: dom.styleWheelRotor,
      key: "style",
      sourceItems: category.items,
      title: category.title,
      onComplete: (result) => {
        state.styleResult = result;
        state.styleSpun = true;
        state.songResult = "";
        state.songSpun = false;
        state.rotations.song = 0;
        setRotorRotation(dom.songWheelRotor, 0);
        renderSongWheel();
      }
    });
  });

  dom.spinSong.addEventListener("click", () => {
    spinWheel({
      svg: dom.songWheel,
      rotor: dom.songWheelRotor,
      key: "song",
      sourceItems: wheelData.songs.items,
      title: wheelData.songs.title,
      onComplete: (result) => {
        state.songResult = result;
        state.songSpun = true;
      }
    });
  });

  dom.form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!state.styleSpun || !state.songSpun) return;
    window.location.href = buildMailtoUrl();
  });
}

function init() {
  createSnow();
  AdminLogin();
  WheelSelector();
  CalendarGrid();
  renderSelectedStyleWheel();
  renderSongWheel();
  ResultCard();
  setControls();
  bindEvents();
}

init();
