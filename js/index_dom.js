const hamburger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('is-active');
  hamburger.classList.toggle('is-active');
});

document.querySelectorAll('.nav-link').forEach((element) => element.addEventListener('click', () => {
  hamburger.classList.remove('is-active');
  navMenu.classList.remove('is-active');
}));