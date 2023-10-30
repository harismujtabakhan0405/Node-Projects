#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
console.log(chalk.bold.blue(`\n<<<==========>>> ${chalk.redBright.bold.underline(" THIS PROJECT IS MADE BY HARIS MUJTABA KHAN")} <<<==========>>>\n`));
console.log(chalk.bold.blue(`   <<<================================>>>`));
console.log(chalk.bold.blue(`<<<==========>>>  ${chalk.redBright.bold.underline('TIMER')}  <<<==========>>>`));
console.log(chalk.bold.blue(`   <<<================================>>>\n`));
let sleep = () => new Promise((r) => setTimeout(r, 2000));
async function SetDateAndTime(name, regex) {
    let isDate = name === 'Date' ? true : false;
    let date_time;
    while (true) {
        const input = await inquirer.prompt([{
                name: 'date_and_time',
                message: chalk.whiteBright(`Enter ${name} : `),
                default: isDate ? '1/25/2024' : '12:00 AM',
            }]);
        date_time = await input['date_and_time'];
        if (regex.test(date_time)) {
            break;
        }
        else {
            console.log(chalk.redBright(`Enter Correct Pattern Of ${name}`));
        }
    }
    return date_time;
}
function StartTimer(complete_date) {
    console.log(chalk.bgRgb(128, 94, 1).whiteBright(` Days | Hours | Minutes | Seconds `));
    const timer = setInterval(() => {
        let newDate = new Date();
        let myDate = new Date(complete_date);
        let time_milli_seconds = myDate - newDate;
        if (time_milli_seconds < 0) {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            console.log(chalk.redBright('Expired'));
            console.log(chalk.whiteBright(`=======================================================\n`));
            clearInterval(timer);
            return;
        }
        let sec_con = 1000;
        let min_con = sec_con * 60;
        let hour_con = min_con * 60;
        let days_con = hour_con * 24;
        let days = Math.floor(time_milli_seconds / days_con);
        let hours = Math.floor((time_milli_seconds % days_con) / hour_con);
        let mins = Math.floor((time_milli_seconds % hour_con) / min_con);
        let secs = Math.floor((time_milli_seconds % min_con) / sec_con);
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(`  ${days > 9 ? String(days) : `0${String(days)}`}  :   ${hours > 9 ? String(hours) : `0${String(hours)}`}  :   ${mins > 9 ? String(mins) : `0${String(mins)}`}    :   ${secs > 9 ? String(secs) : `0${String(secs)}`}`);
    }, 1000);
}
console.log(chalk.bgRgb(79, 1, 61).whiteBright(`  Instructions:  `));
console.log(chalk.whiteBright(`--------------------------------------------------------------------------`));
console.log(`${chalk.red('=>')} Date Format: ${chalk.bgRgb(100, 100, 100).black(' MM/DD/YYYY [Year Limit 2023-2025] ')} Example: ${chalk.bgRgb(56, 56, 56).whiteBright(' 10/30/2023 ')}.`);
console.log(chalk.whiteBright(`--------------------------------------------------------------------------`));
console.log(`${chalk.red('=>')} Time Format: ${chalk.bgRgb(100, 100, 100).black(' Hours[0-12]:Minutes[0-59] PM/AM ')} Example: ${chalk.bgRgb(56, 56, 56).whiteBright(' 11:30 AM ')}.`);
console.log(chalk.whiteBright(`--------------------------------------------------------------------------`));
console.log(`${chalk.red('=>')} Timer Will Be Expired If Time Is Ended.`);
console.log(chalk.whiteBright(`--------------------------------------------------------------------------`));
console.log(`${chalk.red('=>')} Press ${chalk.bgRgb(100, 100, 100).black(' Ctrl + C ')} To Stop Timer.`);
console.log(chalk.whiteBright(`--------------------------------------------------------------------------\n`));
let dateRegex = /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/](202[3-5])$/;
let timeRegx = /^(0?[0-9]|[1][012]):(0?[0-9]|[1-5][0-9]) ((a|p)m|(A|P)M)$/;
let date = await SetDateAndTime("Date", dateRegex);
let time = await SetDateAndTime("Time", timeRegx);
let complete_date = `${date} ${time}`;
let spinner = createSpinner('Starting Timer').start();
await sleep();
spinner.success({ text: "Timer Started Successfully" });
console.log(chalk.whiteBright(`\n********************************************************`));
StartTimer(complete_date);
