//All content is appended here (this is the "display")
const contentArea = document.getElementById("content-area");

//Helper function
function clearDisplay(){
    const contentArea = document.getElementById("content-area");
    if(contentArea.lastChild){
        contentArea.removeChild(contentArea.lastChild);
    }
}


/***************Resume Section***************/
const resume_btn = document.getElementById("resume-btn");
resume_btn.addEventListener("click", () => {
    const resumePDF = document.getElementById("resume-pdf");
    if(!resumePDF){
        embedResume();
    }
})

function embedResume(){
    clearDisplay();

    const resumePDF = document.createElement("iframe");
    resumePDF.setAttribute("src", "https://drive.google.com/file/d/1eHoTQjB85OfSjEqraGX0BZoBDA4yCAka/preview");
    resumePDF.setAttribute("allow", "autoplay");
    resumePDF.id = "resume-pdf";
    resumePDF.style.height = "100%";
    resumePDF.style.width = "100%";

    contentArea.appendChild(resumePDF);
}
/***************Resume Section***************/



/***************About Me Section***************/
const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
    const aboutMe = document.getElementById("about-me");
    if(!aboutMe){
        displayAboutMe();
    }
})

function displayAboutMe(){
    clearDisplay();

    const aboutMe = document.createElement("Object");
    aboutMe.setAttribute("data", "text_files/aboutme.txt");
    aboutMe.id = "about-me";
    aboutMe.style.height = "300px";
    aboutMe.style.width = "500px";

    contentArea.appendChild(aboutMe);
}
/***************About Me Section***************/




/***************Projects Section***************/
const projectBtn = document.getElementById("project-btn");
projectBtn.addEventListener("click", () => {
    const projectGroup = document.getElementById("project-group");
    if(!projectGroup){
        createProjectGroup();
    }
})

function createProjectGroup(){
    clearDisplay();
    
    const projectGroup = document.createElement("div");
    projectGroup.id = "project-group";

    createProjects(projectGroup);
    contentArea.appendChild(projectGroup);
}

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

/***************Projects Section***************/