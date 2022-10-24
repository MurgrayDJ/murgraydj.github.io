//Can't use servers on github pages
//Also can't read from local files on chrome without a server
//But you can access global variables from other js files
//So the purpose of this file is to store data about the projects

const project1 = {
    name: 'Calcutelator',
    description: 'This is a simple (cute) calculator.',
    previewLink: 'https://murgray.com/calculator/',
    codeLink: 'https://github.com/MurgrayDJ/calculator'
};

const project2 = {
    name: 'Etch-a-Sketch',
    description: 'An Odin project that simulates something between a sketchpad and an Etch-a-Sketch.',
    previewLink: 'https://murgray.com/Etch-a-Sketch/',
    codeLink: 'https://github.com/MurgrayDJ/Etch-a-Sketch'
};

const project3 = {
    name: 'Odin Landing Page',
    description: 'The Odin Project Landing Page attempt',
    previewLink: 'https://murgray.com/odin-landing-page/',
    codeLink: 'https://github.com/MurgrayDJ/odin-landing-page/'
};

const project4 = {
    name: 'Rock Paper Scissors',
    description: 'Simulates the rock paper scissors game.',
    previewLink: 'https://murgray.com/odin-rock-paper-scissors/',
    codeLink: 'https://github.com/MurgrayDJ/odin-rock-paper-scissors'
}

const project5 = {
    name: 'Odin Recipes',
    description: 'A sample recipe site.',
    previewLink: 'https://murgray.com/odin-recipes/',
    codeLink: 'https://github.com/MurgrayDJ/odin-recipes/'
}

const projectArray = [project1, project2, project3, project4, project5];