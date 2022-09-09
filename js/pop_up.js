const projectsInformation = [

  {
    id: 'one',
    firstCard: 'first-card',
    name: 'Project One',
    longDescription: 'This is the long description for the PROJECT ONE Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quidem maiores. Amet necessitatibus neque architecto quis, eaque corporis nihil. Tenetur magni libero accusamus. Perferendis voluptate ducimus possimus eveniet deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quidem maiores. Amet necessitatibus neque architecto quis, eaque corporis nihil',
    abstract: 'This is the abstract description of the PROJECT ONE Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'Projects/Project_1.png',
    seeLive: 'https://www.freecodecamp.org/certification/fccde5c…ac5b-4ee7-91c7-386adbe10dcd/responsive-web-design',
    seeSource: 'https://www.freecodecamp.org/certification/fccde5c1dbd-ac5b-4ee7-91c7-386adbe10dcd/responsive-web-design',
    tags: ['html', 'Css'],
  },

  {
    id: 'two',
    name: 'Project Two',
    longDescription: 'This is the long description for the PROJECT Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quidem maiores. Amet necessitatibus neque architecto quis, eaque corporis nihil. Tenetur magni libero accusamus. Perferendis voluptate ducimus possimus eveniet deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quidem maiores. Amet necessitatibus neque architecto quis, eaque corporis nihil',
    abstract: 'This is the abstract description of the PROJECT TWO Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'Projects/Project_2.png',
    seeLive: 'https://carreraprogrammer.github.io/carreraprogrammerportfolio/',
    seeSource: 'https://github.com/carreraprogrammer/carreraprogrammerportfolio',
    tags: ['html', 'Bootstrap', 'Ruby'],
  },

  {
    id: 'three',
    name: 'Project Three',
    longDescription: 'This is the long description for the PROJECT FOUR Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quidem maiores. Amet necessitatibus neque architecto quis, eaque corporis nihil. Tenetur magni libero accusamus. Perferendis voluptate ducimus possimus eveniet deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quidem maiores.',
    abstract: 'This is the abstract description of the PROJECT THREE Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'Projects/Project_3.jpg',
    seeLive: 'https://carreraprogrammer.github.io/Moneta-ecommerce/',
    seeSource: 'https://github.com/carreraprogrammer/Moneta-ecommerce',
    tags: ['html', 'Bootstrap', 'Ruby'],
  },
  {
    id: 'four',
    name: 'Project Four',
    longDescription: 'This is the long description for the PROJECT FOUR Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quidem maiores. Amet necessitatibus neque architecto quis, eaque corporis nihil. Tenetur magni libero accusamus. Perferendis voluptate ducimus possimus eveniet deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quidem maiores. Amet necessitatibus neque architecto quis, eaque corporisIdeo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Morbi quidem maiores. Lorem ipsum dolor sit',
    abstract: 'This is the abstract description of the PROJECT FOUR Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'Projects/Project_4.jpg',
    seeLive: 'https://carreraprogrammer.github.io/Moneta-ecommerce/',
    seeSource: 'https://github.com/carreraprogrammer/Moneta-ecommerce',
    tags: ['html', 'Bootstrap', 'Ruby'],
  },
  {
    id: 'five',
    name: 'Project Five',
    longDescription: 'This is the long description for the PROJECT FIVE Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quidem maiores. Amet necessitatibus neque architecto quis, eaque corporis nihil. Tenetur magni libero accusamus. Perferendis voluptate ducimus possimus eveniet deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit. Morbi sed    diam nonumy euismod tempor  incididunt ut labore et dolore magna aliquyam erat, sed diam nonumy euismod et dolore magna aliquyam erat. Lorem ipsum dolor sit amet consectetur adipisicing elit',
    abstract: 'This is the abstract description of the PROJECT FIVE Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'Projects/Project_5.png',
    seeLive: 'https://www.freecodecamp.org/certification/fccde5c1dbd-ac5b-4ee7-91c7-386adbe10dcd/responsive-web-design',
    seeSource: 'https://www.freecodecamp.org/certification/fccde5c1dbd-ac5b-4ee7-91c7-386adbe10dcd/responsive-web-design',
    tags: ['html', 'Bootstrap', 'Ruby'],
  },
  {
    id: 'six',
    name: 'Project Six',
    longDescription: 'This is the long description for the PROJECT SIX Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem quidem maiores. Amet necessitatibus neque architecto quis, eaque corporis nihil. Tenetur magni libero accusamus. Perferendis voluptate ducimus possimus eveniet deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit. Morbi sed diam nonumy euismod tempor  incididunt ut labore et dolore magna aliquyam er.',
    abstract: 'This is the abstract description of the PROJECT SIX Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'Projects/Project_6.png',
    seeLive: 'https://carreraprogrammer.github.io/carrera_portfolio/',
    seeSource: 'https://carreraprogrammer.github.io/carrera_portfolio/',
    tags: ['html', 'Bootstrap', 'Ruby'],
  },
  
]
  
  // I will create the structure of each project card
  
  const projectCardStructure = projectsInformation.map((project) => `
    
    <div class='project-card card-${project.id} div-flex'>
      
      <h3 class='card-title'>${project.name}</h3>
  
      <p class='card-description'>${project.abstract}</p>
  
      <p class='long-description long-description-one'>${project.longDescription}</p>
  
      <img 
          class='project-img' 
          src='${project.seeLive}' alt='Project Image'
      />
  
      <a class='see-live-link' href= '${project.seeLive}'></a>
  
      <a class='see-source-link' href='$'></a>
  
      <ul id='card-tags' class='card-tags div-flex'>
        ${project.tags.map((tech) => `<li class="card-tags-ul-li tags-one div-flex">${tech}</li>`).join('')}
      </ul>
  
      <a class="preview-btn btn link-card-button div-flex project-${project.id}">See Project</a>
  
  </div>
  `);

  const projectCardStructureDesktop = projectsInformation.map((project) => `
 
  <div class="project-card card-${project.id} div-flex">

    <a class="preview-btn2 card-link project-${project.id}">

      <h3 class="card-title">${project.name}</h3>
      
    </a>

    <p class="card-description">${project.abstract}</p>

    <p class="long-description long-description-${project.id}">${project.longDescription}</p>

    <ul class="card-tags div-flex">
       ${project.tags.map((tech) => `<li class="card-tags-ul-li div-flex">${tech}</li>`).join('')}
    </ul>

    <a class="preview-btn btn link-card-button div-flex project-${project.id}">See Project</a>

</div>

`);


  
  const gridProjectsMobile = document.querySelector('.projects-grid');
  const gridProjectsDesktop = document.querySelector('.projects-grid-desktop');
  const parser = new DOMParser();


// HERE I DISPLAY THE PROJECTS CARD STRUCTURE FOR DESKTOP
  
 projectCardStructureDesktop.forEach((projectString, index) => {

    const projectCardDesktop = parser.parseFromString(projectString, 'text/html').body.firstChild;

     
    const desktopPopup = 
    `
    <section class="preview-project">
      <button class="project-x">
        <span class="project-bar one"></span>
        <span class="project-bar two"></span>
      </button>
      
      <div class="preview-project-content">
      
        <h1 class="preview-project-title">${projectsInformation[index].name}</h1>
      
      <ul class="preview-tags tags project-content div-flex">
         ${projectsInformation[index].tags.map((tech) => `<li class="card-tags-ul-li div-flex">${tech}</li>`).join('')}
      </ul>
      
      <div class="main-preview-project div-flex">
      
          <img class="preview-project-img" src="${projectsInformation[index].image}" alt="preview-project">
      
          <div class="preview-card-description div-flex">
      
              <p class="preview-card-p">${projectsInformation[index].longDescription}</p>
      
          <div class="preview-container-btns">
      
              <a class="btn preview-project-btn preview-see-live" href="${projectsInformation[index].seeLive}" target="_blank" rel="noopener">See-live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      
              <a class="btn preview-project-btn preview-see-source" href="${projectsInformation[index].seeSource}" target="_blank" rel="no" target="_blank" rel="noopener">See-source <i class="fa-brands fa-github-alt"></i></a>
      
          </div>
        </div>
      </div>
      </div>
    </section>

    ` 
  
    const previewPopup = parser.parseFromString(desktopPopup , 'text/html').body.firstChild;
    const portfolio =  document.querySelector('#portfolio'); 
    const previewx = previewPopup.querySelector('.project-x');
    const previewBtn = projectCardDesktop.querySelector('.preview-btn');
    const previewBtn2 = projectCardDesktop.querySelector('.preview-btn2');
    
    previewBtn.addEventListener('click', () => {
        previewPopup.classList.toggle('is-active');
    });

    previewBtn2.addEventListener('click', () => {
        previewPopup.classList.toggle('is-active');
    });

    previewx.addEventListener('click', () => {
        previewPopup.classList.toggle('is-active');
    })


    
    portfolio.append(previewPopup);

    gridProjectsDesktop.append(projectCardDesktop);
 });


// HERE I DISPLAY THE POP UP FOR MOBILE

 projectCardStructure.forEach((projectString, index) => {

   const projectCard = parser.parseFromString(projectString, 'text/html').body.firstChild;

   const Popup = 
   `
   <section class="preview-project">
     <button class="project-x">
       <span class="project-bar one"></span>
       <span class="project-bar two"></span>
     </button>
     
     <div class="preview-project-content">
     
       <h1 class="preview-project-title">${projectsInformation[index].name}</h1>
     
     <ul class="preview-tags tags project-content div-flex">
        ${projectsInformation[index].tags.map((tech) => `<li class="card-tags-ul-li div-flex">${tech}</li>`).join('')}
     </ul>
     
     <div class="main-preview-project div-flex">
     
         <img class="preview-project-img" src="${projectsInformation[index].image}" alt="preview-project">
     
         <div class="preview-card-description div-flex">
     
             <p class="mobile-preview-card-p">${projectsInformation[index].longDescription}</p>
     
         <div class="preview-container-btns">
     
             <a class="btn preview-project-btn preview-see-live" href="${projectsInformation[index].seeLive}" target="_blank" rel="noopener">See-live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
     
             <a class="btn preview-project-btn preview-see-source" href="${projectsInformation[index].seeSource}" target="_blank" rel="no" target="_blank" rel="noopener">See-source <i class="fa-brands fa-github-alt"></i></a>
     
         </div>
       </div>
     </div>
     </div>
   </section>

   ` 
 
   const mobilePopup = parser.parseFromString(Popup , 'text/html').body.firstChild;
   const portfolio =  document.querySelector('#portfolio'); 
   const previewx = mobilePopup.querySelector('.project-x');
   const previewBtn = projectCard.querySelector('.preview-btn');
   
   previewBtn.addEventListener('click', () => {
       mobilePopup.classList.toggle('is-active');
   });

   previewx.addEventListener('click', () => {
       mobilePopup.classList.toggle('is-active');
   })

   portfolio.append(mobilePopup);

   gridProjectsMobile.append(projectCard);
   
})

// HERE I WILL DISPLAY THE POPUP FOR DAYLY SELECTION

