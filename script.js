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

function playRound(playerSelection) {
    computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        resultPanel.classList.add('draw');
        result.textContent = 'NO WINNER!';
        analysis.textContent = `${computerSelection} cannot beat ${playerSelection}`;

    }
    else if (
        computerSelection == 'ROCK' && playerSelection == "SCISSORS" || 
        computerSelection == 'SCISSORS' && playerSelection == "PAPER" || 
        computerSelection == 'PAPER' && playerSelection == "ROCK") {
            resultPanel.classList.add('lose');
            result.textContent = 'YOU LOSE!';
            analysis.textContent = `${playerSelection} cannot beat ${computerSelection}`;
    } 
    else {
        resultPanel.classList.add('win');
        result.textContent = 'YOU WON!';
        analysis.textContent = `${playerSelection} beats ${computerSelection}`;
    }
}


const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

    rock.addEventListener('click', () => {
        playRound('ROCK')
    });
    paper.addEventListener('click', () => {
        playRound('PAPER')
    });
    scissors.addEventListener('click', () => {
        playRound('SCISSORS')
    });


const resultPanel = document.querySelector('.result-panel');
const result = document.querySelector('#result')
const analysis = document.querySelector('#analysis')
