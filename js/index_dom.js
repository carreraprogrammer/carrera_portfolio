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

// Here I will create the projects array to save the project data //

const projectNames = document.getElementsByClassName('card-title');
const names = [].map.call(projectNames, (elem) => elem.textContent);
const projectLongDescriptions = document.getElementsByClassName('long-description');
const longDescription = [].map.call(projectLongDescriptions, (elem) => elem.textContent);
const projectImages = document.getElementsByClassName('project-img');
const projectImage = [].map.call(projectImages, (elem) => elem.src);
const projectSeeLive = document.getElementsByClassName('see-live-link');
const seeLiveLinks = [].map.call(projectSeeLive, (elem) => elem.href);
const projectSeeSource = document.getElementsByClassName('see-source-link');
const seeSourceLinks = [].map.call(projectSeeSource, (elem) => elem.href);

// Here I create an array for each project tags and the preview tags

const projectOneTags = document.getElementsByClassName('tags-one');
const projectTwoTags = document.getElementsByClassName('tags-two');
const projectThreeTags = document.getElementsByClassName('tags-three');
const projectFourTags = document.getElementsByClassName('tags-four');
const projectFiveTags = document.getElementsByClassName('tags-five');
const projectSixTags = document.getElementsByClassName('tags-six');

const tagsOne = [].map.call(projectOneTags, (elem) => elem.textContent);
const tagsTwo = [].map.call(projectTwoTags, (elem) => elem.textContent);
const tagsThree = [].map.call(projectThreeTags, (elem) => elem.textContent);
const tagsFour = [].map.call(projectFourTags, (elem) => elem.textContent);
const tagsFive = [].map.call(projectFiveTags, (elem) => elem.textContent);
const tagsSix = [].map.call(projectSixTags, (elem) => elem.textContent);

// I will create a function to create li elements //

function createMenuItem(name) {
  const li = document.createElement('li');
  li.textContent = name;
  return li;
}

const previewTags = document.querySelector('.preview-tags');

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

const projectOne = new Projects(names[0], longDescription[0], projectImage[0],
  seeLiveLinks[0], seeSourceLinks[0], tagsOne);
const projectTwo = new Projects(names[1], longDescription[1], projectImage[1],
  seeLiveLinks[1], seeSourceLinks[1], tagsTwo);
const projectThree = new Projects(names[2], longDescription[2], projectImage[2],
  seeLiveLinks[2], seeSourceLinks[2], tagsThree);
const projectFour = new Projects(names[3], longDescription[3], projectImage[3],
  seeLiveLinks[3], seeSourceLinks[3], tagsFour);
const projectFive = new Projects(names[4], longDescription[4], projectImage[4],
  seeLiveLinks[4], seeSourceLinks[4], tagsFive);
const projectSix = new Projects(names[5], longDescription[5], projectImage[5],
  seeLiveLinks[5], seeSourceLinks[5], tagsSix);

// Here start the dom for the preview of the projects //

const previewProject = document.querySelector('.preview-project');
const previewx = document.querySelector('.project-x');
const previewBtn = document.querySelectorAll('.preview-btn');

previewBtn.forEach((element) => element.addEventListener('click', () => {
  previewProject.classList.toggle('is-active');
  if (element.classList.contains('project-one')) {
    document.querySelector('.preview-project-title').textContent = projectOne.name;
    document.querySelector('.preview-card-p').textContent = projectOne.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectOne.longDescription;
    document.querySelector('.preview-project-img').src = projectOne.projectImage;
    document.querySelector('.preview-see-live').href = projectOne.seeLive;
    document.querySelector('.preview-see-source').href = projectOne.seeSource;
    for (let i = 0; i < tagsOne.length; i += 1) {
      previewTags.appendChild(createMenuItem(tagsOne[i]));
    }
  } else if (element.classList.contains('project-two')) {
    document.querySelector('.preview-project-title').textContent = projectTwo.name;
    document.querySelector('.preview-card-p').textContent = projectTwo.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectTwo.longDescription;
    document.querySelector('.preview-project-img').src = projectTwo.projectImage;
    document.querySelector('.preview-see-live').href = projectTwo.seeLive;
    document.querySelector('.preview-see-source').href = projectTwo.seeSource;
    for (let i = 0; i < tagsTwo.length; i += 1) {
      previewTags.appendChild(createMenuItem(tagsTwo[i]));
    }
  } else if (element.classList.contains('project-three')) {
    document.querySelector('.preview-project-title').textContent = projectThree.name;
    document.querySelector('.preview-card-p').textContent = projectThree.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectThree.longDescription;
    document.querySelector('.preview-project-img').src = projectThree.projectImage;
    document.querySelector('.preview-see-live').href = projectThree.seeLive;
    document.querySelector('.preview-see-source').href = projectThree.seeSource;
    for (let i = 0; i < tagsThree.length; i += 1) {
      previewTags.appendChild(createMenuItem(tagsThree[i]));
    }
  } else if (element.classList.contains('project-four')) {
    document.querySelector('.preview-project-title').textContent = projectFour.name;
    document.querySelector('.preview-card-p').textContent = projectFour.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectFour.longDescription;
    document.querySelector('.preview-project-img').src = projectFour.projectImage;
    document.querySelector('.preview-see-live').href = projectFour.seeLive;
    document.querySelector('.preview-see-source').href = projectFour.seeSource;
    for (let i = 0; i < tagsFour.length; i += 1) {
      previewTags.appendChild(createMenuItem(tagsFour[i]));
    }
  } else if (element.classList.contains('project-five')) {
    document.querySelector('.preview-project-title').textContent = projectFive.name;
    document.querySelector('.preview-card-p').textContent = projectFive.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectFive.longDescription;
    document.querySelector('.preview-project-img').src = projectFive.projectImage;
    document.querySelector('.preview-see-live').href = projectFive.seeLive;
    document.querySelector('.preview-see-source').href = projectFive.seeSource;
    for (let i = 0; i < tagsFive.length; i += 1) {
      previewTags.appendChild(createMenuItem(tagsFive[i]));
    }
  } else if (element.classList.contains('project-six')) {
    document.querySelector('.preview-project-title').textContent = projectSix.name;
    document.querySelector('.preview-card-p').textContent = projectSix.longDescription;
    document.querySelector('.mobile-preview-card-p').textContent = projectSix.longDescription;
    document.querySelector('.preview-project-img').src = projectSix.projectImage;
    document.querySelector('.preview-see-live').href = projectSix.seeLive;
    document.querySelector('.preview-see-source').href = projectSix.seeSource;
    for (let i = 0; i < tagsSix.length; i += 1) {
      previewTags.appendChild(createMenuItem(tagsSix[i]));
    }
  }
}));

previewx.addEventListener('click', () => {
  previewProject.classList.remove('is-active');
  setTimeout(() => {
    document.location.reload();
  }, 0);
});

// Here I create the daily selection tags

const dailyTags = document.getElementsByClassName('daily-tags');
const dailyBtn = document.querySelector('.see-more-btn');

const tagsZero = [].map.call(dailyTags, (elem) => elem.textContent);

dailyBtn.addEventListener('click', () => {
  for (let i = 0; i < tagsZero.length; i += 1) {
    previewTags.appendChild(createMenuItem(tagsZero[i]));
  }
});