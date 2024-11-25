// Rock Paper Scissors

const choices = ["rock", "paper","scissors"]
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
// Function play game
function playgame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "scissors") ? "You Win!" : "You lose!";
        }
    }

    playerDisplay.textContent = `Player chose: ${playerChoice}`;
    computerDisplay.textContent = `Computer chose: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext","redtext");

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose!":
            resultDisplay.classList.add("redtext");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
} 