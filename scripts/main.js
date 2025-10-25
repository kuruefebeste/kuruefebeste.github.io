// smooth scroll for hero scroll button
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-scroll]');
  if (!btn) return;
  const sel = btn.getAttribute('data-scroll');
  const target = document.querySelector(sel);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
});

// timeline reveal on scroll
const timelineItems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => observer.observe(item));

// handle navbar color change on scroll
function onScroll() {
  const scrolled = window.scrollY > 20;
  document.body.classList.toggle('scrolled', scrolled);
}
onScroll();
window.addEventListener('scroll', onScroll);

// --- INTERACTIVE INK AREA --- //
const inkArea = document.querySelector('.ink-area');

if (inkArea) {
  inkArea.addEventListener('mousemove', (e) => {
    const rect = inkArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dot = document.createElement('div');
    dot.className = 'ink-dot';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    inkArea.appendChild(dot);

    // fade out + remove after 1.5s
    setTimeout(() => {
      dot.style.opacity = 0;
      setTimeout(() => dot.remove(), 15000);
    }, 50);
  });
}
