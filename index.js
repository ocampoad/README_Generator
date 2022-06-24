// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const moment = require("moment");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
// console.log(moment().format('dddd'))
const questions = [
    {
        message: "What is your full name?",
        name: "userName",
        type: "input",
    },
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
        message: "What is your GitHub username?",
        name: "github",
        type: "input",
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input",
    },
];
inquirer.prompt(questions).then(answers => {
    writeToFile("someFileName", answers)
})
const year = moment().format("YYYY");
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markDown = generateMarkdown(data, year);
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
