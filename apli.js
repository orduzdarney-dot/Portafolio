/* ── TYPING EFFECT ── */ 
const phrases = [
  "Soy Desarrollador Web",
  "Aprendo cada día",
  "Construyo soluciones",
  "Estudiante en Campuslands"
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-text');

function type() {
  const phrase = phrases[pi];
  el.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);
  if (!deleting && ci > phrase.length) {
    deleting = true; setTimeout(type, 1500); return;
  }
  if (deleting && ci < 0) {
    deleting = false; pi = (pi + 1) % phrases.length; ci = 0;
  }
  setTimeout(type, deleting ? 40 : 85);
}
type();

/* ── FADE IN ON SCROLL ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── NAV ACTIVE ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? '#f0eeff' : '';
  });
});