let playerScore = 0;
let computerScore = 0;
let player;

document.getElementById("rock").addEventListener("click", function (event) {
    player = "rock";
    playGame();
});
document.getElementById("paper").addEventListener("click", function (event) {
    player = "paper";
    playGame();
});
document.getElementById("scissors").addEventListener("click", function (event) {
    player = "scissors";
    playGame();
});


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computersChoice;
    switch (randomNumber) {
        case 1: computersChoice = "rock"; break;
        case 2: computersChoice = "paper"; break;
        case 3: computersChoice = "scissors"; break;
        default: computersChoice = "error";
    }
    return computersChoice;
}

function playGame() {
    const pc = getComputerChoice();
    if (player == pc) {
        document.getElementById("gameResult").textContent = "It's a tie";
    }

    else if (player == "rock" && pc == "paper") {
        document.getElementById("gameResult").textContent = "Computer wins! paper beats rock";
        computerScore++;
        document.getElementById("computer").textContent = computerScore;
    }

    else if (player == "rock" && pc == "scissors") {
        document.getElementById("gameResult").textContent = "Player wins! rock beats scissors ";
        playerScore++;
        document.getElementById("player").textContent = playerScore;
    }

    else if (player == "paper" && pc == "rock") {
        document.getElementById("gameResult").textContent = "Player wins! paper beats rock ";
        playerScore++;
        document.getElementById("player").textContent = playerScore;
    }

    else if (player == "paper" && pc == "scissors") {
        document.getElementById("gameResult").textContent = "Computer wins! scissors beat paper ";
        computerScore++;
        document.getElementById("computer").textContent = computerScore;
    }

    else if (player == "scissors" && pc == "rock") {
        document.getElementById("gameResult").textContent = "Computer wins! rock beats scissors ";
        computerScore++;
        document.getElementById("computer").textContent = computerScore;
    }

    else if (player == "scissors" && pc == "paper") {
        document.getElementById("gameResult").textContent = "Player wins! scissors beat paper ";
        playerScore++;
        document.getElementById("player").textContent = playerScore;
    }
}
