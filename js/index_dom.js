// This is the DOM for burger menu //

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

// Here start the dom for the preview of the projects //

const previewProject = document.querySelector('.preview-project');
const previewx = document.querySelector('.project-x');

document.querySelectorAll('.preview-btn').forEach((element) => element.addEventListener('click', () => {
  previewProject.classList.toggle('is-active');
}));

previewx.addEventListener('click', () => {
  previewProject.classList.remove('is-active');
});