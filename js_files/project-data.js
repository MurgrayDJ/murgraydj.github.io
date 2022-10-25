//Can't use servers on github pages
//Also can't read from local files on chrome without a server
//But you can access global variables from other js files
//So the purpose of this file is to store data about the projects

const project1 = {
    name: 'Calcutelator',
    description: 'This is a simple (cute) calculator.',
    imageLink: '../images/project-images/calculator.png',
    previewLink: 'https://murgray.com/calculator/',
    codeLink: 'https://github.com/MurgrayDJ/calculator'
};

const project2 = {
    name: 'Etch-a-Sketch',
    description: 'An Odin project that simulates something between a sketchpad and an Etch-a-Sketch.',
    imageLink: '../images/project-images/etch-a-sketch.png',
    previewLink: 'https://murgray.com/Etch-a-Sketch/',
    codeLink: 'https://github.com/MurgrayDJ/Etch-a-Sketch'
};

const project3 = {
    name: 'Odin Landing Page',
    description: 'A landing page that demonstrates CSS flex-box proficiency.',
    imageLink: '../images/project-images/landing-page.png',
    previewLink: 'https://murgray.com/odin-landing-page/',
    codeLink: 'https://github.com/MurgrayDJ/odin-landing-page/'
};

const project4 = {
    name: 'Rock Paper Scissors',
    description: 'Simulates the rock paper scissors game. Early javascript practice.',
    imageLink: '../images/project-images/rock-paper-scissors.png',
    previewLink: 'https://murgray.com/odin-rock-paper-scissors/',
    codeLink: 'https://github.com/MurgrayDJ/odin-rock-paper-scissors'
}

const project5 = {
    name: 'Odin Recipes',
    description: 'A sample recipe site. Practice with file navigation.',
    imageLink: '../images/project-images/recipe.png',
    previewLink: 'https://murgray.com/odin-recipes/',
    codeLink: 'https://github.com/MurgrayDJ/odin-recipes/'
}

const projectArray = [project1, project2, project3, project4, project5];





const projectGroup = document.getElementById('project-group');
document.addEventListener("DOMContentLoaded", function() {
    createProjects(projectGroup);
});

function createProjects(projectGroup){
    
    for(let i = 0; i < projectArray.length; i++){
        const project = document.createElement('div');
        designProject(project, projectArray[i]);
        projectGroup.appendChild(project);
    }
}

function designProject(project, projectDetails){
    project.classList.add('project');

    const projectImg = document.createElement('div');
    projectImg.classList.add('project-img');
    projectImg.style.backgroundImage = `url(${projectDetails.imageLink})`;

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');

    designProjectInfo(projectInfo, projectDetails);

    project.appendChild(projectImg);
    project.appendChild(projectInfo);
}

function designProjectInfo(projectInfo, projectDetails){
    const description = document.createElement('div');
    description.classList.add('description');

    addDescriptionText(description, projectDetails);

    const btnSection = document.createElement('div');
    btnSection.classList.add('btn-section');

    addProjectBtns(btnSection, projectDetails);

    projectInfo.appendChild(description);
    projectInfo.appendChild(btnSection);
}

function addDescriptionText(description, projectDetails){
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = projectDetails.name;

    const descriptionText = document.createElement('p');
    descriptionText.textContent = projectDetails.description;

    description.appendChild(projectTitle);
    description.appendChild(descriptionText);
}

function addProjectBtns(btnSection, projectDetails){
    const previewBtn = document.createElement('a');
    previewBtn.classList.add('project-btn');
    previewBtn.textContent = 'Preview Project';
    previewBtn.setAttribute('href', projectDetails.previewLink);
    previewBtn.setAttribute('target', '_blank'); //open in new tab

    const codeBtn = document.createElement('a');
    codeBtn.classList.add('project-btn');
    codeBtn.textContent = 'View Code';
    codeBtn.setAttribute('href', projectDetails.codeLink);
    codeBtn.setAttribute('target', '_blank');

    btnSection.appendChild(previewBtn);
    btnSection.appendChild(codeBtn);
}