#! /usr/bin/env node

// Importing inquirer and chalk Package:
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colourfull Wellcome message:
console.log(chalk.bold.cyanBright("\n\t\t Code-With-Ilyas - Word Counter.\n"));
console.log("=".repeat(60));

// Prompt the user user to enter a Sentance:
let answers = await inquirer.prompt([
    {
        name: "sentance",
        type: "input",
        message: "Enter a Sentance",
    }
]);

// Trimming the Sentance and splitting it into words based on "spaces":
let words = answers.sentance.trim().split(" ");

// Analysis of user input sentance:
console.log("=".repeat(60));
console.log(chalk.bold("- sentences Words:"));
console.log(chalk.bold(`\n - Word Count: ${words.length}`))