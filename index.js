// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const markdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        default: ['adamalcantara'],
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        default: ['alcantaradevelopment@gmail.com']
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
        //Put the different license types in here
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'none'],
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo',
        default: ['Create a clone of it to work on it.']
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
        default: ['Create a pull request.']
    },
    {
        type: 'input',
        message: 'What is the command to install dependencies?',
        name: 'install',
        default: ['npm i'],
    },
    {
        type: 'input',
        message: 'What is the command to run tests?',
        name: 'test',
        default: ['npm test'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        let answers = markdown(data);
        console.log("This is the template" + answers);
        writeToFile("README.md", answers)
    })
}

// Function call to initialize app
init();
