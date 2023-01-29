#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
};
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("Welcome to the word count cli tool");
    await sleep();
    rainbowTitle.stop();
}
welcome();
async function askQuestions() {
    var count = 0;
    let questions = await inquirer.prompt([
        {
            name: "ques",
            type: "input",
            message: chalk.rgb(187, 143, 206)("Please enter the paragraph you want to convert: "),
        },
    ]);
    const arr = questions.ques.split(" ");
    console.log(`Words in paragraph: ${arr.length}`);
    for (let i = 0; i < arr.length; i++) {
        count += arr[i].length;
    }
    console.log(count);
}
// askQuestions();
async function startAgain() {
    do {
        await askQuestions();
        var again = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: chalk.rgb(187, 143, 206)("Do yo want to restart? Press Y for yes."),
            },
        ]);
    } while (again.restart == "y" || again.restart == "Y");
}
startAgain();
