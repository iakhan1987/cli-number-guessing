#! /usr/bin/env node

import inquirer from "inquirer";

// 1: computer will generate a random number

// 2: user input for guessing number

// 3: compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
  {
    name: "userguessednumber",
    type: "number",
    message: " Please guess a number 1 to 10 :  ",
  },
]);

if (answers.userguessednumber === randomNumber) {
  console.log("Congratulations! You Guessed Right Number.");
} else {
  console.log("Try Again! You guessed Wrong Number");
}
