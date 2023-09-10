let scoreOfPlayer = 0;
let scoreOfComputer = 0;

function getComputerChoice() {
    const choice = ["paper", "rock", "scissors"];
    return choice[(Math.floor(Math.random() * choice.length))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "paper") {

        console.log("Drawn!");
    } 
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "rock") {
        scoreOfPlayer++;
        console.log("You Win! Paper beats Rock");
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "scissors") {
        scoreOfComputer++;
        console.log("You Lose! Scissors beats Paper");
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "rock") {

        console.log("Drawn");
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "paper") {
        scoreOfComputer++;
        console.log("You Lose! Paper beats Rock");
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "scissors") {
        scoreOfPlayer++;
        console.log("You Win! Rock beats Scissors");
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "scissors") {
        console.log("Drawn");
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "paper") {
        scoreOfPlayer++;
        console.log("You Win! Scissors beats Paper");
    }
    else {
        scoreOfComputer++;
        console.log("You Lose! Rock beats scissors");
    }
}

function game() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    for (let play = 0; play < 5; play++) {
       playRound(playerSelection, getComputerChoice());
       console.log(`You x Computer ${scoreOfPlayer} x ${scoreOfComputer}`);    
    }
}

game();