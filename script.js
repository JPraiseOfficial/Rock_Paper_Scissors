// Get Computer Choice
function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS']
    // Get Random number
    let randomindex = Math.floor(Math.random() * 3)
    // Get Random item which is the computer choice
    computerChoice = choices[randomindex]
    return computerChoice
};

// Get Player's choice
function getPlayerChoice() {
    let playerChoice = prompt('Rock, Paper, Scissors', 'Rock');
    return playerChoice.toUpperCase()
};

// PlayRound
function playRound(computerSelection, playerSelection) {
    // Tests if Player entered wrong input
    if (playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS') {
        console.error(`Wrong input!!! You entered ${playerSelection}. Check your spellings and try again.`)
    }

    // Determines if there is no winner
    else if (computerSelection == playerSelection) {
        console.log(`Ooops! This is a draw as ${computerSelection} cannot beat ${playerSelection} There is no winner, Try Again!!!`)
    }

    // Determines Winner between ROCK and SCISSORS
    else if (
        computerSelection == 'ROCK' && playerSelection == "SCISSORS" || computerSelection == 'SCISSORS' && playerSelection == "PAPER" || 
        computerSelection == 'PAPER' && playerSelection == "ROCK") {
        console.log(`Ooops! You Lose. ${computerSelection} beats ${playerSelection}.`)
    } 
    else {console.log(`Hooray!!! You won. ${playerSelection} beats ${computerSelection}`)}

}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

console.log(`Computer's choice is ${computerSelection}`)
console.log(`Player's choice is ${playerSelection}`)

playRound(computerSelection, playerSelection)