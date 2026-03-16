document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navLinks = document.querySelectorAll('.nav-link[data-page]');
  const current = document.body.dataset.page;

  navLinks.forEach((link) => {
    if (link.dataset.page === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const serviceLinks = document.querySelectorAll('[data-service-target]');
  serviceLinks.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-service-target');
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
