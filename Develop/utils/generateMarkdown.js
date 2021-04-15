// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license == "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } 
  if (data.license == "Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (data.license == "GPLv2"){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  if (data.license == "GPLv3"){
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  }
  if (data.license == "BSD 3-clause"){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
}

console.log(renderLicenseBadge.response);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name};
  ${renderLicenseBadge.response}
  ## ${'Description \n' +data.description}
  ## Table of Contents \n
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Contact](#contact)

  # Installation
  To run the installation, use the following code:
  ${data.install}

  # Usage
  ${data.repo}

  # License
  ${data.license}
  
  # Contributing
  ${data.contributing}

  # Test
  ${data.test}

  # Contact
  If you have questions about anything relating to the code, please contact me at the following: \n
  
  GitHub: \n
  ${data.username} \n
  Email \n
  ${data.email} \n
  
`;
}

module.exports = generateMarkdown;
