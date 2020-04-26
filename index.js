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
      type:"input",
      message:"Please write a short desrciption of you project",
      name:"description"
  }
])

];

// -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 
function writeToFile(fileName, data) {
}

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //
function init() {

}

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();



//   .then(function(response) {

//     if (response.confirm === response.password) {
//       console.log("Success!");
//     }
//     else {
//       console.log("You forgot your password already?!");
//     }
//   });