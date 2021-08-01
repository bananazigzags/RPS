let playerScore = 0;
let computerScore = 0;
const results = document.querySelector('#results');
const play = document.createElement("p");
play.classList.add('results');
const score = document.createElement("p");
score.classList.add('results');
const round = document.createElement("p");
round.classList.add('results');
const winner = document.createElement('p');
round.classList.add('results');


// plays round on button click
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
    });

function setPlayerSelection(e) {
        playerSelection = e.target.id;
}

// returns computer play
const plays = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(e) {
    winner.textContent = "";
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();

    play.textContent = ("Computer's play is " + computerSelection + ". Your play is " + playerSelection + ".");
    results.appendChild(play);

    if (playerSelection == computerSelection) {
        round.textContent = "It's a tie.";
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            round.textContent = "You lose! Paper beats rock.";
            computerScore += 1;
        } else {
            round.textContent = "You win! Rock beats scissors.";
            playerScore += 1;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            round.textContent = "You win! Paper beats rock.";
            playerScore += 1;
        } else {
            round.textContent = "You lose! Scissors beats paper.";
            computerScore += 1;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == 'rock') {
            round.textContent = "You lose! Rock beats scissors.";
            computerScore += 1;
        } else {
            round.textContent = "You win! Scissors beats paper.";
            playerScore += 1;
        }
    }
    score.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;
    results.appendChild(round);
    results.appendChild(score);

    checkWinner();
}

function checkWinner() {
    
    if (computerScore == 5) {
        winner.textContent = "Computer won! Play again?"
        results.appendChild(winner);
        clearScores();
    }
    if (playerScore == 5) {
        winner.textContent = "You won! Play again?"
        results.appendChild(winner);
        clearScores();
    }
}

function clearScores(){
    computerScore = 0;
    playerScore = 0;
}
