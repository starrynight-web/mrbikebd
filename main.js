function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
}

function toggleDropdown(el) {
  el.classList.toggle('open');
  const submenu = el.nextElementSibling;
  if (submenu && submenu.classList.contains('submenu')) {
    submenu.classList.toggle('open');
  }
}