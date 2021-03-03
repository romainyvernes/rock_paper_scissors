function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomPosition = Math.floor(Math.random() * 3);
    return options[randomPosition];
}

function playRound() {
    let playerSelection = this.textContent;
    let computerSelection = computerPlay();
    
    let duel1 = ['Rock', 'Paper'];
    let duel2 = ['Rock', 'Scissors'];
    let duel3 = ['Paper', 'Scissors'];

    let win = false;

    if(playerSelection === computerSelection) {
        matchResult = "It's a tie!";
        updateScoreboard();
        return;
    } else if(duel1.includes(playerSelection) && duel1.includes(computerSelection)) {
        if(playerSelection === 'Paper') {
            win = true;
        }
    } else if (duel2.includes(playerSelection) && duel2.includes(computerSelection)) {
        if(playerSelection === 'Rock') {
            win = true;
        }
    } else if (duel3.includes(playerSelection) && duel3.includes(computerSelection)) {
        if(playerSelection === 'Scissors') {
            win = true;
        }
    }

    if (win) {
        matchResult = `You Win! ${playerSelection} beats ${computerSelection}`;
        if (playerScore < 5 && computerScore < 5) playerScore++;
        updateScoreboard();
        return;
    } else {
        matchResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
        if (computerScore < 5 && playerScore < 5) computerScore++;
        updateScoreboard();
        return;
    }
}

function updateScoreboard() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            player.textContent = playerScore;
            result.textContent = 'You are the winner!';
        } else {
            computer.textContent = computerScore;
            result.textContent = 'Game Over! Try again!';
        }
    } else {
        player.textContent = playerScore;
        computer.textContent = computerScore;
        result.textContent = matchResult;
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    matchResult = '';
    updateScoreboard();
}

let playerScore = 0;
let computerScore = 0;
let matchResult = '';

const player = document.querySelector('#player .score');
const result = document.querySelector('#result');
const computer = document.querySelector('#computer .score');

const selectionButtons = document.querySelectorAll('#selections button');
selectionButtons.forEach(selectionButton => selectionButton.addEventListener('click', playRound));

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);