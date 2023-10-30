#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
figlet("GUESSING GAME", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(chalk.green(data));
});
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let tiTle = chalkAnimation.rainbow("Let's Start The Guessing Game Made By Haris Mujtaba Khan");
    await sleep();
    tiTle.stop();
    async function howToGuide() {
        console.log(`
      ${chalk.black.bgYellow("HOW TO PLAY GAME?")}
      ${chalk.white("1. Insert Your Number B/W 1 To 10")}
      ${chalk.white("2. Check System Generated Number!")}

    `);
    }
    howToGuide();
    async function startLoop() {
        let again;
        do {
            await guessNumber();
            again = await inquirer.prompt([
                {
                    type: "list",
                    name: "restart",
                    choices: ["YES", "NO"],
                    message: "Do you want PLAY AGAIN"
                }
            ]);
        } while (again.restart === "YES");
    }
    startLoop();
    async function guessNumber() {
        let systemGeneratedNumber = Math.floor(Math.random() * 10);
        let hint;
        if (systemGeneratedNumber % 2 == 0) {
            hint = chalk.blue("(Hint:NUMBER IS EVEN)");
        }
        else {
            hint = chalk.blue("(Hint:NUMBER IS ODD)");
        }
        let answers = await inquirer.prompt([
            {
                type: "number",
                name: "userGuessNumber",
                message: chalk.bold.green `Write Your Guess Number Between 1 To 10!!! ${hint}`
            }
        ]);
        let score = 0;
        let { userGuessNumber } = answers;
        console.log(chalk.green("USER GUESS NUMBER => "), chalk.blueBright.underline(userGuessNumber), chalk.green("SYETEM GENERATED NUMBER => ", chalk.blueBright.underline(systemGeneratedNumber)));
        if (userGuessNumber === systemGeneratedNumber) {
            score++;
            console.log(`yaaahhh your guess number is correct and your score is ${score}`);
        }
        else {
            console.log(`
    ${chalk.green("TRY ANGIN!!! YOUR SCORE IS")} ${score}`);
        }
    }
}
welcome();
