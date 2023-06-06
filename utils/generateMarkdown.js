// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, an empty string is returned
function renderLicenseBadge(license) {
  console.log(license);
  let choice = license[0].trim().toLowerCase();

  switch (choice) {
    
    case 'mit':
      return `![Github MIT](https://img.shields.io/badge/license-${license}-blue.svg)`;
      
    case 'apache2.0':
      return `![Github Apache 2.0](https://img.shields.io/badge/license-${license}-blue.svg)`;
      
    case 'gplv3':
      return `![Github GPL v3](https://img.shields.io/badge/license-${license}-blue.svg)`;
    default: 
      return "";
  }
}



// function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    

    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, an empty string is returned
function renderLicenseSection(license) {
  console.log(license);
  let choice = license[0].trim().toLowerCase();

  switch (choice) {
    case 'mit':
      return `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)`;

    case 'apache2.0':
      return `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).`;

    case 'gplv3':
      return `
## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).`;
    

    default:
      return '';
  }
}

// Generatea markdown for README
function generateMarkdown(data) {
  // const { title, name, license, description, installation, usage, contributing, tests, github, email } = data;

  return `# ${data.title}
by ${data.name} </br>
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Repository and demo](#repository-and-demo)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

## Description
${data.description}
## Repository and demo
* [README.md repository](https://github.com/GregNasir/readme-generator)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Credits
* Columbia Engineering Bootcamp resources
* [w3schools website](https://w3schools.com/)
* [shield.io](https://shields.io/)
## Questions
* GitHub: (https://github.com/${data.github})
* Email: ${data.email}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;


