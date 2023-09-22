let scoreOfPlayer = 0;
let scoreOfComputer = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const Score = document.querySelector('.output');
const youScore = document.querySelector('.youScore');
const computerScore = document.querySelector('.computerScore');

function getComputerChoice() {
    const choice = ["paper", "rock", "scissors"];
    return choice[(Math.floor(Math.random() * choice.length))];
}

function playRound(playerSelection, computerSelection) { 
    if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "paper") {
        const result = document.createElement('p');
        result.innerText = "Drawn!";
        Score.appendChild(result);
    } 
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "rock") {
        const result = document.createElement('p');
        result.innerText = "You Win! Paper beats Rock";
        Score.appendChild(result);
        scoreOfPlayer++;
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "scissors") {
        const result = document.createElement('p');
        result.innerText = "You Lose! Scissors beats Paper";
        Score.appendChild(result);
        scoreOfComputer++;  
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "rock") {
        const result = document.createElement('p');
        result.innerText = "Drawn!";
        Score.appendChild(result);
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "paper") {      
        const result = document.createElement('p');
        result.innerText = "You Lose! Paper beats Rock";
        Score.appendChild(result);
        scoreOfComputer++;
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "scissors") { 
        const result = document.createElement('p');
        result.innerText = "You Win! Rock beats Scissors";
        Score.appendChild(result);
        scoreOfPlayer++;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "scissors") {
        const result = document.createElement('p');
        result.innerText = "Drawn!";
        Score.appendChild(result);
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "paper") {
        const result = document.createElement('p');
        result.innerText = "You Win! Scissors beats Paper";
        Score.appendChild(result);
        scoreOfPlayer++;
    }
    else {
        const result = document.createElement('p');
        result.innerText = "You Lose! Rock beats Scissors";
        Score.appendChild(result);
        scoreOfComputer++;
    }
    actualScore();
    gameWinner();
}

rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    

})

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    

})

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());

})

function gameWinner() {
    const tryButton = document.createElement('button');
    tryButton.innerHTML = 'Try again!';
    tryButton.style.fontSize = '20px';
    tryButton.style.height = '50px';
    tryButton.style.marginTop = '20px';
    if (scoreOfPlayer == 5) {
        Score.innerHTML = "Congratulations! You are the winner of the game!";
        tryButton.addEventListener('click', () => {
            youScore.innerHTML = 0;
            computerScore.innerHTML = 0;
            scoreOfPlayer = 0;
            scoreOfComputer = 0;
            Score.innerHTML = '';    
        });
        Score.appendChild(tryButton);
    }
    else if (scoreOfComputer == 5) {
        Score.innerHTML = "You Lose! Computer won the game!";
        tryButton.addEventListener('click', () => {
            youScore.innerHTML = 0;
            computerScore.innerHTML = 0;
            scoreOfPlayer = 0;
            scoreOfComputer = 0;
            Score.innerHTML = '';    
        });
        Score.appendChild(tryButton);
    }
}

function actualScore() {
    youScore.innerHTML = scoreOfPlayer;
    computerScore.innerHTML = scoreOfComputer;
}




