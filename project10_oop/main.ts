#!/usr/bin/env node

import inquirer from "inquirer";
import PromptSync from "prompt-sync";
import chalk from "chalk";
import { Person,Student } from "./app.js";


console.log(chalk.bold.blue(`\n<<<==========>>> ${chalk.redBright.bold.underline(" THIS PROJECT IS MADE BY HARIS MUJTABA KHAN")} <<<==========>>>\n`));


console.log(chalk.bold.blue(`   <<<================================>>>`));
console.log(chalk.bold.blue(`<<<==========>>>  ${chalk.redBright.bold.underline('GUESSING PERSONALITY')}  <<<==========>>>`));
console.log(chalk.bold.blue(`   <<<================================>>>\n`));
const prompt = PromptSync();



    
    let Input = await inquirer.prompt({
        type:"input",
        name: "input",
        message: chalk.gray("Type (1) if you like to talk to others and Type (2) if you rather keep to yourself: ")
    });
    let myPerson = new Person();
    myPerson.askQuestion(parseInt(Input.input));
    console.log(chalk.red(`You are ${myPerson.getPersonality()}!!!!`));
    const person = new Person();
   
    const ans =  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'Name',
        message: 'What is your name?',
      },
]);
    const myStudent = new Student(ans.name);
    myStudent.Name = ans.Name;
    console.log(`Student Name: ${myStudent.Name}`);
    console.log(`Personality: ${myStudent.getPersonality()}`);

    console.log(chalk.whiteBright(`\n********************************************************`))