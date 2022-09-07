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

//Here I will create the projects array

let projectNames = document.getElementsByClassName('card-title')
let names = [].map.call(projectNames, elem => elem.textContent);
let projectLongDescriptions = document.getElementsByClassName('long-description')
let longDescription = [].map.call(projectLongDescriptions, elem => elem.textContent);
let projectImages = document.getElementsByClassName('project-img')
let projectImage = [].map.call(projectImages, elem => elem.src);

console.log(projectImage);

function Projects(name, description, img) {
  this.name = name;
  this.longDescription = description;
  this.projectImage = img;
}


let projectOne = new Projects(names[0], longDescription[0], projectImage[0]);
let projectTwo = new Projects(names[1], longDescription[1], projectImage[1]);
let projectThree = new Projects(names[2], longDescription[2], projectImage[2]);
let projectFour = new Projects(names[3], longDescription[3], projectImage[3]);
let projectFive = new Projects(names[4], longDescription[4], projectImage[4]);
let projectSix = new Projects(names[5], longDescription[5], projectImage[5]);

// Here start the dom for the preview of the projects //

const previewProject = document.querySelector('.preview-project');
const previewx = document.querySelector('.project-x');
const previewBtn = document.querySelectorAll('.preview-btn');

previewBtn.forEach((element) => element.addEventListener('click', () => {
  previewProject.classList.toggle('is-active');
  if(element.classList.contains('project-one')){
    document.querySelector('.preview-project-title').textContent = projectOne.name;
    document.querySelector('.preview-card-p').textContent = projectOne.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectOne.longDescription;
    document.querySelector('.preview-project-img').src = projectOne.projectImage;
  } else if(element.classList.contains('project-two')){
    document.querySelector('.preview-project-title').textContent = projectTwo.name;
    document.querySelector('.preview-card-p').textContent = projectTwo.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectTwo.longDescription;
    document.querySelector('.preview-project-img').src = projectTwo.projectImage;
  } else if(element.classList.contains('project-three')){
    document.querySelector('.preview-project-title').textContent = projectThree.name;
    document.querySelector('.preview-card-p').textContent = projectThree.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectThree.longDescription;
    document.querySelector('.preview-project-img').src = projectThree.projectImage;
  } else if(element.classList.contains('project-four')){
    document.querySelector('.preview-project-title').textContent = projectFour.name;
    document.querySelector('.preview-card-p').textContent = projectFour.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectFour.longDescription;
    document.querySelector('.preview-project-img').src = projectFour.projectImage;
  } else if(element.classList.contains('project-five')){
    document.querySelector('.preview-project-title').textContent = projectFive.name;
    document.querySelector('.preview-card-p').textContent = projectFive.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectFive.longDescription;
    document.querySelector('.preview-project-img').src = projectFive.projectImage;
  } else if(element.classList.contains('project-six')){
    document.querySelector('.preview-project-title').textContent = projectSix.name;
    document.querySelector('.preview-card-p').textContent = projectSix.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectSix.longDescription;
    document.querySelector('.preview-project-img').src = projectSix.projectImage;
  }
}));

previewx.addEventListener('click', () => {
  previewProject.classList.remove('is-active');
});


