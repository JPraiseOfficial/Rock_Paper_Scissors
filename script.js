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
        let message = `Wrong input!!! You entered ${playerSelection}. Check your spellings and try again.`
        console.error(message)
        return message
    }

    // Determines if there is no winner
    else if (computerSelection == playerSelection) {
        let message = `%c Ooops! This is a draw as ${computerSelection} cannot beat ${playerSelection} There is no winner, Try Again!!!`
        console.log(message, 'background:yellow; font-weight:bold; color:black')
        return message
    }

    // Determines the Winner
    else if (
        computerSelection == 'ROCK' && playerSelection == "SCISSORS" || 
        computerSelection == 'SCISSORS' && playerSelection == "PAPER" || 
        computerSelection == 'PAPER' && playerSelection == "ROCK") {
            let message = `%c Ooops! You lose. ${computerSelection} beats ${playerSelection}.`
            console.log(message, 'background: red; font-weight: bold; color:white')
            return message
    } 
    else {
        let message = `%c Hooray!!! You won. ${playerSelection} beats ${computerSelection}`
        console.log(message, 'background: green; font-weight: bold; color:white')
        return message
    }
}

// Game
function game(params) {
    let playerScore = 0
    let computerScore = 0
    for (let i = 1; i <= 5; i++) {
        console.log(`%c ROUND ${i}`, 'font-weight:bold; color:blue')
        let game = playRound()

        if (game.includes('You won')) {
            playerScore += 1
        } else if (game.includes('You lose')) {
            computerScore += 1
        }        
    }

    // Displays Result of Game
    console.log('%c FINAL SCORES', 'color:blue; font-weight:bold')
    let result = [{Computer:`${computerScore}`, Player:`${playerScore}`}]
    console.table(result)

    if (playerScore > computerScore) {
        console.log('%c HOORAY!!! YOU FINALLY MADE IT. \n YOU ARE A CHAMPION INDEED', 'background:green; color:white; font-weight:bold')
    } else if (playerScore = computerScore) {
        console.log('%c This is a draw, please try again.', 'background:yellow; color:black; font-weight:bold ')
    } else {
        console.log('%c So Sorry you didn\'t make it \n Try Again', 'background:red; color:white; font-weight:bold ')
    }

}

game()