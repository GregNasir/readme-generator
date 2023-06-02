// TODO: Include packages needed for this application
const fs = require('fs');
const { prompt } = require('inquirer');


// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your Project",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project and how its functionality.",
    },
    {
        type: "input",
        name: "Table of contents",
        message: "This is the table of contents.",
    },
    {
        type: "input",
        name: "Installation",
        message: "Describe the installation process.",
    },
    {
        type: "input",
        name: "usage",
        message: "What languages or technologies were used and the purpose of this project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD3", "none"],
    },
    {
        type: "input",
        name: "Contributing",
        message: "Who are the contributors to this project (GitHub usernames)",
        default: "",
    },
    {
        type: "input",
        name: "Tests",
        message: "what tests were ran during development",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "name",
        message: "Your full name",
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email.",
    },
];

const generateHtml = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <header style='color:white; background-color:${data.color}'>
            <h1>${data.name}</h1>
        
    </body>
    </html>`
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFilesync(path.join(process.cwd().fileName).data);
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions)
    .then((answers) => {
    const document = generateHtml(answers);
    fs.writeFile('index.html', document, (err) =>
        err ? console.log(err) : console.log('Success!'))
    });
}

// Function call to initialize app
init();