// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?",
        name: "title",
        type: "input",
    },
    {
        message: "Description of your project?",
        name: "description",
        type: "input",
    },
    {
        message: "Please inlcude installation instructions",
        name: "installation",
        type: "input",
    },
    {
        message: "Usage information",
        name: "usage",
        type: "input",
    },
    {
        message: "Contribution guidelines",
        name: "contributing",
        type: "input",
    },
    {
        message:  "Test instructions",
        name: "tests",
        type: "input",
    },
];
inquirer.prompt(questions).then(answers => {
    writeToFile("someFileName",answers)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markDown = generateMarkdown(data);
    console.log(markDown)
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
