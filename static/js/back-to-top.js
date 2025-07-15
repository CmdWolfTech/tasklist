document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
