function displayGame() {
    scoreboard.style.display = 'flex';
    selectionContainer.style.display = 'flex';
    this.style.display = 'none';
    title.style.marginTop = '0.67em';
    instructions.textContent = 'The first one to reach 5 points wins the game.';
}

function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomPosition = Math.floor(Math.random() * 3);
    return options[randomPosition];
}

function playRound() {
    let playerSelection = this.id;
    let computerSelection = computerPlay();

    if (playerScore < 5 && computerScore < 5) displayHand(playerSelection, computerSelection);
    
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
        resetButton.style.display = 'block';
    } else {
        player.textContent = playerScore;
        computer.textContent = computerScore;
        result.textContent = matchResult;
    }
}

function displayHand(playerSelection, computerPlay) {
    playerHand.textContent = playerSelection;
    computerHand.textContent = computerPlay;
    playerHandContainer.style.visibility = 'visible';
    computerHandContainer.style.visibility = 'visible';
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    matchResult = '';
    updateScoreboard();
    playerHand.textContent = '';
    computerHand.textContent = '';
    resetButton.style.display = 'none';
    playerHandContainer.style.visibility = 'hidden';
    computerHandContainer.style.visibility = 'hidden';
}

let playerScore = 0;
let computerScore = 0;
let matchResult = '';

const title = document.querySelector('h1');
const instructions = document.querySelector('#instructions');

const player = document.querySelector('#player .score');
const result = document.querySelector('#result');
const computer = document.querySelector('#computer .score');

const playerHandContainer = document.querySelector('#player-selection');
const computerHandContainer = document.querySelector('#computer-selection')
const playerHand = document.querySelector('#player-selection .selection');
const computerHand = document.querySelector('#computer-selection .selection');

const scoreboard = document.querySelector('#scoreboard');
const selectionContainer = document.querySelector('#selection-container');

const selectionButtons = document.querySelectorAll('#selections button');
selectionButtons.forEach(selectionButton => selectionButton.addEventListener('click', playRound));

const startButton = document.querySelector('#start');
startButton.addEventListener('click', displayGame);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);