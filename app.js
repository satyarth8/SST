// ---- State ----
const state = JSON.parse(localStorage.getItem('sst-state') || '{}');
// state[unitId] = { knownCards: Set, doneQs: Set, mcqAnswered: Set }

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

// ---- Routing ----
let currentPage = 'home';
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pg = document.getElementById('page-' + page);
  if (pg) pg.classList.add('active');
  const nav = document.querySelector(`[data-page="${page}"]`);
  if (nav) {
    nav.classList.add('active');
    // sidebar nav-item
    const sNav = document.querySelector(`#sidebar [data-page="${page}"]`);
    if (sNav) sNav.classList.add('active');
  }
  currentPage = page;
  updateAllProgress();
}

// ---- Unit Page Rendering ----
function renderUnit(unit) {
  const container = document.getElementById('page-' + unit.id);
  const us = getUnitState(unit.id);
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
      <button class="tab-btn active" data-tab="flashcards">📇 Flashcards</button>
      <button class="tab-btn" data-tab="questions">📝 Questions</button>
      <button class="tab-btn" data-tab="mcq">🎯 MCQ Quiz</button>
      <button class="tab-btn" data-tab="notes">📌 Quick Notes</button>
    </div>
    <div id="tab-flashcards-${unit.id}" class="tab-content active">${renderFlashcards(unit)}</div>
    <div id="tab-questions-${unit.id}" class="tab-content">${renderQuestions(unit)}</div>
    <div id="tab-mcq-${unit.id}" class="tab-content">${renderMCQ(unit)}</div>
    <div id="tab-notes-${unit.id}" class="tab-content">${renderNotes(unit)}</div>
  `;

  // Tab switching
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab + '-' + unit.id).classList.add('active');
    });
  });

  // Flashcard logic
  let fcIdx = 0;
  const fcTotal = unit.questions.length;
  function showCard(i) {
    const card = container.querySelector('.flashcard');
    if (!card) return;
    card.classList.remove('flipped');
    card.innerHTML = buildCardHTML(unit, i, us);
    container.querySelector('.fc-counter').textContent = `${i + 1} / ${fcTotal}`;
    // flip
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    // mark buttons
    const knownBtn = card.querySelector('.fc-mark-btn.known');
    const unknownBtn = card.querySelector('.fc-mark-btn.unknown');
    if (knownBtn) knownBtn.addEventListener('click', e => { e.stopPropagation(); markCard(unit.id, i, true); showCard(i); updateAllProgress(); });
    if (unknownBtn) unknownBtn.addEventListener('click', e => { e.stopPropagation(); markCard(unit.id, i, false); showCard(i); updateAllProgress(); });
  }
  function bindFcNav() {
    const prev = container.querySelector('#fc-prev');
    const next = container.querySelector('#fc-next');
    if (prev) prev.addEventListener('click', () => { if (fcIdx > 0) { fcIdx--; showCard(fcIdx); } });
    if (next) next.addEventListener('click', () => { if (fcIdx < fcTotal - 1) { fcIdx++; showCard(fcIdx); } });
  }
  bindFcNav();
  showCard(0);

  // Question accordion
  container.querySelectorAll('.q-header').forEach(h => {
    h.addEventListener('click', () => {
      const card = h.closest('.q-card');
      card.classList.toggle('open');
    });
  });
  container.querySelectorAll('.q-done-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi = parseInt(btn.dataset.qi);
      const uid = btn.dataset.uid;
      const us2 = getUnitState(uid);
      const set = new Set(us2.doneQs || []);
      if (set.has(qi)) { set.delete(qi); } else { set.add(qi); }
      us2.doneQs = Array.from(set);
      save();
      btn.classList.toggle('undone', !set.has(qi));
      btn.textContent = set.has(qi) ? '✓ Marked as Done' : 'Mark as Done';
      const num = container.querySelector(`.q-num[data-qi="${qi}"][data-uid="${uid}"]`);
      if (num) num.classList.toggle('done', set.has(qi));
      updateAllProgress();
      rerenderUnitHeader(unit);
    });
  });

  // MCQ logic
  container.querySelectorAll('.mcq-card').forEach(card => {
    card.querySelectorAll('.mcq-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        if (card.querySelector('.mcq-opt.correct') || card.querySelector('.mcq-opt.wrong')) return;
        const chosen = parseInt(opt.dataset.idx);
        const correct = parseInt(card.dataset.ans);
        const uid2 = card.dataset.uid;
        const qi2 = parseInt(card.dataset.qi);
        card.querySelectorAll('.mcq-opt').forEach(o => o.classList.add('revealed'));
        if (chosen === correct) {
          opt.classList.add('correct');
        } else {
          opt.classList.add('wrong');
          card.querySelectorAll('.mcq-opt')[correct].classList.add('show-correct');
        }
        const explain = card.querySelector('.mcq-explain');
        if (explain) explain.classList.add('visible');
        const us3 = getUnitState(uid2);
        const mset = new Set(us3.mcqAnswered || []);
        mset.add(qi2);
        us3.mcqAnswered = Array.from(mset);
        save();
        updateAllProgress();
        rerenderUnitHeader(unit);
      });
    });
  });
}

function buildCardHTML(unit, i, us) {
  const q = unit.questions[i];
  const known = new Set(us.knownCards || []);
  const isKnown = known.has(i);
  const fcTotal = unit.questions.length;
  const points = q.points.map(p => `<li><span class="pt-head">${p.head}:</span> <span class="pt-desc">${p.desc}</span></li>`).join('');
  return `
    <div class="flashcard-inner">
      <div class="flashcard-front">
        <div class="fc-qnum">Question ${i+1} of ${fcTotal} ${isKnown ? '✅' : ''}</div>
        <div class="fc-question">${q.q}</div>
        <div class="fc-hint">Click to reveal answer</div>
      </div>
      <div class="flashcard-back">
        <div class="fc-ans-title">Answer Points</div>
        <ul class="fc-points">${points}</ul>
        <div class="fc-actions">
          <button class="fc-mark-btn known">✓ Got it</button>
          <button class="fc-mark-btn unknown">✗ Review again</button>
        </div>
      </div>
    </div>`;
}

function markCard(uid, idx, isKnown) {
  const us = getUnitState(uid);
  const set = new Set(us.knownCards || []);
  if (isKnown) { set.add(idx); } else { set.delete(idx); }
  us.knownCards = Array.from(set);
  save();
}

function rerenderUnitHeader(unit) {
  const prog = getProgress(unit.id);
  const container = document.getElementById('page-' + unit.id);
  const bar = container.querySelector('.unit-progress-row .prog-bar');
  const pct = container.querySelector('.unit-pct');
  if (bar) bar.style.width = prog + '%';
  if (pct) pct.textContent = prog + '%';
}

function renderFlashcards(unit) {
  return `
    <div class="flashcard-nav">
      <button class="fc-btn" id="fc-prev">← Prev</button>
      <span class="fc-counter">1 / ${unit.questions.length}</span>
      <button class="fc-btn" id="fc-next">Next →</button>
    </div>
    <div class="flashcard"></div>
  `;
}

function renderQuestions(unit) {
  const us = getUnitState(unit.id);
  const doneSet = new Set(us.doneQs || []);
  return `<div class="q-list">` + unit.questions.map((q, i) => {
    const isDone = doneSet.has(i);
    const pts = q.points.map(p => `<li><span class="pt-head">${p.head}:</span><span class="pt-desc"> ${p.desc}</span></li>`).join('');
    return `
      <div class="q-card">
        <div class="q-header">
          <div class="q-num ${isDone ? 'done' : ''}" data-qi="${i}" data-uid="${unit.id}">${i+1}</div>
          <div class="q-title">${q.q}</div>
          <div class="q-marks">7 marks</div>
          <div class="q-chevron">▾</div>
        </div>
        <div class="q-body">
          <ul class="q-answer-points">${pts}</ul>
          <button class="q-done-btn ${isDone ? '' : 'undone'}" data-qi="${i}" data-uid="${unit.id}">${isDone ? '✓ Marked as Done' : 'Mark as Done'}</button>
        </div>
      </div>`;
  }).join('') + `</div>`;
}

function renderMCQ(unit) {
  const us = getUnitState(unit.id);
  const answered = new Set(us.mcqAnswered || []);
  return `<div class="mcq-section">` + unit.mcqs.map((mcq, i) => {
    const wasAnswered = answered.has(i);
    const opts = mcq.opts.map((opt, oi) => {
      let cls = 'mcq-opt';
      if (wasAnswered) {
        cls += ' revealed';
        if (oi === mcq.ans) cls += ' correct';
      }
      return `<div class="${cls}" data-idx="${oi}">${String.fromCharCode(65+oi)}. ${opt}</div>`;
    }).join('');
    return `
      <div class="mcq-card" data-ans="${mcq.ans}" data-qi="${i}" data-uid="${unit.id}">
        <div class="mcq-qnum">Q${i+1}</div>
        <div class="mcq-qtext">${mcq.q}</div>
        <div class="mcq-options">${opts}</div>
        <div class="mcq-explain ${wasAnswered ? 'visible' : ''}">💡 ${mcq.explain}</div>
      </div>`;
  }).join('') + `</div>`;
}

function renderNotes(unit) {
  return `<div class="notes-grid">` + unit.notes.map(n => `
    <div class="note-card">
      <h4>${n.title}</h4>
      <ul>${n.items.map(it => `<li>${it}</li>`).join('')}</ul>
    </div>`).join('') + `</div>`;
}

// ---- Progress Updates ----
function updateAllProgress() {
  let total = 0, done = 0;
  UNITS.forEach(u => {
    const p = getProgress(u.id);
    const num = u.id.replace('u', '');
    const bar = document.getElementById('dp' + num);
    const pct = document.getElementById('dpct' + num);
    const badge = document.getElementById('b' + num);
    if (bar) bar.style.width = p + '%';
    if (pct) pct.textContent = p + '%';
    if (badge) {
      badge.textContent = p + '%';
      badge.classList.toggle('done', p === 100);
    }
    const uTotal = u.questions.length + u.mcqs.length;
    const uDone = Math.round((p / 100) * uTotal);
    total += uTotal;
    done += uDone;
  });
  const overall = total ? Math.round((done / total) * 100) : 0;
  const ob = document.getElementById('overall-bar');
  const op = document.getElementById('overall-pct');
  if (ob) ob.style.width = overall + '%';
  if (op) op.textContent = overall + '%';
}

// ---- Init ----
function init() {
  // Render all unit pages
  UNITS.forEach(u => renderUnit(u));

  // Navigation
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.page));
  });

  // Reset
  document.getElementById('reset-all').addEventListener('click', () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      UNITS.forEach(u => { state[u.id] = { knownCards: [], doneQs: [], mcqAnswered: [] }; });
      save();
      UNITS.forEach(u => renderUnit(u));
      updateAllProgress();
    }
  });

  updateAllProgress();
}

document.addEventListener('DOMContentLoaded', init);
