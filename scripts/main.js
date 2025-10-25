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
