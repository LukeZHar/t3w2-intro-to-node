// const inquirer = require('inquirer').default;
const promptSync = require('prompt-sync')();


console.log("Welcome to the dice rolling game!")


/**
 * Roll a random dice side from a variable sided dice
 *
 * @param {number} [diceSide=6] The total number of sides on the dice
 * @returns {number} The result of the dice roll
 */
function rollDice(diceSide=6) {
    if(diceSide <= 0) {
        throw new Error("Please enter a number greater than 0");
    }
    let diceResults = 0;
    diceResults = Math.ceil(Math.random() * diceSide);
    return diceResults;
}

// console.log("The dice roll is: " + rollDice());

function getDiceSide(){
    do {
        const diceSide = promptSync("How many sided dice do you want to roll? ");
        try {
            const parsedDiceSide = parseInt(diceSide);
            if (isNaN(parsedDiceSide)) {
                throw new Error("Please enter a number");
            }
            const diceResults = rollDice(parsedDiceSide);
            console.log(`You rolled a ${diceResults}.`);
        } catch (error) {
            console.error("You got an error!");
            console.log(error);
        } finally {
            console.log("Thanks for playing!");
        }
    } while (promptSync("Would you like to roll again? (y/n) ").toLocaleLowerCase() === "y");

}
getDiceSide();

// const prompt = inquirer.createPromptModule();
// prompt([
//     {
//         type: "number",
//         name: "dice_side",
//         message: "How many sided dice do you want to roll?",
//     }
// ]).then((answer) => {
//     console.log(rollDice(answer.dice_side));
// });