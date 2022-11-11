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
    // Choices selected
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    // Display choices into console.log
    console.log(`Computer's choice is ${computerSelection}`)
    console.log(`Player's choice is ${playerSelection}`)

    // Tests if Player entered wrong input
    if (playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS') {
        console.error(`Wrong input!!! You entered ${playerSelection}. Check your spellings and try again.`)
    }

    // Determines if there is no winner
    else if (computerSelection == playerSelection) {
        console.log(`Ooops! This is a draw as ${computerSelection} cannot beat ${playerSelection} There is no winner, Try Again!!!`)
    }

    // Determines the Winner
    else if (
        computerSelection == 'ROCK' && playerSelection == "SCISSORS" || computerSelection == 'SCISSORS' && playerSelection == "PAPER" || 
        computerSelection == 'PAPER' && playerSelection == "ROCK") {
        console.info(`%c Ooops! You Lose. ${computerSelection} beats ${playerSelection}.`, 'background: red; font-weight: bold; color:white')
    } 
    else {console.info(`%c Hooray!!! You won. ${playerSelection} beats ${computerSelection}`, 'background: green; font-weight: bold; color:white')}

}

// Game
function game(params) {
    for (let i = 1; i <= 5; i++) {
        playRound()
    }

}

game()