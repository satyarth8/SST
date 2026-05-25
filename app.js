// ---- State ----
const state = JSON.parse(localStorage.getItem('sst-state') || '{}');

function getUnitState(uid) {
  if (!state[uid]) state[uid] = { knownCards: [], doneQs: [], mcqAnswered: [] };
  return state[uid];
}
function save() { localStorage.setItem('sst-state', JSON.stringify(state)); }

function getProgress(uid) {
  const u = UNITS.find(x => x.id === uid);
  if (!u) return 0;
  const us = getUnitState(uid);
  const total = u.questions.length + u.mcqs.length;
  const done = (us.doneQs || []).length + new Set(us.mcqAnswered || []).size;
  return total ? Math.round((done / total) * 100) : 0;
}

// ---- Navigation ---- (also called inline from HTML onclick)
function navigate(page) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // show target
  const pg = document.getElementById('page-' + page);
  if (pg) pg.classList.add('active');
  // update sidebar highlight
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.page === page);
  });
  updateAllProgress();
  window.scrollTo(0, 0);
}

// ---- Flashcard index per unit ----
const fcIndex = {};

// ---- Render a unit page ----
function renderUnit(unit) {
  fcIndex[unit.id] = 0;
  const container = document.getElementById('page-' + unit.id);
  const prog = getProgress(unit.id);

  container.innerHTML = `
    <div class="unit-header">
      <h1>${unit.icon} ${unit.title}</h1>
      <p>${unit.subtitle}</p>
      <div class="unit-progress-row">
        <div class="prog-bar-wrap"><div class="prog-bar" style="width:${prog}%"></div></div>
        <div class="unit-pct">${prog}%</div>
      </div>
    </div>
    <div class="tabs">
      <button class="tab-btn active" onclick="switchTab(this,'fc-${unit.id}','${unit.id}')">📇 Flashcards</button>
      <button class="tab-btn" onclick="switchTab(this,'qs-${unit.id}','${unit.id}')">📝 Questions</button>
      <button class="tab-btn" onclick="switchTab(this,'mcq-${unit.id}','${unit.id}')">🎯 MCQ Quiz</button>
      <button class="tab-btn" onclick="switchTab(this,'notes-${unit.id}','${unit.id}')">📌 Quick Notes</button>
    </div>
    <div id="fc-${unit.id}" class="tab-content active">${buildFlashcardTab(unit)}</div>
    <div id="qs-${unit.id}" class="tab-content">${buildQuestionsTab(unit)}</div>
    <div id="mcq-${unit.id}" class="tab-content">${buildMCQTab(unit)}</div>
    <div id="notes-${unit.id}" class="tab-content">${buildNotesTab(unit)}</div>
  `;

  showCard(unit.id);
}

function switchTab(btn, tabId, uid) {
  const container = document.getElementById('page-' + uid);
  container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// ---- Flashcard ----
function buildFlashcardTab(unit) {
  return `
    <div class="flashcard-nav">
      <button class="fc-btn" onclick="fcPrev('${unit.id}')">← Prev</button>
      <span id="fc-counter-${unit.id}" class="fc-counter">1 / ${unit.questions.length}</span>
      <button class="fc-btn" onclick="fcNext('${unit.id}')">Next →</button>
    </div>
    <div id="fc-card-${unit.id}" class="flashcard" onclick="this.classList.toggle('flipped')"></div>`;
}

function showCard(uid) {
  const unit = UNITS.find(u => u.id === uid);
  const i = fcIndex[uid];
  const q = unit.questions[i];
  const us = getUnitState(uid);
  const isKnown = new Set(us.knownCards || []).has(i);
  const pts = q.points.map(p =>
    `<li><span class="pt-head">${p.head}:</span> <span class="pt-desc">${p.desc}</span></li>`
  ).join('');

  const cardEl = document.getElementById('fc-card-' + uid);
  if (!cardEl) return;
  cardEl.classList.remove('flipped');
  cardEl.innerHTML = `
    <div class="flashcard-inner">
      <div class="flashcard-front">
        <div class="fc-qnum">Question ${i+1} of ${unit.questions.length} ${isKnown ? '✅' : ''}</div>
        <div class="fc-question">${q.q}</div>
        <div class="fc-hint">Click card to reveal answer</div>
      </div>
      <div class="flashcard-back">
        <div class="fc-ans-title">Answer Points</div>
        <ul class="fc-points">${pts}</ul>
        <div class="fc-actions">
          <button class="fc-mark-btn known" onclick="event.stopPropagation();markCard('${uid}',${i},true)">✓ Got it</button>
          <button class="fc-mark-btn unknown" onclick="event.stopPropagation();markCard('${uid}',${i},false)">✗ Review again</button>
        </div>
      </div>
    </div>`;

  const counter = document.getElementById('fc-counter-' + uid);
  if (counter) counter.textContent = `${i+1} / ${unit.questions.length}`;
}

function fcPrev(uid) {
  if (fcIndex[uid] > 0) { fcIndex[uid]--; showCard(uid); }
}
function fcNext(uid) {
  const unit = UNITS.find(u => u.id === uid);
  if (fcIndex[uid] < unit.questions.length - 1) { fcIndex[uid]++; showCard(uid); }
}
function markCard(uid, i, known) {
  const us = getUnitState(uid);
  const set = new Set(us.knownCards || []);
  if (known) set.add(i); else set.delete(i);
  us.knownCards = Array.from(set);
  save();
  showCard(uid);
  updateAllProgress();
}

// ---- Questions ----
function buildQuestionsTab(unit) {
  const us = getUnitState(unit.id);
  const doneSet = new Set(us.doneQs || []);
  return `<div class="q-list">` + unit.questions.map((q, i) => {
    const isDone = doneSet.has(i);
    const pts = q.points.map(p =>
      `<li><span class="pt-head">${p.head}:</span><span class="pt-desc"> ${p.desc}</span></li>`
    ).join('');
    return `
      <div class="q-card" id="qcard-${unit.id}-${i}">
        <div class="q-header" onclick="document.getElementById('qcard-${unit.id}-${i}').classList.toggle('open')">
          <div class="q-num ${isDone?'done':''}" id="qnum-${unit.id}-${i}">${i+1}</div>
          <div class="q-title">${q.q}</div>
          <div class="q-marks">7 marks</div>
          <div class="q-chevron">▾</div>
        </div>
        <div class="q-body">
          <ul class="q-answer-points">${pts}</ul>
          <button class="q-done-btn ${isDone?'':'undone'}" id="qdone-${unit.id}-${i}"
            onclick="toggleQDone('${unit.id}',${i})">${isDone?'✓ Marked as Done':'Mark as Done'}</button>
        </div>
      </div>`;
  }).join('') + `</div>`;
}

function toggleQDone(uid, i) {
  const us = getUnitState(uid);
  const set = new Set(us.doneQs || []);
  if (set.has(i)) set.delete(i); else set.add(i);
  us.doneQs = Array.from(set);
  save();
  const isDone = set.has(i);
  const btn = document.getElementById('qdone-' + uid + '-' + i);
  const num = document.getElementById('qnum-' + uid + '-' + i);
  if (btn) { btn.textContent = isDone ? '✓ Marked as Done' : 'Mark as Done'; btn.classList.toggle('undone', !isDone); }
  if (num) num.classList.toggle('done', isDone);
  updateAllProgress();
  updateUnitHeader(uid);
}

// ---- MCQ ----
function buildMCQTab(unit) {
  const us = getUnitState(unit.id);
  const answered = new Set(us.mcqAnswered || []);
  return `<div class="mcq-section">` + unit.mcqs.map((mcq, i) => {
    const was = answered.has(i);
    const opts = mcq.opts.map((opt, oi) => {
      let cls = 'mcq-opt' + (was ? ' locked' : '');
      if (was && oi === mcq.ans) cls += ' show-correct';
      return `<div class="${cls}" onclick="answerMCQ('${unit.id}',${i},${oi},${mcq.ans})">${String.fromCharCode(65+oi)}. ${opt}</div>`;
    }).join('');
    return `
      <div class="mcq-card" id="mcqcard-${unit.id}-${i}">
        <div class="mcq-qnum">Q${i+1}</div>
        <div class="mcq-qtext">${mcq.q}</div>
        <div class="mcq-options" id="mcqopts-${unit.id}-${i}">${opts}</div>
        <div class="mcq-explain ${was?'visible':''}" id="mcqexp-${unit.id}-${i}">💡 ${mcq.explain}</div>
      </div>`;
  }).join('') + `</div>`;
}

function answerMCQ(uid, qi, chosen, correct) {
  const optsEl = document.getElementById('mcqopts-' + uid + '-' + qi);
  if (!optsEl) return;
  const opts = optsEl.querySelectorAll('.mcq-opt');
  if (opts[0].classList.contains('locked')) return;
  opts.forEach((o, oi) => {
    o.classList.add('locked');
    if (oi === correct) o.classList.add('show-correct');
  });
  opts[chosen].classList.add(chosen === correct ? 'correct' : 'wrong');
  const exp = document.getElementById('mcqexp-' + uid + '-' + qi);
  if (exp) exp.classList.add('visible');
  const us = getUnitState(uid);
  const mset = new Set(us.mcqAnswered || []);
  mset.add(qi);
  us.mcqAnswered = Array.from(mset);
  save();
  updateAllProgress();
  updateUnitHeader(uid);
}

// ---- Notes ----
function buildNotesTab(unit) {
  return `<div class="notes-grid">` + unit.notes.map(n => `
    <div class="note-card">
      <h4>${n.title}</h4>
      <ul>${n.items.map(it => `<li>${it}</li>`).join('')}</ul>
    </div>`).join('') + `</div>`;
}

// ---- Progress ----
function updateUnitHeader(uid) {
  const prog = getProgress(uid);
  const container = document.getElementById('page-' + uid);
  if (!container) return;
  const bar = container.querySelector('.unit-progress-row .prog-bar');
  const pct = container.querySelector('.unit-pct');
  if (bar) bar.style.width = prog + '%';
  if (pct) pct.textContent = prog + '%';
}

function updateAllProgress() {
  let total = 0, totalDone = 0;
  UNITS.forEach(u => {
    const p = getProgress(u.id);
    const num = u.id.replace('u', '');
    const bar = document.getElementById('dp' + num);
    const pct = document.getElementById('dpct' + num);
    const badge = document.getElementById('b' + num);
    if (bar) bar.style.width = p + '%';
    if (pct) pct.textContent = p + '%';
    if (badge) { badge.textContent = p + '%'; badge.classList.toggle('done', p === 100); }
    const uTotal = u.questions.length + u.mcqs.length;
    total += uTotal;
    totalDone += Math.round((p / 100) * uTotal);
  });
  const overall = total ? Math.round((totalDone / total) * 100) : 0;
  const ob = document.getElementById('overall-bar');
  const op = document.getElementById('overall-pct');
  if (ob) ob.style.width = overall + '%';
  if (op) op.textContent = overall + '%';
}

// ---- Init ----
function init() {
  // render all unit pages
  UNITS.forEach(u => renderUnit(u));

  // sidebar nav click
  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.page));
  });

  // reset button
  document.getElementById('reset-all').addEventListener('click', () => {
    if (!confirm('Reset all progress?')) return;
    UNITS.forEach(u => { state[u.id] = { knownCards: [], doneQs: [], mcqAnswered: [] }; });
    save();
    UNITS.forEach(u => renderUnit(u));
    updateAllProgress();
  });

  updateAllProgress();
}

document.addEventListener('DOMContentLoaded', init);
