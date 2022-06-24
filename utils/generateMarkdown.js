// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const listofBadges = {
    Apache : "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)", // (https://opensource.org/licenses/Apache-2.0)
    Boost: "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)", //(https://www.boost.org/LICENSE_1_0.txt)
    BSD:"![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)", //(https://opensource.org/licenses/BSD-3-Clause)
  };
  return listofBadges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}\n
  ${renderLicenseBadge(data.license)}\n
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions]($questions)\n
  ##Description\n
  ${data.description}\n
  ##Installation\n
  ${data.installation}\n
  ##Usage\n
  ${data.usage}\n
  ##License\n
  ${data.license}\n
  ##Contributing\n
  ${data.contributing}\n
  ##Tests\n
  ${data.tests}\n
  ##Questions\n
  ${data.questions}\n
`;
}

module.exports = generateMarkdown;
