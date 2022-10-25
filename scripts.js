//All content is appended here (this is the "display")
const contentArea = document.getElementById("content-area");

//Helper function
function clearDisplay(){
    const contentArea = document.getElementById("content-area");
    if(contentArea.lastChild){
        contentArea.removeChild(contentArea.lastChild);
    }
}

/***************About Me Section***************/
const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
    document.location.href = 'index.html';
})
/***************About Me Section***************/

/***************Resume Section***************/
const resume_btn = document.getElementById("resume-btn");
resume_btn.addEventListener("click", () => {
    document.location.href = 'resume.html';
})
/***************Resume Section***************/


/***************Projects Section***************/
const projectBtn = document.getElementById("project-btn");
projectBtn.addEventListener("click", () => {
    document.location.href = 'projects.html';
})
/***************Projects Section***************/

/***************About Me Section***************/
const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
    document.location.href = 'contact.html';
})
/***************About Me Section***************/