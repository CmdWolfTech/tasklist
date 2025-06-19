document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.querySelector('.main-nav ul');
  if (!toggle || !menu) return;

  function closeOnClickOutside(e) {
    if (!menu.contains(e.target) && e.target !== toggle) {
      menu.classList.remove('open');
      document.removeEventListener('click', closeOnClickOutside);
    }
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
      document.addEventListener('click', closeOnClickOutside);
    } else {
      document.removeEventListener('click', closeOnClickOutside);
    }
  });
});
