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

function getPlayerChoice() {
    rock.addEventListener('click', () => {
        let playerChoice = 'ROCK'
        console.log(playerChoice)
    })
    paper.addEventListener('click', () => {
        let playerChoice = 'PAPER'
        console.log(playerChoice)
    })
    scissors.addEventListener('click', () => {
        let playerChoice = 'SCISSORS'
        console.log(playerChoice)
    })
}