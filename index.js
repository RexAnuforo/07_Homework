const fs = require('fs');
const axios = require("axios");
const inquirer = require('inquirer');
const util = require('util');

// -- They give us an ARRAY called 'questions' What could we do with this (?) -- //
const questions = [
    
inquirer.prompt([
{
    type: "input",
    message: "What is your github user name?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your github email?",
    name: "email"
  },
  {
    type: "input",
    message: "what is the name of your project",
    name: "projectName"
  },
  {
      type:"input",
      message:"Please write a short desrciption of you project",
      name:"description"
  },
  {
    type: "input",
    message: "What command should installed",
    name: "installation"
  },
  {
      type: "input",
      message: "What kind of license the project should have?",
      name: "license"
  },,
  {
      type: "input",
      message: "What command should be run to run tests?",
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

];

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


// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();


