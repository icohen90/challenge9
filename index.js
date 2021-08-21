// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
       type: "input",
       name: "title",
       message: "What is the project title?",
       validate: nameInput => {
           if(nameInput){
               return true;
           }else{
               console.log('Please enter your name!');
               return false;
           }
       }
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description about your project.",
        validate: description => {
            if(description){
                return true;
            }else{
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Explain to the user what commands they should run to install dependencies",
    },
    {
        type: "input",
        name: "Github",
        message: "What's your github username?",
        validate: githubName => {
            if(githubName){
                return true;
            }else{
                console.log('Please enter your github username!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your e-mail address."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license to use for your application.",
        choices: ["GNU GPLv3", "MIT", "Apache", "ISC"]
    },
    {
        type: "input",
        name: "tests",
        message: "What command should the user run to run tests?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log("Created readme successfully");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("ExampleREADME.md", generateMarkdown(answers));

    });
}

// Function call to initialize app
init();
