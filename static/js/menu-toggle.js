document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.querySelector('.main-nav ul');
  var closeBtn = document.getElementById('menu-close');
  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove('open');
    if (toggle) toggle.style.display = '';
    document.removeEventListener('click', closeOnClickOutside);
  }

  function closeOnClickOutside(e) {
    if (!menu.contains(e.target) && e.target !== toggle) {
      closeMenu();
    }
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
      toggle.style.display = 'none';
      document.addEventListener('click', closeOnClickOutside);
    } else {
      toggle.style.display = '';
      document.removeEventListener('click', closeOnClickOutside);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      closeMenu();
    });
  }
});
