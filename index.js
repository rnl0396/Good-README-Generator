// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer=require("inquirer");

// // TODO: Create an array of questions for user input
// const questions = [

// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"What is your project title?"
    },{
        type:"input",
        name:"motivation",
        message:"What was your motivation?"
    },
    {
        type:"input",
        name:"build",
        message:"Why did you build this project?"
    },
    {
        type:"input",
        name:"problem",
        message:"What problem does it solve?"
    },
    {
        type:"input",
        name:"learn",
        message:"What did you learn?"
    },
    {
        type:"input",
        name:"steps",
        message:"What are the steps required to install your project?"
    },
    {
        type:"input",
        name:"use",
        message:"Please provide instructions and examples for use of your project."
    },
    {
        type:"input",
        name:"creditors",
        message:"Please list any collaborators, if any, with links to their GitHub profiles."
    },
    {
        type:"input",
        name:"features",
        message:"Please list all your projects features."
    },
    {
        type:"input",
        name:"contribute",
        message:"If you created a project that invites collaborators to contribute, please include guidelines for how to do so here. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer."
    },
    {
        type:"list",
        name:"licenseBadge",
        message:"Please choose which license you would like for your readMe file.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type:"input",
        name:"questions",
        message:"What is your email?"
    }
]).then(result=>{
    
    // console.log(result.firstName,result.location,result.hobby,result.food,result.github,result.linkedin);
    switch (result.licenseBadge) {
        case "GNU AGPLv3":
          badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
          break;
        case "GNU GPLv3":
          badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
          break;
        case "GNU LGPLv3":
          badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
          break;
        case "Mozilla Public License 2.0":
          badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
          break;
        case "Apache License 2.0":
          badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          break;
        case "MIT License":
          badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          break;
        case "Boost Software License 1.0":
          badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
          break;
        case "The Unlicense":
          badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
          break;
    }

    
    const readMe=
    ` 
# ${result.title}

${badge}

## Description
${result.motivation}
${result.build}
${result.problem}
${result.learn}

## Table of Contents
- [Description](#motivation)
- [Installation](#steps)
- [Usage](#use)
- [Credits](#creditors)
- [License](#licenseBadge)
- [Features](#features)
- [Contributing](#contribute)
- [Questions](#questions)

## Installation
${result.steps}

## Usage
${result.use}

## Credits
${result.creditors}

## Licence
${badge}

## Features
${result.features}

## How to Contribute
${result.contribute}

## Questions
If you have any questions, please contact me at ${result.questions}

    `;

    fs.writeFile('projectREADME.md', readMe, function(err){
        if (!err) {
            console.log('README.md file was created')
        }else {console.log('error $[err}')}
        
    });

});




