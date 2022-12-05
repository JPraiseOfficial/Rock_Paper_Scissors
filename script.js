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

// Get Player's choice
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

let playerChoice = '';

rock.addEventListener('click', () => {
    playerChoice = 'ROCK';
});
paper.addEventListener('click', () => {
    playerChoice = 'PAPER';
});
scissors.addEventListener('click', () => {
    playerChoice = 'SCISSORS';
});




