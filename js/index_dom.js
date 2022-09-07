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

// In this section I use arrays to save the name, the descrition, the image, the tags and the button-links of each project//

let projectNames = document.getElementsByClassName('card-title')
let names = [].map.call(projectNames, elem => elem.textContent);
console.log(names)
let projectLongDescriptions = document.getElementsByClassName('long-description')
let longDescription = [].map.call(projectLongDescriptions, elem => elem.textContent);
let projectImages = document.getElementsByClassName('project-img')
let projectImage = [].map.call(projectImages, elem => elem.src);
let projectSeeLive = document.getElementsByClassName('see-live-link')
let seeLiveLinks = [].map.call(projectSeeLive, elem => elem.href);
let projectSeeSource = document.getElementsByClassName('see-source-link')
let seeSourceLinks = [].map.call(projectSeeSource, elem => elem.href);

// Here I create an array for each project tags and the preview tags

let projectOneTags = document.getElementsByClassName('tags-one');
let projectTwoTags = document.getElementsByClassName('tags-two');
let projectThreeTags = document.getElementsByClassName('tags-three');
let projectFourTags = document.getElementsByClassName('tags-four');
let projectFiveTags = document.getElementsByClassName('tags-five');
let projectSixTags = document.getElementsByClassName('tags-six');

let tagsOne = [].map.call(projectOneTags, elem => elem.textContent);
let tagsTwo = [].map.call(projectTwoTags, elem => elem.textContent);
let tagsThree = [].map.call(projectThreeTags, elem => elem.textContent);
let tagsFour = [].map.call(projectFourTags, elem => elem.textContent);
let tagsFive = [].map.call(projectFiveTags, elem => elem.textContent);
let tagsSix = [].map.call(projectSixTags, elem => elem.textContent);

// I will create a function to create li elements //

function createMenuItem(name) {
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}

let previewTags = document.querySelector('.preview-tags');

// In this section, I create an Object constructor for each project individually //

function Projects(name, description, img, seeLive, seeSource, tags) {
  this.name = name;
  this.longDescription = description;
  this.projectImage = img;
  this.seeLive = seeLive;
  this.seeSource = seeSource;
  this.tags = tags;
}

// In this section, I use the object constructor to create objects of each project //

let projectOne = new Projects(names[0], longDescription[0], projectImage[0], seeLiveLinks[0], seeSourceLinks[0], tagsOne);
let projectTwo = new Projects(names[1], longDescription[1], projectImage[1], seeLiveLinks[1], seeSourceLinks[1], tagsTwo);
let projectThree = new Projects(names[2], longDescription[2], projectImage[2], seeLiveLinks[2], seeSourceLinks[2], tagsThree);
let projectFour = new Projects(names[3], longDescription[3], projectImage[3], seeLiveLinks[3], seeSourceLinks[3], tagsFour);
let projectFive = new Projects(names[4], longDescription[4], projectImage[4], seeLiveLinks[4],  seeSourceLinks[4], tagsFive);
let projectSix = new Projects(names[5], longDescription[5], projectImage[5], seeLiveLinks[5], seeSourceLinks[5], tagsSix);

console.log(projectOne);

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
    document.querySelector('.preview-see-live').href = projectOne.seeLive;
    document.querySelector('.preview-see-source').href = projectOne.seeSource;
    for (let i = 0; i < tagsOne.length; i++) {
      previewTags.appendChild(createMenuItem(tagsOne[i]));
      }
  } else if(element.classList.contains('project-two')){
    document.querySelector('.preview-project-title').textContent = projectTwo.name;
    document.querySelector('.preview-card-p').textContent = projectTwo.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectTwo.longDescription;
    document.querySelector('.preview-project-img').src = projectTwo.projectImage;
    document.querySelector('.preview-see-live').href = projectTwo.seeLive;
    document.querySelector('.preview-see-source').href = projectTwo.seeSource;
    for (let i = 0; i < tagsTwo.length; i++) {
      previewTags.appendChild(createMenuItem(tagsTwo[i]));
      };
  } else if(element.classList.contains('project-three')){
    document.querySelector('.preview-project-title').textContent = projectThree.name;
    document.querySelector('.preview-card-p').textContent = projectThree.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectThree.longDescription;
    document.querySelector('.preview-project-img').src = projectThree.projectImage;
    document.querySelector('.preview-see-live').href = projectThree.seeLive;
    document.querySelector('.preview-see-source').href = projectThree.seeSource;
    for (let i = 0; i < tagsThree.length; i++) {
      previewTags.appendChild(createMenuItem(tagsThree[i]));
      };
  } else if(element.classList.contains('project-four')){
    document.querySelector('.preview-project-title').textContent = projectFour.name;
    document.querySelector('.preview-card-p').textContent = projectFour.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectFour.longDescription;
    document.querySelector('.preview-project-img').src = projectFour.projectImage;
    document.querySelector('.preview-see-live').href = projectFour.seeLive;
    document.querySelector('.preview-see-source').href = projectFour.seeSource;
    for (let i = 0; i < tagsFour.length; i++) {
      previewTags.appendChild(createMenuItem(tagsFour[i]));
      };
  } else if(element.classList.contains('project-five')){
    document.querySelector('.preview-project-title').textContent = projectFive.name;
    document.querySelector('.preview-card-p').textContent = projectFive.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectFive.longDescription;
    document.querySelector('.preview-project-img').src = projectFive.projectImage;
    document.querySelector('.preview-see-live').href = projectFive.seeLive;
    document.querySelector('.preview-see-source').href = projectFive.seeSource;
    for (let i = 0; i < tagsFive.length; i++) {
      previewTags.appendChild(createMenuItem(tagsFive[i]));
      };
  } else if(element.classList.contains('project-six')){
    document.querySelector('.preview-project-title').textContent = projectSix.name;
    document.querySelector('.preview-card-p').textContent = projectSix.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectSix.longDescription;
    document.querySelector('.preview-project-img').src = projectSix.projectImage;
    document.querySelector('.preview-see-live').href = projectSix.seeLive;
    document.querySelector('.preview-see-source').href = projectSix.seeSource;
    for (let i = 0; i < tagsSix.length; i++) {
      previewTags.appendChild(createMenuItem(tagsSix[i]));
      };
  }
})); 

previewx.addEventListener('click', () => {
  previewProject.classList.remove('is-active');
  setTimeout(() => {
    document.location.reload();
  }, 800);
});

// Here I create the daily selection tags

let dailyTags = document.getElementsByClassName('daily-tags');
let dailyBtn = document.querySelector('.see-more-btn');

let tagsZero = [].map.call(dailyTags, elem => elem.textContent)

console.log(tagsZero)

dailyBtn.addEventListener('click', () => {
  for (let i = 0; i < tagsZero.length; i++) {
    previewTags.appendChild(createMenuItem(tagsZero[i]));
    };
  });


