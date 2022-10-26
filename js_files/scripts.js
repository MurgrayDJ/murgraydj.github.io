//Helper function
function navigator(filename){
    if(document.URL.includes('index.html') && filename !== 'index.html'){
        window.location.href = `./html_files/${filename}`;
    }
    else if(!document.URL.includes('index.html') && filename === 'index.html'){
        window.location.href = `../${filename}`;
    }
    else{
        window.location.href = `./${filename}`;
    }
    
}

const siteIcon = document.getElementById('site-icon');
siteIcon.addEventListener("click", () => {
    navigator('index.html');
})

/***************About Me Section***************/
const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
    navigator('index.html');
})
/***************About Me Section***************/

/***************Resume Section***************/
const resumeBtn = document.getElementById("resume-btn");
resumeBtn.addEventListener("click", () => {
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