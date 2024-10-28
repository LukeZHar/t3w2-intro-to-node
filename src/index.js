const inquirer = require('inquirer').default;

console.log("Welcome to the dice rolling game!")


/**
 * Roll a random dice side from a variable sided dice
 *
 * @param {number} [diceSide=6] The total number of sides on the dice
 * @returns {number} The result of the dice roll
 */
function rollDice(diceSide=6) {
    let diceResults = 0;
    diceResults = Math.ceil(Math.random() * diceSide);
    return diceResults;
}

// console.log("The dice roll is: " + rollDice());

const prompt = inquirer.createPromptModule();
prompt([
    {
        type: "number",
        name: "dice_side",
        message: "How many sided dice do you want to roll?",
    }
]).then((answer) => {
    console.log(rollDice(answer.dice_side));
});