#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";

figlet("ATM MACHINE", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.green(data));
  });


const sleep = () =>{
    return new Promise ((res)=>{
        setTimeout (res,2000)
    });

}

async function welcome () {
  
    let tiTle  = chalkAnimation.rainbow("Welcome to ATM Machine! (A CLI based ATM simulation developed by Haris Mujtaba Khan)")
    await sleep();
    tiTle.stop();

    async function howToGuide() {
        console.log(`
          ${chalk.black.bgYellow("HOW TO USE?")}
          ${chalk.white("1. Insert User ID")}
          ${chalk.white("2. Insert User Pin")}
          ${chalk.white("3. Select Option")}


          
          ${chalk.black.bgYellow("TEST DATA")}
          ${chalk.white("userID")}
          ${chalk.white("userPin")}
      
        `);
      }
      howToGuide();

      interface ansType {
        userId : string,
        userPin : number,
        accountType:string,
        Transactiontype:string,
        amount:number
    }
    
    const answers:ansType = await inquirer.prompt([
        {
            type:"input",
            name:"userId",
            message:"Enter your ID:"
        },
        {
            type:"number",
            name:"userPin",
            message:"Enter your PIN:"
        },
        {
            type:"list",
            name:"accountType",
            choices:["Current","Saving"],
            message:"Select your account type"
    
        },
        {
            type:"list",
            name:"Transationtype",
            choices:["Fast Cash","Withdraw"],
            message:"Select your transaction",
            when(answers){
                return answers.accountType
            },
        },
        {
            type:"list",
            name:"amount",
            choices:[1000,5000,10000,20000,25000],
            message:"Select your amount",
            when(answers){
                return answers.Transationtype == "Fast Cash"
            },
        },
        {
            type:"number",
            name:"amount",
            message:"Enter your amount",
            when(answers){
                return answers.Transationtype == "Withdraw"
            },
        },
    
    
    
    
    ])
    if(answers.userId && answers.userPin) { 
        const balance = Math.floor(Math.random()*100000)
        console.log(balance)
        const EnteredAmount = answers.amount;
        if (balance >= EnteredAmount) {
          const remaining =  balance - EnteredAmount
          console.log("Your remaining balance is ",remaining)
        }else{
            console.log("Insufficient balance")
        }
    
    }
}
welcome()





