// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What type of license should your project have?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'What does the user need ot know about contributing to the repo?',
        name: 'contributing',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then()
}

// Function call to initialize app
init();
