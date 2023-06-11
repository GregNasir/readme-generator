// Required packages for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your Project:",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project and how its functionality:",
    },
    
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process:",
    },
    {
        type: "input",
        name: "usage",
        message: "What languages or technologies were used and the purpose of this project:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project:",
        choices: ["MIT", "APACHE2.0", "GPLv3", "none"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors to this project (GitHub usernames):",

    },
    {
        type: "input",
        name: "tests",
        message: "what tests were ran during development:",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "name",
        message: "Your full name:",
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email:",
    },
];

function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFileSync(filePath, data);
    }

// function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Professional README');
        writeToFile('./dist/README.md', generateMarkdown({...answers}));
    });
}

// initializing app
init();