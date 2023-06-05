// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    

    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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
* GitHub: ${data.github}(https://gitbub.com/${data.github})
* Email: ${data.email}
## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;