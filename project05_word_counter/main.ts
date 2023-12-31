#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';

let sleep = () => new Promise((r) => setTimeout(r, 2000))


console.log(chalk.bold.blue(`\n<<<==========>>> ${chalk.redBright.bold.underline(" THIS PROJECT IS MADE BY HARIS MUJTABA KHAN")} <<<==========>>>\n`));


console.log(chalk.bold.blue(`   <<<================================>>>`));
console.log(chalk.bold.blue(`<<<==========>>>  ${chalk.redBright.bold.underline('WORDS COUNTER')}  <<<==========>>>`));
console.log(chalk.bold.blue(`   <<<================================>>>\n`));


async function ParaInput() {
    const input = await inquirer.prompt([{
        name: 'input',
        message: chalk.rgb(249, 140, 255)('Enter Paragraph'),
    }])
    let value: string = await input['input']
    return value
}

function WordsAndLettersCounter(para: string) {
    let words = para.split(' ').filter((val)=>val !== '')
    let letters = words.join('')
    return { words: words.length, letters: letters.length }
}




while (true) {
    const para = await ParaInput()
    const { words, letters } = WordsAndLettersCounter(para)

    const spinner = createSpinner('Counting').start()
    await sleep()
    spinner.success()

    console.log(chalk.bgWhiteBright.blackBright.bold(`   Total Words : ${words}  `))
    console.log(chalk.bgWhiteBright.blackBright.bold(` Total Letters : ${letters}  `))

    const input = await inquirer.prompt([
        {
            name: chalk.rgb(255, 255, 160)(`Do You Want To Exit?`),
            type: "confirm",
        }
    ])
    let value: boolean = await input['\x1B[38;2;255;255;160mDo You Want To Exit?\x1B[39m']
    if (value) {
        break;
    }
    console.log(chalk.whiteBright('\n----------------------------------------------------------------\n'))
}