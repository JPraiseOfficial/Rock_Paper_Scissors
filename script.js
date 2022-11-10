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

