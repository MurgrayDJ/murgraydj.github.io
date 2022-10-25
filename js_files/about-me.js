const aboutMeText = {
    greeting: `Hi! My name is Murgray.`,

    text: `\nI am an aspiring Full-Stack Engineer. I graduated in June of 2021 from Queens College with a BA in Computer Science.
    
    I am currently studying Ruby, and will eventually learn Ruby on Rails. The languages that I have the most experience with are Java, C++, and the languages that this site is written in: vanilla JavaScript, HTML, and CSS. In the future I'd like to learn PHP and Python.
    
    In my free time, I like to draw, read, play video games, and ride rollercoasters!`
};

const aboutMe = document.getElementById('about-me');
document.addEventListener("DOMContentLoaded", function() {
    createAboutMe();
    
});

function createAboutMe(){
    const greeting = document.getElementById('greeting');
    greeting.innerText = aboutMeText.greeting;

    const aboutText = document.getElementById('about-me-text');
    aboutText.innerText = aboutMeText.text;
}