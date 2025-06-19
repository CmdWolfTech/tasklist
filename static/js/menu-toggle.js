document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.querySelector('.main-nav ul');
  if (!toggle || !menu) return;

  function closeOnClickOutside(e) {
    if (!menu.contains(e.target) && e.target !== toggle) {
      menu.classList.remove('open');
      toggle.innerHTML = '&#x22EE;'; // 元に戻す
      document.removeEventListener('click', closeOnClickOutside);
    }
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
      toggle.innerHTML = '&times;'; // ✗ に変更
      document.addEventListener('click', closeOnClickOutside);
    } else {
      toggle.innerHTML = '&#x22EE;'; // 三点リーダーに戻す
      document.removeEventListener('click', closeOnClickOutside);
    }
  });
});
