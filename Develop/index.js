// TODO: Include packages needed for this application
const inquirer = require('inquirer');
var fs = require('fs');
const questions = require("./utils/questions")
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    //write a file
    //fs library
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            var newStuff = generateMarkdown(answers)
            console.log(newStuff)
            writeToFile(`${answers.Title}.md`,newStuff)
        });
    //ask the users those questions here using inquirer
    //
}

// Function call to initialize app
init();
