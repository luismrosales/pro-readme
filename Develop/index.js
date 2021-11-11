// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter a title name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project!",
    },

    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions!",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information!",
    },
    {
      type: "list",
      name: "license",
      message: "Enter license!",
      choices: ["mit", "mozilla", "apache"],
    },
    {
      type: "input",
      name: "test",
      message: "Enter test information!",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your Github username!",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email!",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileNamege, data) {
  fs.writeFile(fileNamege, data, (err) => {
    if (err) {
      return err;
    }
    console.log("sucess");
  });
}

// TODO: Create a function to initialize app
function init() {
  questions().then((answers) => {
    console.log(answers);
    var output = generateMarkdown(answers);
    console.log(output);
    writeToFile("../README.md", output);
  });
}

// Function call to initialize app
init();
