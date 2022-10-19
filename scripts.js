const resume_btn = document.getElementById("resume-btn");
resume_btn.addEventListener("click", () => {
    const resume_pdf = document.getElementById("resume-pdf");
    if(!resume_pdf){
        embedResume();
    }
})

const contentArea = document.getElementById("content-area");
function embedResume(){
    const resumePDF = document.createElement("iframe");
    let html = '<body></body>';
    resumePDF.setAttribute("src", "https://drive.google.com/file/d/1eHoTQjB85OfSjEqraGX0BZoBDA4yCAka/preview");
    resumePDF.setAttribute("allow", "autoplay");
    resumePDF.id = "resume-pdf";
    resumePDF.style.height = "100%";
    resumePDF.style.width = "100%";

    contentArea.appendChild(resumePDF);
}