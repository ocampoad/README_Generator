// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
  ## Table of Contents
    1. [Description](#Description)
    2. [Installation](#Installation)
    3. [Usage](#Usage)
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
  ## Description\n
  ${data.description}\n
  ## Installation\n
  ${data.installation}\n
  ## Usage\n
  ${data.usage}\n
  ## Contributing\n
  ${data.contributing}\n
  ## Tests\n
  ${data.tests}\n
`;
}

module.exports = generateMarkdown;
