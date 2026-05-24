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

// ---- Routing ----
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pg = document.getElementById('page-' + page);
  if (pg) pg.classList.add('active');

  document.querySelectorAll(`[data-page="${page}"]`).forEach(el => el.classList.add('active'));
  updateAllProgress();
  window.scrollTo(0, 0);
}

// ---- Flashcard state per unit ----
const fcIndex = {};

function renderUnit(unit) {
  fcIndex[unit.id] = 0;
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
    <div class="tab-content active" data-tabid="flashcards">${renderFlashcardsHTML(unit)}</div>
    <div class="tab-content" data-tabid="questions">${renderQuestionsHTML(unit)}</div>
    <div class="tab-content" data-tabid="mcq">${renderMCQHTML(unit)}</div>
    <div class="tab-content" data-tabid="notes">${renderNotesHTML(unit)}</div>
  `;

  // Tab switching
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      container.querySelector(`.tab-content[data-tabid="${btn.dataset.tab}"]`).classList.add('active');
    });
  });

  // Flashcard nav — use class-based selectors scoped to container
  const prevBtn = container.querySelector('.fc-prev-btn');
  const nextBtn = container.querySelector('.fc-next-btn');
  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (fcIndex[unit.id] > 0) { fcIndex[unit.id]--; showCard(unit, container); }
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    if (fcIndex[unit.id] < unit.questions.length - 1) { fcIndex[unit.id]++; showCard(unit, container); }
  });

  showCard(unit, container);

  // Question accordion
  container.querySelectorAll('.q-header').forEach(h => {
    h.addEventListener('click', () => h.closest('.q-card').classList.toggle('open'));
  });

  container.querySelectorAll('.q-done-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi = parseInt(btn.dataset.qi);
      const us2 = getUnitState(unit.id);
      const set = new Set(us2.doneQs || []);
      if (set.has(qi)) set.delete(qi); else set.add(qi);
      us2.doneQs = Array.from(set);
      save();
      const isDone = set.has(qi);
      btn.classList.toggle('undone', !isDone);
      btn.textContent = isDone ? '✓ Marked as Done' : 'Mark as Done';
      const num = container.querySelector(`.q-num[data-qi="${qi}"]`);
      if (num) num.classList.toggle('done', isDone);
      updateAllProgress();
      rerenderUnitHeader(unit, container);
    });
  });

  // MCQ
  container.querySelectorAll('.mcq-card').forEach(card => {
    card.querySelectorAll('.mcq-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        if (card.dataset.answered) return;
        card.dataset.answered = '1';
        const chosen = parseInt(opt.dataset.idx);
        const correct = parseInt(card.dataset.ans);
        card.querySelectorAll('.mcq-opt').forEach(o => {
          o.style.pointerEvents = 'none';
          if (parseInt(o.dataset.idx) === correct) o.classList.add('show-correct');
        });
        opt.classList.add(chosen === correct ? 'correct' : 'wrong');
        const explain = card.querySelector('.mcq-explain');
        if (explain) explain.classList.add('visible');
        const qi2 = parseInt(card.dataset.qi);
        const us3 = getUnitState(unit.id);
        const mset = new Set(us3.mcqAnswered || []);
        mset.add(qi2);
        us3.mcqAnswered = Array.from(mset);
        save();
        updateAllProgress();
        rerenderUnitHeader(unit, container);
      });
    });
  });
}

function showCard(unit, container) {
  const i = fcIndex[unit.id];
  const us = getUnitState(unit.id);
  const cardEl = container.querySelector('.flashcard');
  if (!cardEl) return;
  cardEl.classList.remove('flipped');
  // Remove old listeners by replacing the element
  const newCard = cardEl.cloneNode(false);
  cardEl.parentNode.replaceChild(newCard, cardEl);
  newCard.innerHTML = buildCardHTML(unit, i, us);
  newCard.addEventListener('click', () => newCard.classList.toggle('flipped'));

  newCard.querySelector('.fc-mark-btn.known').addEventListener('click', e => {
    e.stopPropagation();
    markCard(unit.id, i, true);
    showCard(unit, container);
    updateAllProgress();
  });
  newCard.querySelector('.fc-mark-btn.unknown').addEventListener('click', e => {
    e.stopPropagation();
    markCard(unit.id, i, false);
    showCard(unit, container);
    updateAllProgress();
  });

  const counter = container.querySelector('.fc-counter');
  if (counter) counter.textContent = `${i + 1} / ${unit.questions.length}`;

  const prevBtn = container.querySelector('.fc-prev-btn');
  const nextBtn = container.querySelector('.fc-next-btn');
  if (prevBtn) prevBtn.disabled = i === 0;
  if (nextBtn) nextBtn.disabled = i === unit.questions.length - 1;
}

function buildCardHTML(unit, i, us) {
  const q = unit.questions[i];
  const isKnown = new Set(us.knownCards || []).has(i);
  const points = q.points.map(p =>
    `<li><span class="pt-head">${p.head}:</span> <span class="pt-desc">${p.desc}</span></li>`
  ).join('');
  return `
    <div class="flashcard-inner">
      <div class="flashcard-front">
        <div class="fc-qnum">Question ${i+1} of ${unit.questions.length} ${isKnown ? '✅' : ''}</div>
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
  if (isKnown) set.add(idx); else set.delete(idx);
  us.knownCards = Array.from(set);
  save();
}

function rerenderUnitHeader(unit, container) {
  const prog = getProgress(unit.id);
  const bar = container.querySelector('.unit-progress-row .prog-bar');
  const pct = container.querySelector('.unit-pct');
  if (bar) bar.style.width = prog + '%';
  if (pct) pct.textContent = prog + '%';
}

function renderFlashcardsHTML(unit) {
  return `
    <div class="flashcard-nav">
      <button class="fc-btn fc-prev-btn" disabled>← Prev</button>
      <span class="fc-counter">1 / ${unit.questions.length}</span>
      <button class="fc-btn fc-next-btn">Next →</button>
    </div>
    <div class="flashcard"></div>
  `;
}

function renderQuestionsHTML(unit) {
  const us = getUnitState(unit.id);
  const doneSet = new Set(us.doneQs || []);
  return `<div class="q-list">` + unit.questions.map((q, i) => {
    const isDone = doneSet.has(i);
    const pts = q.points.map(p =>
      `<li><span class="pt-head">${p.head}:</span><span class="pt-desc"> ${p.desc}</span></li>`
    ).join('');
    return `
      <div class="q-card">
        <div class="q-header">
          <div class="q-num ${isDone ? 'done' : ''}" data-qi="${i}">${i+1}</div>
          <div class="q-title">${q.q}</div>
          <div class="q-marks">7 marks</div>
          <div class="q-chevron">▾</div>
        </div>
        <div class="q-body">
          <ul class="q-answer-points">${pts}</ul>
          <button class="q-done-btn ${isDone ? '' : 'undone'}" data-qi="${i}">${isDone ? '✓ Marked as Done' : 'Mark as Done'}</button>
        </div>
      </div>`;
  }).join('') + `</div>`;
}

function renderMCQHTML(unit) {
  const us = getUnitState(unit.id);
  const answered = new Set(us.mcqAnswered || []);
  return `<div class="mcq-section">` + unit.mcqs.map((mcq, i) => {
    const wasAnswered = answered.has(i);
    const opts = mcq.opts.map((opt, oi) => {
      let cls = 'mcq-opt';
      if (wasAnswered) {
        cls += ' revealed';
        if (oi === mcq.ans) cls += ' show-correct';
      }
      return `<div class="${cls}" data-idx="${oi}" style="${wasAnswered ? 'pointer-events:none' : ''}">${String.fromCharCode(65+oi)}. ${opt}</div>`;
    }).join('');
    return `
      <div class="mcq-card" data-ans="${mcq.ans}" data-qi="${i}" ${wasAnswered ? 'data-answered="1"' : ''}>
        <div class="mcq-qnum">Q${i+1}</div>
        <div class="mcq-qtext">${mcq.q}</div>
        <div class="mcq-options">${opts}</div>
        <div class="mcq-explain ${wasAnswered ? 'visible' : ''}">💡 ${mcq.explain}</div>
      </div>`;
  }).join('') + `</div>`;
}

function renderNotesHTML(unit) {
  return `<div class="notes-grid">` + unit.notes.map(n => `
    <div class="note-card">
      <h4>${n.title}</h4>
      <ul>${n.items.map(it => `<li>${it}</li>`).join('')}</ul>
    </div>`).join('') + `</div>`;
}

// ---- Progress ----
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
    if (badge) { badge.textContent = p + '%'; badge.classList.toggle('done', p === 100); }
    const uTotal = u.questions.length + u.mcqs.length;
    total += uTotal;
    done += Math.round((p / 100) * uTotal);
  });
  const overall = total ? Math.round((done / total) * 100) : 0;
  const ob = document.getElementById('overall-bar');
  const op = document.getElementById('overall-pct');
  if (ob) ob.style.width = overall + '%';
  if (op) op.textContent = overall + '%';
}

// ---- Init ----
function init() {
  UNITS.forEach(u => renderUnit(u));

  // All [data-page] elements navigate — both sidebar and dashboard cards
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', () => {
      const page = el.dataset.page;
      if (page) navigate(page);
    });
  });

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
