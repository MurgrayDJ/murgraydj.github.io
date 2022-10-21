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
    for(let i=0; i<6; i++){
        const project = document.createElement('div');
        designProject(project);
        projectGroup.appendChild(project);
    }
}

function designProject(project){
    project.classList.add('project');

    const projectImg = document.createElement('div');
    projectImg.classList.add('project-img');

    const description = document.createElement('div');
    description.classList.add('description');

    const previewBtn = document.createElement('button');
    previewBtn.classList.add('projectBtn');
    previewBtn.textContent = 'Preview Project';

    const codeBtn = document.createElement('button');
    codeBtn.classList.add('projectBtn');
    codeBtn.textContent = 'View Code';

    description.appendChild(previewBtn);
    description.appendChild(codeBtn);

    project.appendChild(projectImg);
    project.appendChild(description);
}

/***************Projects Section***************/