let playerName = prompt('What is your Name?', '');

const player = document.querySelectorAll('.playerName');

player.forEach(span => {
    span.textContent = playerName;
});


// Get Computer Choice
function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomindex = Math.floor(Math.random() * 3);
    computerChoice = choices[randomindex]
    return computerChoice;
};

const resultPanel = document.querySelector('.result-panel');
const result = document.querySelector('#result')
const analysis = document.querySelector('#analysis')

function playRound(playerSelection) {
    computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        resultPanel.style.background = 'orange';
        result.textContent = 'NO WINNER!';
        analysis.textContent = `${computerSelection} cannot beat ${playerSelection}`;
        return 'IT\'S A DRAW'
    }
    else if (
        computerSelection == 'ROCK' && playerSelection == "SCISSORS" || 
        computerSelection == 'SCISSORS' && playerSelection == "PAPER" || 
        computerSelection == 'PAPER' && playerSelection == "ROCK") {
            resultPanel.style.background = 'red';
            result.textContent = 'YOU LOSE!';
            analysis.textContent = `${playerSelection} cannot beat ${computerSelection}`;
            return 'YOU LOSE'
    } 
    else {
        resultPanel.style.background = 'green';
        result.textContent = 'YOU WON!';
        analysis.textContent = `${playerSelection} beats ${computerSelection}`;
        return 'YOU WON';
    }
}

const currentRound = document.querySelector('#currentRound')
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')

let round = 1
let wins = 0
let lose = 0

// Game
function game(playerSelection) {
    let gameround = playRound(playerSelection);
    
    if (gameround.includes('YOU WON')) {
        wins += 1;
        playerScore.textContent = wins;
    } else if (gameround.includes('YOU LOSE')) {
        lose += 1
        computerScore.textContent = lose;
    } else {

    }
    round += 1;
    currentRound.textContent = round;
}


const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
    
    rock.addEventListener('click', () => {
        let playerSelection = 'ROCK';
        game(playerSelection);
    });
    paper.addEventListener('click', () => {
        let playerSelection = 'PAPER';
        game(playerSelection);
    });
    scissors.addEventListener('click', () => {
        let playerSelection = 'SCISSORS'
        game(playerSelection);
    }); 

