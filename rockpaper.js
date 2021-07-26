const plays = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return plays[Math.floor(Math.random() * plays.length)];
}


function playRound(playerSelection, computerSelection) {

    console.log("Computer's play is " + computerSelection + ". Your play is " + playerSelection + ".");
    
    if (playerSelection == computerSelection) {
        console.log ("It's a tie");
        return "Tie";
    } 
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log ("You lose! Paper beats Rock");
            return "Computer";
        } else {
            console.log ("You win! Rock beats Scissors");
            return "Player";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log ("You win! Paper beats Rock");
            return "Player";
        } else {
            console.log ("You lose! Scissors beats Paper");
            return "Computer";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == 'rock') {
            console.log ("You lose! Rock beats Scissors");
            return "Computer";
        } else {
            console.log ("You win! Scissors beats Paper");
            return "Player";
        }
    }
    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("What's your play?").toLowerCase();
        let computerRandom = computerPlay();
        let computerSelection = computerRandom.toLowerCase();
        
        let roundWinner = playRound(playerSelection, computerSelection);
        if (roundWinner == "Computer") {
            computerScore += 1;
        } else if (roundWinner == "Player") {
            playerScore += 1;
        } 
        console.log("Player: " + playerScore + "\nComputer: " + computerScore);
    }

    if (playerScore > computerScore) {
        console.log("You won!")
    } else if (computerScore < playerScore) {
        console.log("Computer won!") 
    } else console.log("You tied!");
}

game();