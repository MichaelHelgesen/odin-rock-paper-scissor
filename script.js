var playerScore = 0;
var computerScore = 0;
var inputButtons = document.querySelectorAll(".player-button");
var playerScoreDiv = document.querySelector(".player-score span");
var computerScoreDiv = document.querySelector(".computer-score span");
var winnerPresentation = document.querySelector(".winner-presentation");
var scoreBoard = document.querySelector(".score-board");
inputButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        winnerPresentation.innerText = playSingleRound(e.target.value, getComputerChoice());
        if (playerScore === 5 || computerScore === 5) {
            endGame(playerScore - computerScore);
        }
    });
});
// Randomly generate rock, paper og scissor
function getComputerChoice() {
    var randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 1) {
        return "rock";
    }
    else if (randomNum === 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}
// Play a single round and declare winner of round
function playSingleRound(playerSelection, computerSelection) {
    var playerChoice = playerSelection;
    var computerChoice = computerSelection;
    var messageDraw = "Its a draw! ".concat(playerChoice, " vs ").concat(computerChoice);
    var messagePlayerWin = "The player wins! ".concat(playerChoice, " vs ").concat(computerChoice);
    var messageComputerWin = "The computer wins! ".concat(computerChoice, " vs ").concat(playerChoice);
    if (playerChoice == computerChoice) {
        return messageDraw;
    }
    else if (playerChoice == "rock" && computerChoice != "paper") {
        playerScore++;
        playerScoreDiv.innerText = playerScore.toString();
        return messagePlayerWin;
    }
    else if (playerChoice == "scissor" && computerChoice != "rock") {
        playerScore++;
        playerScoreDiv.innerText = playerScore.toString();
        return messagePlayerWin;
    }
    else if (playerChoice == "paper" && computerChoice != "scissor") {
        playerScore++;
        playerScoreDiv.innerText = playerScore.toString();
        return messagePlayerWin;
    }
    else {
        computerScore++;
        computerScoreDiv.innerText = computerScore.toString();
        return messageComputerWin;
    }
}
function endGame(result) {
    inputButtons.forEach(function (btn) {
        btn.disabled = true;
    });
    if (result > 0) {
        winnerPresentation.innerText = "Game over! Congratulations player! You won with ".concat(playerScore, " points vs the computers ").concat(computerScore, " points");
    }
    else {
        winnerPresentation.innerText = "Game over! I'm sorry player! You lost with ".concat(playerScore, " points vs the computers ").concat(computerScore, " points");
    }
    var resetBtn = document.createElement("button");
    resetBtn.value = "play-again";
    resetBtn.textContent = "Play again";
    resetBtn.classList.add("reset-button");
    resetBtn.addEventListener("click", function () {
        resetGame(resetBtn);
    });
    scoreBoard.appendChild(resetBtn);
}
function resetGame(element) {
    playerScore = 0;
    computerScore = 0;
    computerScoreDiv.innerText = computerScore.toString();
    playerScoreDiv.innerText = playerScore.toString();
    inputButtons.forEach(function (e) { return e.disabled = false; });
    scoreBoard.removeChild(element);
}
;
