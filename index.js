// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const fetch = require("node-fetch");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?",
        name: "title",
        type: "input",
    },
    {
        message: "Please give a description of your project",
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
        message: "License stuff",
        name: "license",
        type: "list",
        choices: ["Apache", "Boost","BSD"]
    },
    {
        message: "Contribution guidelines",
        name: "contributing",
        type: "input",
    },
    {
        message: "Test instructions",
        name: "tests",
        type: "input",
    },
    {
        message: "Questions?",
        name: "questions",
        type: "input",
    },
];
inquirer.prompt(questions).then(answers => {
    writeToFile("someFileName", answers)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markDown = generateMarkdown(data);
    // console.log(markDown)
    fetch('https://shields.io/category/license')
        // .then(response => response.text())
        // .then(data => console.log(data));


    fs.writeFile(`${data.title}.md`, JSON.parse(JSON.stringify(markDown)), err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('success');
      })
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
