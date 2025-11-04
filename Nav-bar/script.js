// Sélection des éléments
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Gestion du clic pour ouvrir/fermer le menu mobile
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
