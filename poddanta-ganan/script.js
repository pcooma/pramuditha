'use strict';

const menuButton = document.querySelector('.menu-button');
const mainNav = document.getElementById('main-nav');

menuButton?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = String(new Date().getFullYear());

const rounds = [
  {
    title: 'මල් කීයක් තිබේද?',
    objects: '🌼 🌼 🌼 🌼',
    answers: ['3', '4', '5'],
    correct: '4'
  },
  {
    title: 'වැඩි කණ්ඩායම තෝරන්න',
    objects: '🐘🐘　හෝ　🐘🐘🐘',
    answers: ['වම', 'දකුණ'],
    correct: 'දකුණ'
  },
  {
    title: 'ඊළඟට එන්නේ මොකක්ද?',
    objects: '🔴 🔵 🔴 🔵 ❓',
    answers: ['🔴', '🔵', '🟢'],
    correct: '🔴'
  }
];

const demoCard = document.getElementById('demo-card');
const demoStep = document.getElementById('demo-step');
const demoStars = document.getElementById('demo-stars');
const demoFeedback = document.getElementById('demo-feedback');
const demoNext = document.getElementById('demo-next');
const demoSticker = document.getElementById('demo-sticker');

let roundIndex = 0;
let correctAnswers = 0;
let roundLocked = false;

function renderRound() {
  const round = rounds[roundIndex];
  roundLocked = false;
  demoFeedback.textContent = '';
  demoNext.hidden = true;
  demoSticker.hidden = true;
  demoStep.textContent = `ප්‍රශ්නය ${roundIndex + 1} / ${rounds.length}`;
  demoStars.textContent = `⭐ ${correctAnswers}`;
  demoCard.innerHTML = `
    <h3>${round.title}</h3>
    <div class="demo-objects" aria-hidden="true">${round.objects}</div>
    <div class="demo-answers" role="group" aria-label="පිළිතුරු">
      ${round.answers.map((answer) => `<button class="demo-answer" type="button" data-answer="${answer}">${answer}</button>`).join('')}
    </div>
  `;

  demoCard.querySelectorAll('.demo-answer').forEach((button) => {
    button.addEventListener('click', () => checkAnswer(button, round));
  });
}

function checkAnswer(button, round) {
  if (roundLocked) return;

  if (button.dataset.answer !== round.correct) {
    button.classList.add('wrong');
    button.disabled = true;
    demoFeedback.textContent = 'නැවත වරක් බලමු. ඔබට පුළුවන්!';
    return;
  }

  roundLocked = true;
  correctAnswers += 1;
  button.classList.add('correct');
  demoCard.querySelectorAll('.demo-answer').forEach((answer) => { answer.disabled = true; });
  demoStars.textContent = `⭐ ${correctAnswers}`;
  demoFeedback.textContent = 'නිවැරදියි! ඉතා හොඳ උත්සාහයක්.';

  if (roundIndex === rounds.length - 1) {
    demoNext.hidden = true;
    demoSticker.hidden = false;
  } else {
    demoNext.hidden = false;
  }
}

demoNext.addEventListener('click', () => {
  if (!roundLocked || roundIndex >= rounds.length - 1) return;
  roundIndex += 1;
  renderRound();
});

renderRound();
