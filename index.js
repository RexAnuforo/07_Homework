const inquirer = require('inquirer');
const axios = require("axios");
const util = require('util');
const fs = require('fs');

// -- They give us an ARRAY called 'questions' What could we do with this (?) -- //
function listQuestions(){
  return inquirer.prompt ([
      {
          type: "input",
          message: "What is your Github user name?",
          name: "username"
      },
      {
          type: "input",
          message: "what is the name of your project?",
          name: "projectName"
      },
      {
          type:"input",
          message:"Write a short desrciption of your project",
          name:"description"
      },
      {
          type: "input",
          message: "What kind of license will the project have?",
          name: "license"
      },
      {
          type: "input",
          message: "What command should be ran for installs?",
          name: "installation"
      },
      {
          type: "input",
          message: "What command should be ran to run any tests?",
          name: "tests"
      },
      {
          type: "input",
          message: "What does the user need to know about using the repo?",
          name: "usage"
      },
      {
          type: "input",
          message: "What does the user need to know about contributing to the repo?",
          name: "contributing"
      },
  
  ])
  };

var apiName = (data) => {
  var queryUrl = `https://api.github.com/users/${data.username}`;
  return axios.get(queryUrl)
}

// -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 
function writeToFile(fileName, data) {
    
}

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //

   function init() {
    console.log("Creating the README...")
    try {
       
      const data = await listQuestions();
  
      const repo =  await apiName(data);
  
      const markdown =  createMarkdown(data,repo.data.avatar_url,repo.data.html_url);
  
      await writeFileAsync("README.md", markdown);
  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
  }

  const createMarkdown = (data) => {
    console.log(data)
    return `
# ${data.projectName}
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
## Description
  ${data.description}
 ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)
  
## Installation
Run these commands to install a dependency:
    ${data.installation}
## Usage
${data.usage}
## License
This project is licensed under the ${data.usage} license.
## Contributing
${data.contributing}
## Tests
Run these commands to run any tests:
    ${data.tests}
    `
  
};
// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();


