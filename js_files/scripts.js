//Helper function
function navigator(filename){
    if(document.URL.includes('index.html') && filename !== 'index.html'){
        document.location.href = `html_files/${filename}`;
    }
    else if(!document.URL.includes('index.html') && filename === 'index.html'){
        document.location.href = `../${filename}`;
    }
    else{
        document.location.href = `${filename}`;
    }
    
}

/***************About Me Section***************/
const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
    navigator('index.html');
})
/***************About Me Section***************/

/***************Resume Section***************/
const resume_btn = document.getElementById("resume-btn");
resume_btn.addEventListener("click", () => {
    navigator('resume.html');
})
/***************Resume Section***************/


/***************Projects Section***************/
const projectBtn = document.getElementById("project-btn");
projectBtn.addEventListener("click", () => {
    navigator('projects.html');
})
/***************Projects Section***************/

/***************Contact Me Section***************/
const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
    navigator('contact.html');
})
/***************Contact Me Section***************/