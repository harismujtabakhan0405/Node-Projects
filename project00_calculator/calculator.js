#!/usr/bin/env node
import inquirer from "inquirer";
import { addition, subtraction, multiplication, division, modulus } from "./main.js";
import chalk from "chalk";
import figlet from "figlet";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
figlet("CLI CALCULATOR ", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(chalk.green(data));
});
async function welcome() {
    // let rainbow = chalkAnimation.rainbow("let's Start Calculator");//start
    await sleep();
    // rainbow.stop();
    console.log(` 
  |   _________________ |
  | |HARIS MUJTABA KHAN | 
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|`);
    startloop();
}
;
async function askQuestion() {
    let answers = await inquirer.prompt([
        {
            message: chalk.blueBright("enter your first number"),
            type: chalk.yellow("number"),
            name: "num1",
        },
        {
            message: chalk.blueBright("enter your second number"),
            type: chalk.yellow("number"),
            name: "num2",
        },
        {
            message: chalk.red("select your operator you want"),
            type: "list",
            choices: ["addition", "subtraction", "multiplication", "division", "modulus"],
            name: "Operators",
        }
    ]);
    if (answers.Operators == "addition") {
        let result1 = addition(answers.num1, answers.num2);
        console.log(`result ${answers.num1} + ${answers.num2} = ${result1}`);
    }
    else if (answers.Operators === "subtraction") {
        let result2 = subtraction(answers.num1, answers.num2);
        console.log(`result ${answers.num1} - ${answers.num2} = ${result2}`);
    }
    else if (answers.Operators === "division") {
        let result3 = division(answers.num1, answers.num2);
        console.log(`result ${answers.num1} / ${answers.num2} = ${result3}`);
    }
    else if (answers.Operators === "multiplication") {
        let result4 = multiplication(answers.num1, answers.num2);
        console.log(`result ${answers.num1} * ${answers.num2} = ${result4}`);
    }
    else if (answers.Operators === "modulus") {
        let result5 = modulus(answers.num1, answers.num2);
        console.log(`result ${answers.num1} % ${answers.num2} = ${result5}`);
    }
    ;
}
async function startloop() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ["YES", "NO"],
                message: "Do you want to continue:"
            }
        ]);
    } while (again.restart == "YES");
}
welcome();
