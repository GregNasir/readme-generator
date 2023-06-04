// TODO: Include packages needed for this application
const fs = require('fs');
const { prompt } = require('inquirer');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const  = (data) => {
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
            <h1># ${data.title}</h1>
            <p>by ${data.name}</p>
        </header>
        
        <section>
            <h3># Table of Contents<h3>
            <p>* description<p>
            <p>* installation<p>
            <p>* Usage<p>
            <p>* Contributing<p>
            <p>* Tests<p>
            <p>* Questions<p>
        </section>

        <section>
            <h2># Description<h2>
            <p>${data.description}<p>
        </section>

        <section>
            <h2># Installation<h2>
            <p>${data.Installation}<p>
        </section>

        <section>
            <h2># Usage<h2>
            <p>${data.Usage}<p>
        </section>

        <section>
            <h2># Contributing<h2>
            <p>${data.Contributing}<p>
        </section>

        <section>
            <h2># Tests<h2>
            <p>${data.Tests}<p>
        </section>

        <section>
            <h2># License<h2>
            <p>${data.license}<p>
        </section>

        <section>
            <h2># Questions<h2>
            <p>${data.description}<p>
        </section>
        
    </body>
    </html>`
}


// TODO: Create an array of questions for user input

prompt([
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
    // {
    //     type: "input",
    //     name: "Table of Contents",
    //     message: "This is the table of contents.",
    // },
    {
        type: "input",
        name: "installation",
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
    // {
    //     type: "input",
    //     name: "Contributing",
    //     message: "Who are the contributors to this project (GitHub usernames)",
    //     default: "",
    // },
    // {
    //     type: "input",
    //     name: "Tests",
    //     message: "what tests were ran during development",
    // },
    // {
    //     type: "input",
    //     name: "github",
    //     message: "What is your GitHub username?",
    // },
    {
        type: "input",
        name: "name",
        message: "Your full name",
    },
    // {
    //     type: "input",
    //     name: "email",
    //     message: "Provide your email.",
    // },
]).then((answers) => {
    const document = generateMarkdown({ ...answers});
    fs.writeFile('README.md', document, (err) =>
        err ? console.log(err) : console.log('Success!'))
    });;





// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFilesync(path.join(process.cwd().fileName).data);

// }

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();