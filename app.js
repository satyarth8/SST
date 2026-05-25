// v5 - event delegation, no inline onclick in generated HTML

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

// Navigation — called from inline onclick on dashboard cards AND sidebar
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#sidebar .nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.page === page);
  });
  const pg = document.getElementById('page-' + page);
  if (pg) pg.classList.add('active');
  updateAllProgress();
  window.scrollTo(0, 0);
}

// Flashcard index
const fcIdx = {};

function renderUnit(unit) {
  fcIdx[unit.id] = 0;
  const container = document.getElementById('page-' + unit.id);
  const prog = getProgress(unit.id);

  // Build HTML using a safe helper to avoid quote issues in attributes
  container.innerHTML =
    '<div class="unit-header">' +
      '<h1>' + unit.icon + ' ' + unit.title + '</h1>' +
      '<p>' + unit.subtitle + '</p>' +
      '<div class="unit-progress-row">' +
        '<div class="prog-bar-wrap"><div class="prog-bar" style="width:' + prog + '%"></div></div>' +
        '<div class="unit-pct">' + prog + '%</div>' +
      '</div>' +
    '</div>' +
    '<div class="tabs">' +
      '<button class="tab-btn active" data-tab="fc">📇 Flashcards</button>' +
      '<button class="tab-btn" data-tab="qs">📝 Questions</button>' +
      '<button class="tab-btn" data-tab="mcq">🎯 MCQ Quiz</button>' +
      '<button class="tab-btn" data-tab="notes">📌 Quick Notes</button>' +
    '</div>' +
    '<div class="tab-content active" data-tabid="fc">' + buildFC(unit) + '</div>' +
    '<div class="tab-content" data-tabid="qs">' + buildQS(unit) + '</div>' +
    '<div class="tab-content" data-tabid="mcq">' + buildMCQ(unit) + '</div>' +
    '<div class="tab-content" data-tabid="notes">' + buildNotes(unit) + '</div>';

  // Tab switching
  container.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      container.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      container.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
      btn.classList.add('active');
      container.querySelector('[data-tabid="' + btn.dataset.tab + '"]').classList.add('active');
    });
  });

  // Flashcard prev/next
  container.querySelector('.fc-prev').addEventListener('click', function() {
    if (fcIdx[unit.id] > 0) { fcIdx[unit.id]--; showCard(unit, container); }
  });
  container.querySelector('.fc-next').addEventListener('click', function() {
    if (fcIdx[unit.id] < unit.questions.length - 1) { fcIdx[unit.id]++; showCard(unit, container); }
  });

  // Question accordion — event delegation on the q-list
  container.querySelector('.q-list').addEventListener('click', function(e) {
    var header = e.target.closest('.q-header');
    var doneBtn = e.target.closest('.q-done-btn');
    if (doneBtn) {
      e.stopPropagation();
      var qi = parseInt(doneBtn.dataset.qi);
      var us = getUnitState(unit.id);
      var set = new Set(us.doneQs || []);
      if (set.has(qi)) set.delete(qi); else set.add(qi);
      us.doneQs = Array.from(set);
      save();
      var isDone = set.has(qi);
      doneBtn.textContent = isDone ? '✓ Marked as Done' : 'Mark as Done';
      doneBtn.classList.toggle('undone', !isDone);
      var numEl = doneBtn.closest('.q-card').querySelector('.q-num');
      if (numEl) numEl.classList.toggle('done', isDone);
      updateAllProgress();
      updateUnitHeader(unit.id, container);
      return;
    }
    if (header) {
      header.closest('.q-card').classList.toggle('open');
    }
  });

  // MCQ — event delegation on mcq-section
  container.querySelector('.mcq-section').addEventListener('click', function(e) {
    var opt = e.target.closest('.mcq-opt');
    if (!opt || opt.classList.contains('locked')) return;
    var card = opt.closest('.mcq-card');
    var correct = parseInt(card.dataset.ans);
    var chosen = parseInt(opt.dataset.idx);
    card.querySelectorAll('.mcq-opt').forEach(function(o) {
      o.classList.add('locked');
      if (parseInt(o.dataset.idx) === correct) o.classList.add('show-correct');
    });
    opt.classList.add(chosen === correct ? 'correct' : 'wrong');
    card.querySelector('.mcq-explain').classList.add('visible');
    var qi = parseInt(card.dataset.qi);
    var us = getUnitState(unit.id);
    var mset = new Set(us.mcqAnswered || []);
    mset.add(qi);
    us.mcqAnswered = Array.from(mset);
    save();
    updateAllProgress();
    updateUnitHeader(unit.id, container);
  });

  // Flashcard flip
  var fcCard = container.querySelector('.fc-card');
  fcCard.addEventListener('click', function() { fcCard.classList.toggle('flipped'); });

  showCard(unit, container);
}

function showCard(unit, container) {
  var i = fcIdx[unit.id];
  var q = unit.questions[i];
  var us = getUnitState(unit.id);
  var isKnown = new Set(us.knownCards || []).has(i);

  var ptsHtml = '';
  q.points.forEach(function(p) {
    ptsHtml += '<li><span class="pt-head">' + p.head + ':</span> <span class="pt-desc">' + p.desc + '</span></li>';
  });

  var fcCard = container.querySelector('.fc-card');
  fcCard.classList.remove('flipped');

  var front = container.querySelector('.fc-front');
  var back = container.querySelector('.fc-back');
  front.innerHTML =
    '<div class="fc-qnum">Question ' + (i+1) + ' of ' + unit.questions.length + (isKnown ? ' ✅' : '') + '</div>' +
    '<div class="fc-question">' + q.q + '</div>' +
    '<div class="fc-hint">Click card to reveal answer</div>';

  back.innerHTML =
    '<div class="fc-ans-title">Answer Points</div>' +
    '<ul class="fc-points">' + ptsHtml + '</ul>' +
    '<div class="fc-actions">' +
      '<button class="fc-mark-btn known" data-action="known" data-qi="' + i + '">✓ Got it</button>' +
      '<button class="fc-mark-btn unknown" data-action="unknown" data-qi="' + i + '">✗ Review again</button>' +
    '</div>';

  container.querySelector('.fc-counter').textContent = (i+1) + ' / ' + unit.questions.length;

  // mark buttons
  back.querySelectorAll('.fc-mark-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var known = btn.dataset.action === 'known';
      var qi = parseInt(btn.dataset.qi);
      var us2 = getUnitState(unit.id);
      var set = new Set(us2.knownCards || []);
      if (known) set.add(qi); else set.delete(qi);
      us2.knownCards = Array.from(set);
      save();
      showCard(unit, container);
      updateAllProgress();
    });
  });
}

function buildFC(unit) {
  return '<div class="flashcard-nav">' +
    '<button class="fc-btn fc-prev">← Prev</button>' +
    '<span class="fc-counter">1 / ' + unit.questions.length + '</span>' +
    '<button class="fc-btn fc-next">Next →</button>' +
  '</div>' +
  '<div class="fc-card flashcard">' +
    '<div class="flashcard-inner">' +
      '<div class="flashcard-front fc-front"></div>' +
      '<div class="flashcard-back fc-back"></div>' +
    '</div>' +
  '</div>';
}

function buildQS(unit) {
  var us = getUnitState(unit.id);
  var doneSet = new Set(us.doneQs || []);
  var html = '<div class="q-list">';
  unit.questions.forEach(function(q, i) {
    var isDone = doneSet.has(i);
    var ptsHtml = '';
    q.points.forEach(function(p) {
      ptsHtml += '<li><span class="pt-head">' + p.head + ':</span><span class="pt-desc"> ' + p.desc + '</span></li>';
    });
    html +=
      '<div class="q-card">' +
        '<div class="q-header">' +
          '<div class="q-num' + (isDone ? ' done' : '') + '">' + (i+1) + '</div>' +
          '<div class="q-title">' + q.q + '</div>' +
          '<div class="q-marks">7 marks</div>' +
          '<div class="q-chevron">▾</div>' +
        '</div>' +
        '<div class="q-body">' +
          '<ul class="q-answer-points">' + ptsHtml + '</ul>' +
          '<button class="q-done-btn' + (isDone ? '' : ' undone') + '" data-qi="' + i + '">' +
            (isDone ? '✓ Marked as Done' : 'Mark as Done') +
          '</button>' +
        '</div>' +
      '</div>';
  });
  html += '</div>';
  return html;
}

function buildMCQ(unit) {
  var us = getUnitState(unit.id);
  var answered = new Set(us.mcqAnswered || []);
  var html = '<div class="mcq-section">';
  unit.mcqs.forEach(function(mcq, i) {
    var was = answered.has(i);
    var optsHtml = '';
    mcq.opts.forEach(function(opt, oi) {
      var cls = 'mcq-opt' + (was ? ' locked' : '');
      if (was && oi === mcq.ans) cls += ' show-correct';
      optsHtml += '<div class="' + cls + '" data-idx="' + oi + '">' + String.fromCharCode(65+oi) + '. ' + opt + '</div>';
    });
    html +=
      '<div class="mcq-card" data-ans="' + mcq.ans + '" data-qi="' + i + '">' +
        '<div class="mcq-qnum">Q' + (i+1) + '</div>' +
        '<div class="mcq-qtext">' + mcq.q + '</div>' +
        '<div class="mcq-options">' + optsHtml + '</div>' +
        '<div class="mcq-explain' + (was ? ' visible' : '') + '">💡 ' + mcq.explain + '</div>' +
      '</div>';
  });
  html += '</div>';
  return html;
}

function buildNotes(unit) {
  var html = '<div class="notes-grid">';
  unit.notes.forEach(function(n) {
    var items = n.items.map(function(it) { return '<li>' + it + '</li>'; }).join('');
    html += '<div class="note-card"><h4>' + n.title + '</h4><ul>' + items + '</ul></div>';
  });
  html += '</div>';
  return html;
}

function updateUnitHeader(uid, container) {
  var prog = getProgress(uid);
  var bar = container.querySelector('.unit-progress-row .prog-bar');
  var pct = container.querySelector('.unit-pct');
  if (bar) bar.style.width = prog + '%';
  if (pct) pct.textContent = prog + '%';
}

function updateAllProgress() {
  var total = 0, done = 0;
  UNITS.forEach(function(u) {
    var p = getProgress(u.id);
    var num = u.id.replace('u', '');
    var bar = document.getElementById('dp' + num);
    var pct = document.getElementById('dpct' + num);
    var badge = document.getElementById('b' + num);
    if (bar) bar.style.width = p + '%';
    if (pct) pct.textContent = p + '%';
    if (badge) { badge.textContent = p + '%'; badge.classList.toggle('done', p === 100); }
    var uTotal = u.questions.length + u.mcqs.length;
    total += uTotal;
    done += Math.round((p / 100) * uTotal);
  });
  var overall = total ? Math.round((done / total) * 100) : 0;
  var ob = document.getElementById('overall-bar');
  var op = document.getElementById('overall-pct');
  if (ob) ob.style.width = overall + '%';
  if (op) op.textContent = overall + '%';
}

function init() {
  UNITS.forEach(function(u) { renderUnit(u); });

  document.querySelectorAll('#sidebar .nav-item').forEach(function(el) {
    el.addEventListener('click', function() { navigate(el.dataset.page); });
  });

  document.getElementById('reset-all').addEventListener('click', function() {
    if (!confirm('Reset all progress?')) return;
    UNITS.forEach(function(u) { state[u.id] = { knownCards: [], doneQs: [], mcqAnswered: [] }; });
    save();
    UNITS.forEach(function(u) { renderUnit(u); });
    updateAllProgress();
  });

  updateAllProgress();
}

document.addEventListener('DOMContentLoaded', init);
