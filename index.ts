

import inquirer from "inquirer";

const computerGuessNumber : number = Math.random();
const answer = await inquirer.prompt ([{
    name: "PlayerNumber",
    type: "number",
    message: "Please Enter Your Guessing Number",
}]);

if (computerGuessNumber===answer.PlayerNumber) {
    console.log(`Congratulation You Win`);
} else {
    console.log(`Your given number is Wrong, correct number is ${computerGuessNumber}`);
}