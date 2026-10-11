/* Pop Music Quiz — a minimal music quiz
 * Clips: 30-second previews from Apple's iTunes Search API (no key needed),
 * looked up live from the browser via JSONP and cached in localStorage. */

(() => {
"use strict";

/* ================= text matching ================= */

function norm(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/ø/g, "o").replace(/æ/g, "ae").replace(/ß/g, "ss")
    .replace(/&|\+/g, " and ")
    .replace(/\$/g, "s")
    .replace(/['’`´.]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\bpart\b/g, "pt")
    .replace(/\bii\b/g, "2")
    .replace(/^the /, "")
    .trim();
}
function stripExtras(title) {
  return title
    .replace(/\s*[\(\[][^\)\]]*[\)\]]\s*/g, " ")   // (feat. …), (Remix), (Taylor's Version)…
    .replace(/\s+-\s+.*$/, "")                     // " - Single Version"
    .replace(/\s+(feat|ft|with)\.?\s.*$/i, "")
    .trim();
}
function lev(a, b) {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}
function tolerance(len) { return len <= 3 ? 0 : len <= 6 ? 1 : len <= 12 ? 2 : 3; }

function artistVariants(song) {
  const parts = song.artist.split(/\s*(?:&|,|\bx\b|\band\b|\bvs\.?)\s*/i);
  return [...new Set([song.artist, ...parts, ...song.aliases].map(norm).filter(Boolean))];
}
function titleVariants(song) {
  const v = [song.title, stripExtras(song.title)];
  // "(It Goes Like) Nanana" style: keep the bracketed words too
  v.push(song.title.replace(/[\(\)\[\]]/g, " "));
  return [...new Set(v.map(norm).filter(Boolean))];
}
function isMatch(answer, variants) {
  const a = norm(answer);
  if (!a) return false;
  const ac = a.replace(/ /g, "");
  return variants.some(v => {
    const vc = v.replace(/ /g, "");
    if (a === v || ac === vc) return true;
    // typos are forgiven, but not dropping whole words ("Confessions" ≠ "Confessions Part II")
    const tol = tolerance(vc.length);
    return Math.abs(ac.length - vc.length) <= Math.max(1, tol - 1) && lev(ac, vc) <= tol;
  });
}

/* ================= iTunes lookup ================= */

const CACHE_PREFIX = "snippet:v2:";
const CACHE_DAYS = 14;

function jsonp(url, timeoutMs = 9000) {
  return new Promise((resolve, reject) => {
    const cb = "snip_" + Math.random().toString(36).slice(2);
    const s = document.createElement("script");
    let done = false;
    const finish = () => { done = true; clearTimeout(t); s.remove(); window[cb] = () => {}; };
    const t = setTimeout(() => { if (!done) { finish(); reject(new Error("timeout")); } }, timeoutMs);
    window[cb] = data => { if (!done) { finish(); resolve(data); } };
    s.onerror = () => { if (!done) { finish(); reject(new Error("network")); } };
    s.src = url + (url.includes("?") ? "&" : "?") + "callback=" + cb;
    document.head.appendChild(s);
  });
}

const BAD_WORDS = /karaoke|instrumental|tribute|in the style of|originally performed|8-bit|lullaby|made famous|cover|rockabye/i;
// bracketed extras that are fine on a track name ("(feat. X)", "(Taylor's Version)", "(Remastered)"…)
const OK_EXTRAS = /^(feat|ft|with)\b|taylor.?s version|remaster|radio edit|radio version|main version|single version|album version|from the vault|^edit$|original version|explicit|clean/i;

function scoreResult(song, r) {
  if (!r.previewUrl || r.kind !== "song") return -1;
  if (BAD_WORDS.test(r.trackName) || BAD_WORDS.test(r.collectionName || "") || BAD_WORDS.test(r.artistName)) return -1;
  const ra = norm(r.artistName);
  const artistOk = artistVariants(song).some(v => ra.includes(v) || v.includes(ra));
  if (!artistOk) return -1;
  const want = norm(stripExtras(song.title));
  const got = norm(stripExtras(r.trackName));
  let s;
  if (got === want) s = 10;
  else if (lev(got, want) <= tolerance(want.length)) s = 8;
  else return -1;
  const wanted = (song.title.match(/[\(\[][^\)\]]*[\)\]]/g) || []).map(norm);
  for (const x of (r.trackName.match(/[\(\[][^\)\]]*[\)\]]/g) || [])) {
    if (wanted.includes(norm(x))) continue;
    if (!OK_EXTRAS.test(x.slice(1, -1).trim())) s -= 3;   // remix, live, re-edit…
  }
  if (/\blive\b|remix|session|itunes originals|karaoke|mixes|acoustic/i.test(r.collectionName || "")) s -= 5;
  return s;
}

async function searchItunes(term) {
  const url = "https://itunes.apple.com/search?media=music&entity=song&country=US&limit=15&term=" +
    encodeURIComponent(term);
  const data = await jsonp(url);
  return (data && data.results) || [];
}

const memCache = new Map();

async function resolveSong(song, { force = false } = {}) {
  const key = CACHE_PREFIX + song.id + ":" + norm(song.artist + " " + song.title);
  if (!force) {
    if (memCache.has(key)) return memCache.get(key);
    try {
      const c = JSON.parse(localStorage.getItem(key) || "null");
      if (c && Date.now() - c.ts < CACHE_DAYS * 864e5) { memCache.set(key, c.data); return c.data; }
    } catch (e) {}
  }
  // 1) exact track pinned in songs.js
  const pinned = typeof TRACK_IDS !== "undefined" && TRACK_IDS[song.artist + " | " + song.title];
  if (pinned) {
    try {
      const d = await jsonp(`https://itunes.apple.com/lookup?id=${pinned}&country=US&entity=song`);
      const r = d && d.results && d.results.find(x => x.previewUrl);
      if (r) return store(key, pack(r));
    } catch (e) {}
  }
  // 2) fall back to searching
  const primary = song.artist.split(/\s+&\s+/)[0];
  const terms = [primary + " " + stripExtras(song.title), stripExtras(song.title) + " " + song.artist];
  let best = null, bestScore = 0;
  for (const term of terms) {
    let results = [];
    try { results = await searchItunes(term); } catch (e) { if (term === terms[0]) continue; else break; }
    for (const r of results) {
      const sc = scoreResult(song, r);
      if (sc > bestScore) { best = r; bestScore = sc; }
    }
    if (bestScore >= 10) break;
  }
  return store(key, best && bestScore >= 5 ? pack(best) : null);
}
function pack(r) {
  return {
    previewUrl: r.previewUrl,
    artwork: (r.artworkUrl100 || "").replace(/100x100bb/, "600x600bb"),
    trackName: r.trackName,
    artistName: r.artistName
  };
}
function store(key, data) {
  memCache.set(key, data);
  // a miss is only remembered for a day, so it gets retried
  try { localStorage.setItem(key, JSON.stringify({ ts: data ? Date.now() : Date.now() - (CACHE_DAYS - 1) * 864e5, data })); } catch (e) {}
  return data;
}

/* ================= state ================= */

const $app = document.getElementById("app");
const $top = document.getElementById("topRight");
const audio = document.getElementById("audio");

const MAX_PLAYERS = 6;
// buzz keys sit at the corners/edges of the keyboard so people can crowd round one laptop
const BUZZ_KEYS = ["a", "l", "z", "m", "q", "p"];
const prefs = loadPrefs();
function loadPrefs() {
  const d = { players: 1, vsCount: 2, mode: "artist", decade: "00s", rounds: 10, names: [] };
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem("snippet:prefs") || "{}") || {}; } catch (e) {}
  const p = Object.assign(d, saved);
  if (!Array.isArray(p.names)) p.names = [];
  if (p.players > 1) {   // older saves stored the head-count in "players"
    if (!saved.vsCount) p.vsCount = p.players;
    p.players = 2;
  }
  p.vsCount = Math.min(MAX_PLAYERS, Math.max(2, Number(p.vsCount) || 2));
  for (let i = 0; i < MAX_PLAYERS; i++) if (typeof p.names[i] !== "string") p.names[i] = `Player ${i + 1}`;
  return p;
}
function savePrefs() { try { localStorage.setItem("snippet:prefs", JSON.stringify(prefs)); } catch (e) {} }

let game = null;   // active game
let round = null;  // active round

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/* ================= helpers ================= */

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function render(html) { document.body.classList.remove("on-setup"); $app.innerHTML = `<div class="fade" style="display:flex;flex-direction:column;flex:1">${html}</div>`; }
function partsFor(mode) { return mode === "both" ? ["artist", "title"] : ["artist"]; }
const PART_LABEL = { artist: "Artist", title: "Song" };

function stopAudio() { audio.pause(); audio.removeAttribute("src"); audio.load(); }

/* ================= setup screen ================= */

const OPTIONS = {
  players: [[1, "Solo"], [2, "Versus"]],
  vsCount: [2, 3, 4, 5, 6].map(n => [n, String(n)]),
  mode: [["artist", "Artist"], ["both", "Artist + song"]],
  decade: [["00s", "2000s"], ["10s", "2010s"], ["20s", "2020s"], ["all", "Mix"]],
  rounds: [[10, "10"], [20, "20"], [30, "30"]]
};
const LABELS = { players: "Players", vsCount: "How many", mode: "Guess", decade: "Decade", rounds: "Songs" };

function choiceRow(k) {
  return `<div class="opt"><span class="opt-label" id="lbl-${k}">${LABELS[k]}</span>
    <div class="choices" role="radiogroup" aria-labelledby="lbl-${k}" data-k="${k}">${OPTIONS[k].map(([v, l]) =>
      `<button role="radio" aria-checked="${String(v) === String(prefs[k])}" data-v="${v}">${l}</button>`).join("")}</div></div>`;
}

function showSetup() {
  game = null; round = null; stopAudio();
  $top.innerHTML = "";
  render(`
    <header class="hero"><h1 class="brand">Pop Music Quiz</h1><p class="sub">Training ground for melomaniacs.</p></header>
    <div class="opts" id="opts"></div>
    <div class="names" id="names"></div>
    <button class="primary" id="start">Start</button>
    <p class="hint">Previews from Apple Music</p>
  `);
  document.body.classList.add("on-setup");
  renderOptions();
  document.getElementById("start").addEventListener("click", startGame);
}

function renderOptions() {
  const keys = prefs.players > 1 ? ["players", "vsCount", "mode", "decade", "rounds"] : ["players", "mode", "decade", "rounds"];
  const box = document.getElementById("opts");
  box.innerHTML = keys.map(choiceRow).join("");
  box.querySelectorAll(".choices").forEach(g => g.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    const k = g.dataset.k; let v = b.dataset.v;
    if (k === "players" || k === "rounds" || k === "vsCount") v = Number(v);
    prefs[k] = v; savePrefs(); renderOptions();
    const again = document.querySelector(`.choices[data-k="${k}"] button[data-v="${b.dataset.v}"]`); if (again) again.focus();
  }));
  renderNames();
}

function renderNames() {
  const box = document.getElementById("names");
  box.hidden = prefs.players === 1;
  if (box.hidden) { box.innerHTML = ""; return; }
  box.innerHTML = Array.from({ length: prefs.vsCount }, (_, i) =>
    `<label class="name p${i + 1}"><kbd>${BUZZ_KEYS[i].toUpperCase()}</kbd><input data-i="${i}" maxlength="16" value="${esc(prefs.names[i])}" aria-label="Player ${i + 1} name"></label>`).join("");
  box.querySelectorAll("input").forEach(inp => inp.addEventListener("input", e => {
    prefs.names[Number(inp.dataset.i)] = e.target.value; savePrefs();
  }));
}

/* ================= game ================= */

function startGame() {
  const pool = SONGS.filter(s => prefs.decade === "all" || s.decade === prefs.decade);
  game = {
    players: prefs.players === 1 ? 1 : prefs.vsCount,
    mode: prefs.mode,
    decade: prefs.decade,
    total: prefs.rounds,
    names: prefs.names.slice(0, prefs.players === 1 ? 1 : prefs.vsCount).map((n, i) => (n || "").trim() || `Player ${i + 1}`),
    queue: shuffle(pool.slice()),
    scores: Array(prefs.players === 1 ? 1 : prefs.vsCount).fill(0),
    history: [],
    index: 0,
    usedArtists: new Set(),
    next: null   // prefetched {song, data} promise
  };
  // unlock audio on this user gesture (Safari)
  audio.muted = true; audio.play().catch(() => {}); audio.pause(); audio.muted = false;
  game.next = takeNext();
  loadRound();
}

// every credited artist on a song: "Lady Gaga & Bruno Mars" → lady gaga, bruno mars
function artistsOf(song) {
  return [...new Set([song.artist, ...song.artist.split(/\s*(?:&|,|\bx\b|\band\b|\bvs\.?)\s*/i)]
    .map(norm).filter(n => n && n.length > 1))];
}

async function takeNext() {
  while (game && game.queue.length) {
    // one song per artist per game: skip anything sharing an artist with a song already used
    const i = game.queue.findIndex(s => !artistsOf(s).some(a => game.usedArtists.has(a)));
    if (i < 0) break;
    const song = game.queue.splice(i, 1)[0];
    artistsOf(song).forEach(a => game.usedArtists.add(a));
    let data = null;
    try { data = await resolveSong(song); } catch (e) {}
    if (data) return { song, data };
    console.warn("[pop-music-quiz] no preview found for", song.artist, "—", song.title);
  }
  return null;
}

async function loadRound() {
  const g = game;
  render(`<div class="loading"><div class="spinner"></div>Loading clip…</div>`);
  const item = await g.next;
  if (g !== game) return;
  if (!item) {
    if (g.index === 0) {
      render(`<div class="loading" style="flex-direction:column;text-align:center">
        <div>Couldn't reach Apple Music.</div>
        <div style="font-size:13px">Check your internet connection and try again.</div>
        <button class="ghost" id="retry">Back</button></div>`);
      document.getElementById("retry").onclick = showSetup;
    } else { g.total = g.index; showEnd(); }
    return;
  }
  g.next = takeNext();   // prefetch while this one plays
  round = {
    song: item.song,
    data: item.data,
    solved: { artist: false, title: false },
    attempts: [],      // {player, answers, gained}
    tried: Array(game.players).fill(false),
    phase: "listening",  // listening | answering | reveal
    answerer: 0,
    retried: false
  };
  showRound();
  playClip(true);
}

/* ---------- audio ---------- */

let rafId = 0;
function playClip(fromStart) {
  if (!round) return;
  if (fromStart) { audio.src = round.data.previewUrl; audio.currentTime = 0; }
  const p = audio.play();
  if (p) p.catch(() => { updatePlayIcon(); setStatus("Press play to start the clip."); });
  tick();
}
function tick() {
  cancelAnimationFrame(rafId);
  const loop = () => {
    updateRing();
    if (!audio.paused) rafId = requestAnimationFrame(loop);
  };
  loop();
}
function updateRing() {
  const bar = document.querySelector(".ring .bar");
  const time = document.querySelector(".time");
  const dur = audio.duration && isFinite(audio.duration) ? audio.duration : 30;
  const pos = Math.min(audio.currentTime || 0, dur);
  if (bar) bar.style.strokeDashoffset = String(CIRC * (1 - pos / dur));
  if (time) time.textContent = `0:${String(Math.max(0, Math.ceil(dur - pos))).padStart(2, "0")}`;
}
function updatePlayIcon() {
  const btn = document.querySelector(".playbtn");
  if (btn) btn.innerHTML = audio.paused ? ICON_PLAY : ICON_PAUSE;
  document.querySelectorAll("[data-spin]").forEach(el => el.classList.toggle("spinning", !audio.paused));
}
audio.addEventListener("play", updatePlayIcon);
audio.addEventListener("pause", updatePlayIcon);
audio.addEventListener("ended", () => {
  updatePlayIcon(); updateRing();
  if (round && round.phase === "listening") setStatus("Clip over — still yours to guess.");
});
audio.addEventListener("error", async () => {
  // preview URL went stale: look it up again once
  if (!round || round.retried || !audio.getAttribute("src")) return;
  round.retried = true;
  const fresh = await resolveSong(round.song, { force: true }).catch(() => null);
  if (fresh && round) { round.data = fresh; playClip(true); }
  else if (round) { setStatus("This clip won't play — skipping."); setTimeout(() => round && nextRound(), 1200); }
});

const R = 113, CIRC = 2 * Math.PI * R;
const ICON_PLAY = `<svg viewBox="0 0 24 24"><path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5z"/></svg>`;
const ICON_PAUSE = `<svg viewBox="0 0 24 24"><rect x="6.5" y="5" width="3.5" height="14" rx="1"/><rect x="14" y="5" width="3.5" height="14" rx="1"/></svg>`;

function togglePlay() {
  if (!round) return;
  if (game.players > 1 && round.phase === "answering") return;
  if (audio.paused) { if (audio.ended) audio.currentTime = 0; playClip(false); } else audio.pause();
}

/* ---------- round screen ---------- */

function setStatus(t) { const s = document.querySelector(".status"); if (s) s.textContent = t; }

function topScore() {
  if (!game) return;
  const n = `<span class="count"><b>${Math.min(game.index + 1, game.total)}</b>/${game.total}</span>`;
  $top.innerHTML = game.players === 1 ? `${n}<span><b>${game.scores[0]}</b> pts</span>` : n;
}

function showRound() {
  topScore();
  // in Mix the decade stays hidden — it would be a clue
  const label = game.decade === "all" ? "Mix" : DECADE_LABELS[game.decade];
  const modeLabel = game.mode === "both" ? "Name the artist and song" : "Name the artist";
  render(`
    <div class="meta"><span>${esc(label)}</span><span>${modeLabel}</span></div>
    <div class="player">
      <div class="ring" data-spin>
        <svg viewBox="0 0 236 236"><circle class="track" cx="118" cy="118" r="${R}"/>
          <circle class="bar" cx="118" cy="118" r="${R}" stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC}"/></svg>
        <div class="disc"></div><div class="sheen"></div>
        <button class="playbtn" id="playbtn" aria-label="Play or pause">${ICON_PAUSE}</button>
      </div>
      <div class="time">0:30</div>
      <div class="status"></div>
    </div>
    <div id="controls"></div>
  `);
  document.getElementById("playbtn").addEventListener("click", togglePlay);
  renderControls();
  updatePlayIcon(); updateRing();
}

function answerFields(focusFirst = true) {
  const parts = partsFor(game.mode);
  return parts.map(p => {
    const solved = round.solved[p];
    const val = solved ? (p === "artist" ? round.song.artist : round.song.title) : "";
    return `<input class="text${solved ? " ok" : ""}" data-part="${p}" placeholder="${PART_LABEL[p]}"
      autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
      value="${esc(val)}" ${solved ? "disabled" : ""}>`;
  }).join("");
}

function renderControls() {
  const c = document.getElementById("controls");
  if (!c) return;
  if (game.players === 1) {
    c.innerHTML = `
      <form class="answer" id="ansForm">
        ${answerFields()}
        <button class="primary" type="submit">Submit</button>
        <div class="row-actions"><span class="hint" style="margin:0"><kbd>Enter</kbd> submit · <kbd>Esc</kbd> play/pause</span>
        <button class="ghost" type="button" id="skip">Give up</button></div>
      </form>`;
    bindForm(0);
    document.getElementById("skip").onclick = () => submitAnswer(0, true);
    const first = c.querySelector("input:not([disabled])"); if (first) first.focus();
    return;
  }
  // versus
  if (round.phase === "listening") {
    const ids = game.names.map((_, i) => i);
    c.innerHTML = `
      <div class="buzzers n${game.players}">
        ${ids.map(i => `
          <button class="buzz p${i + 1}" data-p="${i}" ${round.tried[i] ? "disabled" : ""}>
            <span class="key">${BUZZ_KEYS[i].toUpperCase()}</span>
            <span class="who"><span class="nm">${esc(game.names[i])}</span></span>
            <span class="pts">${game.scores[i]} pts</span>
          </button>`).join("")}
      </div>
      <div class="row-actions" style="justify-content:center"><button class="ghost" id="nobody">Nobody knows — reveal</button></div>`;
    c.querySelectorAll(".buzz").forEach(b => b.addEventListener("click", () => buzz(Number(b.dataset.p))));
    document.getElementById("nobody").onclick = () => reveal();
  } else if (round.phase === "answering") {
    const i = round.answerer;
    c.innerHTML = `
      <form class="answer" id="ansForm">
        <div class="answering"><span class="dot p${i + 1}"></span>${esc(game.names[i])} answers</div>
        ${answerFields()}
        <button class="primary" type="submit">Lock in</button>
        <div class="row-actions" style="justify-content:center"><button class="ghost" type="button" id="pass">Pass</button></div>
      </form>`;
    bindForm(i);
    document.getElementById("pass").onclick = () => submitAnswer(i, true);
    const first = c.querySelector("input:not([disabled])"); if (first) first.focus();
  }
}

function bindForm(player) {
  const f = document.getElementById("ansForm");
  f.addEventListener("submit", e => { e.preventDefault(); submitAnswer(player, false); });
}

function buzz(i) {
  if (!round || round.phase !== "listening" || round.tried[i]) return;
  round.phase = "answering";
  round.answerer = i;
  audio.pause();
  setStatus("");
  renderControls();
}

function submitAnswer(player, gaveUp) {
  if (!round || round.phase === "reveal") return;
  const answers = {};
  const gained = [];
  if (!gaveUp) {
    document.querySelectorAll("#ansForm input[data-part]").forEach(inp => {
      const p = inp.dataset.part;
      if (round.solved[p]) return;
      answers[p] = inp.value.trim();
      const ok = isMatch(answers[p], p === "artist" ? artistVariants(round.song) : titleVariants(round.song));
      if (ok) { round.solved[p] = true; gained.push(p); }
    });
  }
  // solo: require at least something typed unless giving up
  if (game.players === 1 && !gaveUp && Object.values(answers).every(v => !v)) {
    const first = document.querySelector("#ansForm input:not([disabled])"); if (first) first.focus();
    return;
  }
  game.scores[player] += gained.length;
  round.attempts.push({ player, answers, gained, gaveUp });
  round.tried[player] = true;

  const parts = partsFor(game.mode);
  const allSolved = parts.every(p => round.solved[p]);

  const waiting = round.tried.map((t, i) => t ? -1 : i).filter(i => i >= 0);
  if (game.players > 1 && !allSolved && waiting.length) {
    // the other player may steal what's left
    round.phase = "listening";
    renderControls();
    const left = parts.filter(p => !round.solved[p]).map(p => PART_LABEL[p].toLowerCase()).join(" and ");
    const got = gained.length ? `${esc(game.names[player])} got the ${gained.map(p => PART_LABEL[p].toLowerCase()).join(" and ")}. ` : `${gaveUp ? "Passed" : "Not quite"}. `;
    const who = waiting.length === 1 ? game.names[waiting[0]] : "Anyone else";
    setStatus(`${got}${who} can steal the ${left}.`);
    playClip(false);
    return;
  }
  reveal();
}

function reveal() {
  if (!round) return;
  round.phase = "reveal";
  if (audio.paused && !audio.ended) playClip(false);   // let the song keep going during the reveal
  const s = round.song, d = round.data;
  const parts = partsFor(game.mode);
  game.history.push({ song: s, data: d, solved: { ...round.solved }, attempts: round.attempts });

  let chips = "", yours = "";
  if (game.players === 1) {
    const a = round.attempts[0];
    chips = parts.map(p => `<span class="chip ${round.solved[p] ? "ok" : "no"}">${PART_LABEL[p]} ${round.solved[p] ? "✓" : "✗"}</span>`).join("");
    if (a && !a.gaveUp) {
      const wrong = parts.filter(p => !round.solved[p] && a.answers[p]).map(p => `“${esc(a.answers[p])}”`);
      if (wrong.length) yours = `You said ${wrong.join(" / ")}`;
    }
  } else {
    chips = round.attempts.filter(a => a.gained.length).map(a =>
      `<span class="chip ok"><span class="dot p${a.player + 1}"></span>&nbsp;${esc(game.names[a.player])} +${a.gained.length}</span>`).join("")
      || `<span class="chip">No points</span>`;
  }
  topScore();
  const last = game.index + 1 >= game.total;
  const c = document.querySelector(".player"); if (c) c.remove();
  const ctr = document.getElementById("controls");
  ctr.innerHTML = `
    <div class="reveal fade">
      <div class="sleeve" data-spin>
        <div class="slide"><div class="disc"></div></div>
        <div class="art" style="background-image:url('${esc(d.artwork)}')"></div>
      </div>
      <div class="title">${esc(s.title)}</div>
      <div class="artist">${esc(s.artist)}</div>
      <div class="chips">${chips}</div>
      <div class="yours">${yours}</div>
      <button class="primary" id="next">${last ? "See results" : "Next"}</button>
      <p class="hint"><kbd>Enter</kbd> to continue</p>
    </div>`;
  document.getElementById("next").addEventListener("click", nextRound);
  document.getElementById("next").focus();
  updatePlayIcon();
}

function nextRound() {
  if (!game) return;
  game.index++;
  if (game.index >= game.total) return showEnd();
  stopAudio();
  loadRound();
}

/* ---------- end screen ---------- */

function showEnd() {
  stopAudio();
  const g = game; round = null;
  $top.innerHTML = "";
  const per = partsFor(g.mode).length;
  const max = g.history.length * per;
  const list = g.history.map(h => {
    let r;
    if (g.players === 1) {
      const n = Object.values(h.solved).filter(Boolean).length;
      r = `<span class="r ${n === per ? "ok" : ""}">${n}/${per}</span>`;
    } else {
      r = `<span class="r">${h.attempts.filter(a => a.gained.length).map(a =>
        `<span class="dot p${a.player + 1}"></span> +${a.gained.length}`).join("&nbsp; ") || "—"}</span>`;
    }
    return `<div class="item"><div class="thumb" style="background-image:url('${esc(h.data.artwork.replace("600x600bb", "100x100bb"))}')"></div>
      <div style="min-width:0"><div class="t">${esc(h.song.title)}</div><div class="a">${esc(h.song.artist)}</div></div>${r}</div>`;
  }).join("");

  let head;
  if (g.players === 1) {
    const pct = max ? Math.round(g.scores[0] / max * 100) : 0;
    const verdict = pct === 100 ? "Flawless." : pct >= 80 ? "Seriously good ears." : pct >= 50 ? "Solid." : pct >= 25 ? "Warming up." : "Rough one.";
    head = `<div class="score-big">${g.scores[0]}<span> / ${max}</span></div>
      <p class="verdict">${verdict}</p>`;
  } else {
    const top = Math.max(...g.scores);
    const winners = g.names.filter((_, i) => g.scores[i] === top).map(esc);
    const title = winners.length === g.names.length ? "It's a draw."
      : winners.length === 1 ? `${winners[0]} wins.`
      : `${winners.slice(0, -1).join(", ")} and ${winners[winners.length - 1]} tie.`;
    const order = g.names.map((_, i) => i).sort((x, y) => g.scores[y] - g.scores[x]);
    head = `<h1 class="end-title">${title}</h1>
      <div class="versus-final n${g.players}">${order.map(i => `<div class="vf${g.scores[i] === top ? " lead" : ""}"><div class="n"><span class="dot p${i + 1}"></span><span class="nm">${esc(g.names[i])}</span></div><div class="s">${g.scores[i]}</div></div>`).join("")}</div>`;
  }
  render(`${head}<div class="list">${list}</div>
    <button class="primary" id="again">Play again</button>
    <div class="row-actions" style="justify-content:center"><button class="ghost" id="change">Change settings</button></div>`);
  document.getElementById("again").onclick = startGame;
  document.getElementById("change").onclick = showSetup;
}

/* ================= keyboard ================= */

document.addEventListener("keydown", e => {
  if (!game || !round) return;
  const inInput = e.target.tagName === "INPUT";
  if (e.key === "Escape") { e.preventDefault(); togglePlay(); return; }
  if (round.phase === "reveal" && e.key === "Enter" && !inInput) { /* button has focus; native click */ return; }
  if (game.players > 1 && round.phase === "listening" && !inInput && !e.metaKey && !e.ctrlKey && !e.altKey) {
    const i = BUZZ_KEYS.indexOf(e.key.toLowerCase());
    if (i >= 0 && i < game.players) { e.preventDefault(); buzz(i); }
    else if (e.key === " ") { e.preventDefault(); togglePlay(); }
  }
});

document.getElementById("home").addEventListener("click", showSetup);

// expose for testing
window.__snippet = { norm, isMatch, artistVariants, titleVariants, scoreResult, resolveSong, stripExtras };

showSetup();
})();
