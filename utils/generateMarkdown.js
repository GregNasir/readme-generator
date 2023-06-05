// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, an empty string is returned
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    

    default:
      return '';
  }
}

// function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://shields.io/licenses/MIT';
    case 'Apache 2.0':
      return 'https://shields.io/licenses/Apache-2.0';
    case 'GPLv3':
      return 'https://shields.io/licenses/GPLv3';


    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, an empty string is returned
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `
## License

This project is licensed under the [MIT License](https://shields.io/licenses/MIT).`;
    case 'Apache 2.0':
      return `
## License

This project is licensed under the [Apache License 2.0](https://shields.io/licenses/Apache-2.0).`;
    case 'GPLv3':
      return `
## License

This project is licensed under the [GNU General Public License v3.0](https://sheilds.io/licenses/gpl-3.0).`;
    

    default:
      return '';
  }
}

// Generatea markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
${renderLicenseLink(data.license)} 
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
* GitHub: ${data.github}(https://github.com/${data.github})
* Email: ${data.email}
## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;