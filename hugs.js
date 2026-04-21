/* ============================================
   HUGS PAGE — Quotes Engine, Timer, Hug Animation, Easter Egg
   ============================================ */

// ─── Quotes Collection ───────────────────────────────────────────────
const quotes = [
  // Grey's Anatomy
  {
    text: "It's a beautiful day to save lives.",
    source: "Derek Shepherd",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #FF6B8A 0%, #FF8FAB 40%, #C93C6E 100%)"
  },
  {
    text: "Have some fire. Be unstoppable. Be a force of nature. Be better than anyone here, and don't give a damn what anyone thinks.",
    source: "Cristina Yang",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #E84393 0%, #FD79A8 50%, #A855F7 100%)"
  },
  {
    text: "Not everybody has to be happy all the time. That's not mental health. That's crap.",
    source: "Meredith Grey",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #6C5CE7 0%, #A29BFE 50%, #FD79A8 100%)"
  },
  {
    text: "The carousel never stops turning. You can't get off.",
    source: "Ellis Grey",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #FDA085 0%, #F6D365 50%, #FF9A9E 100%)"
  },
  {
    text: "Sometimes the future changes quickly and completely, and we're left with only the choice of what to do next.",
    source: "Meredith Grey",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #E44D76 0%, #F09DAD 40%, #FFB5C2 100%)"
  },
  {
    text: "If you aren't willing to keep looking for light in the darkest of places without stopping, even when it seems impossible, you will never succeed.",
    source: "Amelia Shepherd",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #C471F5 0%, #FA71CD 50%, #FFB5C2 100%)"
  },
  {
    text: "You can waste your lives drawing lines. Or you can live your life crossing them.",
    source: "Meredith Grey",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #F093FB 0%, #F5576C 50%, #FF6B8A 100%)"
  },
  {
    text: "At some point, you have to make a decision. Boundaries don't keep other people out. They fence you in.",
    source: "Meredith Grey",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #FF758C 0%, #FF7EB3 50%, #C471ED 100%)"
  },
  {
    text: "We're all damaged. We've all been hurt. We've all had to learn painful lessons. We are the sum of all we have been through.",
    source: "Meredith Grey",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #F7797D 0%, #FBD786 50%, #C6FFDD 100%)"
  },
  {
    text: "Just because we can live without something, doesn't mean we have to.",
    source: "Derek Shepherd",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #E8507A 0%, #FFB5C2 50%, #FFDAB9 100%)"
  },

  // Scrubs
  {
    text: "Nothing in this world that is worth having comes easy.",
    source: "Dr. Bob Kelso",
    show: "Scrubs",
    gradient: "linear-gradient(135deg, #43E97B 0%, #38F9D7 50%, #4FACFE 100%)"
  },
  {
    text: "The truth is, it is all your memories — the joyful ones and the heartbreaking ones — that make up who you are as a person.",
    source: "J.D. Dorian",
    show: "Scrubs",
    gradient: "linear-gradient(135deg, #4FACFE 0%, #00F2FE 50%, #43E97B 100%)"
  },
  {
    text: "In the end, the most important thing to accept is that, no matter how alone you feel, how painful it may be, with the help of those around you, you'll get through this too.",
    source: "J.D. Dorian",
    show: "Scrubs",
    gradient: "linear-gradient(135deg, #A18CD1 0%, #FBC2EB 50%, #F6D365 100%)"
  },
  {
    text: "It's the things that no one sees you do that really count.",
    source: "J.D. Dorian",
    show: "Scrubs",
    gradient: "linear-gradient(135deg, #89F7FE 0%, #66A6FF 50%, #A18CD1 100%)"
  },
  {
    text: "The key to my exercise program is this: I really, really don't want to die.",
    source: "Dr. Perry Cox",
    show: "Scrubs",
    gradient: "linear-gradient(135deg, #F6D365 0%, #FDA085 50%, #F5576C 100%)"
  },

  // House M.D.
  {
    text: "You could think I'm wrong, but that's no reason to stop thinking.",
    source: "Dr. Gregory House",
    show: "House M.D.",
    gradient: "linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%)"
  },
  {
    text: "It's one of the great tragedies of life — something always changes.",
    source: "Dr. Gregory House",
    show: "House M.D.",
    gradient: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)"
  },
  {
    text: "Treating illness is why we became doctors. Treating patients is what actually makes most doctors miserable.",
    source: "Dr. Gregory House",
    show: "House M.D.",
    gradient: "linear-gradient(135deg, #4B6CB7 0%, #182848 50%, #667EEA 100%)"
  },
  {
    text: "Almost dying changes nothing. Dying changes everything.",
    source: "Dr. Gregory House",
    show: "House M.D.",
    gradient: "linear-gradient(135deg, #2C3E50 0%, #4CA1AF 50%, #667EEA 100%)"
  },
  {
    text: "Humanity is overrated. But the individual humans within it? Remarkable.",
    source: "Dr. James Wilson",
    show: "House M.D.",
    gradient: "linear-gradient(135deg, #5B247A 0%, #1BCEDF 50%, #667EEA 100%)"
  },

  // The Good Doctor
  {
    text: "I'm not going to let anyone die. That is my promise.",
    source: "Dr. Shaun Murphy",
    show: "The Good Doctor",
    gradient: "linear-gradient(135deg, #00C6FB 0%, #005BEA 50%, #667EEA 100%)"
  },
  {
    text: "Why does it matter what I look like? What matters is what's inside.",
    source: "Dr. Shaun Murphy",
    show: "The Good Doctor",
    gradient: "linear-gradient(135deg, #48C6EF 0%, #6F86D6 50%, #A18CD1 100%)"
  },

  // Patch Adams / Robin Williams
  {
    text: "You treat a disease, you win, you lose. You treat a person, I guarantee you, you'll win, no matter what the outcome.",
    source: "Patch Adams (Robin Williams)",
    show: "Patch Adams",
    gradient: "linear-gradient(135deg, #FFD54F 0%, #FF9A76 50%, #FF6B6B 100%)"
  },
  {
    text: "Every human being has an impact on another. It's up to us whether it's a positive or negative one.",
    source: "Patch Adams (Robin Williams)",
    show: "Patch Adams",
    gradient: "linear-gradient(135deg, #F7971E 0%, #FFD200 50%, #43E97B 100%)"
  },

  // Hippocrates & Historical
  {
    text: "Wherever the art of medicine is loved, there is also a love of humanity.",
    source: "Hippocrates",
    show: "Ancient Greek Medicine",
    gradient: "linear-gradient(135deg, #D4A574 0%, #C4956A 50%, #B8860B 100%)"
  },
  {
    text: "Healing is a matter of time, but it is sometimes also a matter of opportunity.",
    source: "Hippocrates",
    show: "Ancient Greek Medicine",
    gradient: "linear-gradient(135deg, #CFB590 0%, #D4A574 50%, #E6C89C 100%)"
  },
  {
    text: "The good physician treats the disease; the great physician treats the patient who has the disease.",
    source: "Sir William Osler",
    show: "Father of Modern Medicine",
    gradient: "linear-gradient(135deg, #3D7EAA 0%, #FFE47A 50%, #F5AF19 100%)"
  },
  {
    text: "Medicine is not only a science; it is also an art. It does not consist of compounding pills but of the understanding of the patient.",
    source: "Paracelsus",
    show: "Renaissance Medicine",
    gradient: "linear-gradient(135deg, #834D9B 0%, #D04ED6 50%, #F093FB 100%)"
  },
  {
    text: "The art of medicine consists of amusing the patient while nature cures the disease.",
    source: "Voltaire",
    show: "Philosophy of Medicine",
    gradient: "linear-gradient(135deg, #F5AF19 0%, #F12711 50%, #F5AF19 100%)"
  },
  {
    text: "The best doctor gives the least medicines.",
    source: "Benjamin Franklin",
    show: "Founding Father",
    gradient: "linear-gradient(135deg, #3A6186 0%, #89253E 50%, #C33764 100%)"
  },

  // Edward Trudeau
  {
    text: "To cure sometimes, to relieve often, to comfort always.",
    source: "Edward Livingston Trudeau",
    show: "Pioneer of Tuberculosis Treatment",
    gradient: "linear-gradient(135deg, #E6DADA 0%, #D4A574 50%, #C4956A 100%)"
  },

  // More Grey's Anatomy
  {
    text: "The expected is what keeps us steady. It's the unexpected that changes our lives forever.",
    source: "Meredith Grey",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 50%, #F6D365 100%)"
  },
  {
    text: "Pain. You just have to ride it out. Hope it goes away on its own. Hope the wound that caused it heals.",
    source: "Meredith Grey",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #A18CD1 0%, #FBC2EB 50%, #FF9A9E 100%)"
  },
  {
    text: "Knowing is better than wondering. Waking is better than sleeping. And even the biggest failure beats the hell out of never trying.",
    source: "Meredith Grey",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #FF6B8A 0%, #FFC3A0 50%, #FFAFBD 100%)"
  },
  {
    text: "I am a superhero. I am the person who gets to save lives on a daily basis.",
    source: "Alex Karev",
    show: "Grey's Anatomy",
    gradient: "linear-gradient(135deg, #F5576C 0%, #FF6B8A 50%, #FFD54F 100%)"
  },

  // Chicago Med
  {
    text: "In medicine, you learn to manage your emotions... or they manage you.",
    source: "Dr. Daniel Charles",
    show: "Chicago Med",
    gradient: "linear-gradient(135deg, #2193B0 0%, #6DD5ED 50%, #89F7FE 100%)"
  },

  // ER
  {
    text: "The best thing about being a doctor is the privilege of being with people on the worst — and best — days of their lives.",
    source: "Dr. Mark Greene",
    show: "ER",
    gradient: "linear-gradient(135deg, #1A2980 0%, #26D0CE 50%, #43E97B 100%)"
  },

  // Doogie Howser
  {
    text: "Growing up means realizing that all the answers in the world won't save you, but asking the right questions might.",
    source: "Doogie Howser",
    show: "Doogie Howser, M.D.",
    gradient: "linear-gradient(135deg, #5EE7DF 0%, #B490CA 50%, #E8507A 100%)"
  },

  // Rumi (healing / warm)
  {
    text: "The wound is the place where the Light enters you.",
    source: "Rumi",
    show: "The Poetry of Healing",
    gradient: "linear-gradient(135deg, #F7971E 0%, #FFD200 40%, #FFF9C4 100%)"
  },

  // Maya Angelou
  {
    text: "There is no greater agony than bearing an untold story inside you. So speak. So heal.",
    source: "Maya Angelou",
    show: "Literature & Healing",
    gradient: "linear-gradient(135deg, #D4A574 0%, #F093FB 50%, #A18CD1 100%)"
  },

  // Albert Schweitzer
  {
    text: "The purpose of human life is to serve, and to show compassion and the will to help others.",
    source: "Albert Schweitzer",
    show: "Nobel Peace Prize Laureate",
    gradient: "linear-gradient(135deg, #43E97B 0%, #38F9D7 40%, #F6D365 100%)"
  },

  // More warm medical quotes
  {
    text: "Caring for the vulnerable is the highest expression of what it means to be human.",
    source: "Florence Nightingale",
    show: "Pioneer of Modern Nursing",
    gradient: "linear-gradient(135deg, #FFD6E0 0%, #FFB5C2 40%, #FF8FAB 100%)"
  },
  {
    text: "The human body is the best picture of the human soul.",
    source: "Ludwig Wittgenstein",
    show: "Philosophy",
    gradient: "linear-gradient(135deg, #E8DEF8 0%, #D4C4E8 40%, #C4B0DB 100%)"
  },
];

// Shuffle quotes for a fresh experience each visit
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const urlParams = new URLSearchParams(window.location.search);
const isUnlocked = urlParams.has('unlocked');
const activeQuotes = isUnlocked ? quotes : quotes.slice(0, 22);
const shuffledQuotes = shuffleArray(activeQuotes);

// ─── State ────────────────────────────────────────────────────────────
let currentIndex = 0;
let timeLeft = 60;
let timerInterval = null;
let isPaused = false;
let hugCount = 0;
let isHugAnimating = false;
let isCustomQuote = false;

// ─── DOM References ──────────────────────────────────────────────────
const bgCurrent = document.getElementById('bgCurrent');
const bgNext = document.getElementById('bgNext');
const quoteCard = document.getElementById('quoteCard');
const quoteText = document.getElementById('quoteText');
const quoteSource = document.getElementById('quoteSource');
const quoteShow = document.getElementById('quoteShow');
const customBadge = document.getElementById('customBadge');
const timerText = document.getElementById('timerText');
const timerProgress = document.getElementById('timerProgress');
const btnPause = document.getElementById('btnPause');
const btnPauseIcon = document.getElementById('btnPauseIcon');
const quoteCounter = document.getElementById('quoteCounter');
const btnHug = document.getElementById('btnHug');
const btnHugText = document.getElementById('btnHugText');
const hugOverlay = document.getElementById('hugOverlay');
const hugCounterEl = document.getElementById('hugCounter');
const hugCounterNum = document.getElementById('hugCounterNum');
const quoteDots = document.getElementById('quoteDots');
const btnSkip = document.getElementById('btnSkip');
const easterEggBtn = document.getElementById('easterEgg');
const eeModal = document.getElementById('eeModal');
const eeInput = document.getElementById('eeInput');
const eeBtnCancel = document.getElementById('eeBtnCancel');
const eeBtnSubmit = document.getElementById('eeBtnSubmit');
const particlesContainer = document.getElementById('particles');

// Timer SVG constants
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 17; // radius = 17
const TIMER_DURATION = 60; // seconds

// ─── Initialize ──────────────────────────────────────────────────────
function init() {
  createDots();
  displayQuote(currentIndex, true);
  startTimer();
  spawnParticles();
  bindEvents();
}

// ─── Quote Dots ──────────────────────────────────────────────────────
function createDots() {
  quoteDots.innerHTML = '';
  shuffledQuotes.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'quote-dot' + (i === 0 ? ' quote-dot--active' : '');
    dot.setAttribute('aria-label', `Quote ${i + 1}`);
    dot.addEventListener('click', () => goToQuote(i));
    quoteDots.appendChild(dot);
  });
}

function updateDots(index) {
  const dots = quoteDots.querySelectorAll('.quote-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('quote-dot--active', i === index);
  });
}

// ─── Display Quote ───────────────────────────────────────────────────
function displayQuote(index, instant = false) {
  const quote = shuffledQuotes[index];
  isCustomQuote = false;
  customBadge.classList.remove('custom-badge--visible');

  if (instant) {
    bgCurrent.style.background = quote.gradient;
    quoteText.textContent = `"${quote.text}"`;
    quoteSource.textContent = `— ${quote.source}`;
    quoteShow.textContent = quote.show;
    quoteCounter.textContent = `${index + 1} / ${shuffledQuotes.length}`;
    updateDots(index);
    return;
  }

  // Animate out
  quoteCard.classList.add('quote-card--exit');

  setTimeout(() => {
    // Update background with crossfade
    bgNext.style.background = quote.gradient;
    bgNext.classList.add('bg-gradient--current');
    bgNext.classList.remove('bg-gradient--next');

    // Update text
    quoteText.textContent = `"${quote.text}"`;
    quoteSource.textContent = `— ${quote.source}`;
    quoteShow.textContent = quote.show;
    quoteCounter.textContent = `${index + 1} / ${shuffledQuotes.length}`;
    updateDots(index);

    // Animate in
    quoteCard.classList.remove('quote-card--exit');
    quoteCard.classList.add('quote-card--enter');

    setTimeout(() => {
      quoteCard.classList.remove('quote-card--enter');
      // Swap background layers
      bgCurrent.style.background = quote.gradient;
      bgNext.classList.remove('bg-gradient--current');
      bgNext.classList.add('bg-gradient--next');
    }, 600);
  }, 500);
}

function goToQuote(index) {
  currentIndex = index;
  displayQuote(currentIndex);
  resetTimer();
}

function nextQuote() {
  currentIndex = (currentIndex + 1) % shuffledQuotes.length;
  displayQuote(currentIndex);
  resetTimer();
}

function prevQuote() {
  currentIndex = (currentIndex - 1 + shuffledQuotes.length) % shuffledQuotes.length;
  displayQuote(currentIndex);
  resetTimer();
}

// ─── Timer ───────────────────────────────────────────────────────────
function startTimer() {
  timerProgress.style.strokeDasharray = TIMER_CIRCUMFERENCE;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (!isPaused) {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 0) {
        nextQuote();
      }
    }
  }, 1000);
}

function resetTimer() {
  timeLeft = TIMER_DURATION;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  timerText.textContent = timeLeft;
  const offset = TIMER_CIRCUMFERENCE * (1 - timeLeft / TIMER_DURATION);
  timerProgress.style.strokeDashoffset = offset;
}

function togglePause() {
  isPaused = !isPaused;
  btnPauseIcon.textContent = isPaused ? '▶' : '❚❚';
  btnPause.setAttribute('aria-label', isPaused ? 'Resume' : 'Pause');
}

// ─── Hug Animation ──────────────────────────────────────────────────
function triggerHug() {
  if (isHugAnimating) return;
  isHugAnimating = true;
  hugCount++;

  // Show overlay
  hugOverlay.classList.add('hug-overlay--active');

  // Create the inner elements fresh
  hugOverlay.innerHTML = `
    <div class="hug-overlay__warmth"></div>
    <div class="hug-overlay__arm hug-overlay__arm--left"></div>
    <div class="hug-overlay__arm hug-overlay__arm--right"></div>
    <div class="hug-overlay__message">${getHugMessage()}</div>
  `;

  // Burst hearts
  spawnHugHearts();

  // Update hug counter
  hugCounterNum.textContent = hugCount;
  hugCounterEl.classList.add('hug-counter--visible');
  
  // Rotate button text
  btnHugText.textContent = getButtonTextVariation();

  // Clean up after animation
  setTimeout(() => {
    hugOverlay.classList.remove('hug-overlay--active');
    hugOverlay.innerHTML = '';
    isHugAnimating = false;
  }, 3000);
}

function getButtonTextVariation() {
  const variations = [
    "Virtual Hug",
    "Warm Hug",
    "Comforting Hug",
    "Cozy Hug",
    "Healing Hug",
    "Another Hug",
    "Send Love"
  ];
  return variations[Math.floor(Math.random() * variations.length)];
}

function getHugMessage() {
  const messages = [
    "You've been hugged! 🤗",
    "Sending warm hugs! 💕",
    "Feel the warmth! 🫂",
    "You are so loved! 💗",
    "Hugs & more hugs! 🤗",
    "Wrapped in love! 🥰",
    "This hug is just for you! 💝",
    "Squeezing you tight! 🫂",
    "Virtual hug delivered! 💖",
    "All the hugs! 🤗✨",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

function spawnHugHearts() {
  const heartEmojis = ['💖', '💕', '💗', '💝', '🤗', '🫂', '💞', '✨', '🥰', '❤️‍🔥'];
  const count = 20;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'hug-heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    const angle = (Math.PI * 2 * i) / count;
    const distance = 80 + Math.random() * 150;
    const hx = Math.cos(angle) * distance;
    const hy = Math.sin(angle) * distance;
    const hr = -180 + Math.random() * 360;

    heart.style.cssText = `
      left: 50%;
      top: 50%;
      font-size: ${14 + Math.random() * 16}px;
      --hx: ${hx}px;
      --hy: ${hy}px;
      --hr: ${hr}deg;
      animation-delay: ${Math.random() * 0.3}s;
    `;

    hugOverlay.appendChild(heart);
  }
}

// ─── Easter Egg ──────────────────────────────────────────────────────
let eeClickCount = 0;
let eeTimeout = null;

function handleEasterEgg() {
  eeClickCount++;

  if (eeTimeout) clearTimeout(eeTimeout);
  eeTimeout = setTimeout(() => { eeClickCount = 0; }, 2000);

  if (eeClickCount >= 3) {
    eeClickCount = 0;
    easterEggBtn.classList.add('easter-egg--found');
    setTimeout(() => easterEggBtn.classList.remove('easter-egg--found'), 1000);
    openEEModal();
  }
}

function openEEModal() {
  eeModal.classList.add('ee-modal--open');
  eeInput.focus();
}

function closeEEModal() {
  eeModal.classList.remove('ee-modal--open');
  eeInput.value = '';
}

function submitCustomQuote() {
  const text = eeInput.value.trim();
  if (!text) return;

  // Override current display
  isCustomQuote = true;
  quoteCard.classList.add('quote-card--exit');

  setTimeout(() => {
    quoteText.textContent = `"${text}"`;
    quoteSource.textContent = '— You ✨';
    quoteShow.textContent = 'A Personal Message';
    customBadge.classList.add('custom-badge--visible');

    quoteCard.classList.remove('quote-card--exit');
    quoteCard.classList.add('quote-card--enter');

    setTimeout(() => quoteCard.classList.remove('quote-card--enter'), 600);
  }, 500);

  closeEEModal();

  // Pause timer while custom quote is shown
  if (!isPaused) {
    togglePause();
  }
}

// ─── Floating Particles ──────────────────────────────────────────────
function spawnParticles() {
  const types = ['heart', 'sparkle', 'star'];
  const colors = [
    'rgba(255, 255, 255, 0.4)',
    'rgba(255, 214, 224, 0.5)',
    'rgba(255, 213, 79, 0.35)',
    'rgba(255, 182, 193, 0.45)',
    'rgba(212, 196, 232, 0.35)',
  ];

  function create() {
    const p = document.createElement('div');
    const type = types[Math.floor(Math.random() * types.length)];
    p.className = `particle particle--${type}`;

    const size = 8 + Math.random() * 16;
    const x = Math.random() * 100;
    const duration = 14 + Math.random() * 22;
    const drift = -50 + Math.random() * 100;
    const opacity = 0.15 + Math.random() * 0.3;
    const color = colors[Math.floor(Math.random() * colors.length)];

    p.style.cssText = `
      left: ${x}%;
      font-size: ${size}px;
      color: ${color};
      animation-duration: ${duration}s;
      animation-delay: ${Math.random() * 10}s;
      --drift: ${drift}px;
      --particle-opacity: ${opacity};
    `;

    particlesContainer.appendChild(p);

    setTimeout(() => {
      p.remove();
      create();
    }, (duration + 10) * 1000);
  }

  for (let i = 0; i < 18; i++) {
    setTimeout(create, i * 400);
  }
}

// ─── Event Bindings ──────────────────────────────────────────────────
function bindEvents() {
  btnPause.addEventListener('click', togglePause);
  btnHug.addEventListener('click', triggerHug);
  btnSkip.addEventListener('click', nextQuote);
  easterEggBtn.addEventListener('click', handleEasterEgg);
  eeBtnCancel.addEventListener('click', closeEEModal);
  eeBtnSubmit.addEventListener('click', submitCustomQuote);

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (eeModal.classList.contains('ee-modal--open')) {
      if (e.key === 'Escape') closeEEModal();
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitCustomQuote();
      }
      return;
    }

    switch (e.key) {
      case ' ':
        e.preventDefault();
        togglePause();
        break;
      case 'ArrowRight':
        nextQuote();
        break;
      case 'ArrowLeft':
        prevQuote();
        break;
      case 'h':
        triggerHug();
        break;
    }
  });

  // Click backdrop to close modal
  eeModal.querySelector('.ee-modal__backdrop').addEventListener('click', closeEEModal);
}

// ─── Boot ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
