const resume_btn = document.getElementById("resume-btn");
resume_btn.addEventListener("click", () => {
    const resumePDF = document.getElementById("resume-pdf");
    if(!resumePDF){
        embedResume();
    }
})

const contentArea = document.getElementById("content-area");
function embedResume(){
    clearDisplay();

    const resumePDF = document.createElement("iframe");
    let html = '<body></body>';
    resumePDF.setAttribute("src", "https://drive.google.com/file/d/1eHoTQjB85OfSjEqraGX0BZoBDA4yCAka/preview");
    resumePDF.setAttribute("allow", "autoplay");
    resumePDF.id = "resume-pdf";
    resumePDF.style.height = "100%";
    resumePDF.style.width = "100%";

    contentArea.appendChild(resumePDF);
}

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

function clearDisplay(){
    const contentArea = document.getElementById("content-area");
    if(contentArea.lastChild){
        contentArea.removeChild(contentArea.lastChild);
    }
}