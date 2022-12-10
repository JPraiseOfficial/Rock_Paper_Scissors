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

const currentRound = document.querySelector('#currentRound');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const welcome = document.querySelector('.welcome');
const htmlGame = document.querySelector('.game');
const gameOver = document.querySelector('.game-over');
const finalResult = document.querySelector('#finalResult');

let round = 1;
let wins = 0;
let lose = 0;

// Game
function game(playerSelection) {
    let playRoundResult = playRound(playerSelection);
    
    if (playRoundResult.includes('YOU WON')) {
        playerScore.textContent = ++wins;
    } else if (playRoundResult.includes('YOU LOSE')) {
        computerScore.textContent = ++lose;
    } else {

    }
    currentRound.textContent = ++round;

    if (wins == 5) {
        welcome.classList.toggle('hidden');
        htmlGame.classList.toggle('hidden');
        gameOver.classList.toggle('hidden');

        finalResult.textContent = 'HOORAY! YOU WON'
        finalResult.style.color = 'green'
    } else if (lose == 5) {
        welcome.classList.toggle('hidden');
        htmlGame.classList.toggle('hidden');
        gameOver.classList.toggle('hidden');

        finalResult.textContent = 'Oops! YOU LOSE'
        finalResult.style.color = 'red'
    }
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

