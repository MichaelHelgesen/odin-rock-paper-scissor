var playerScore = 0;
var computerScore = 0;
// Randomly generate rock, paper og scissor
function getComputerChoice() {
    var randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 1) {
        return "Rock";
    }
    else if (randomNum === 2) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}
// Play a single round and declare winner
function playSingleGame(playerSelection, computerSelection) {
    var playerChoice = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    var computerChoice = computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1).toLowerCase();
    var messageDraw = "Its a draw! ".concat(playerChoice, " vs ").concat(computerChoice);
    var messagePlayerWin = "The player wins! ".concat(playerChoice, " vs ").concat(computerChoice);
    var messageComputerWin = "The computer wins! ".concat(computerChoice, " vs ").concat(playerChoice);
    if (playerChoice == computerChoice) {
        return messageDraw;
    }
    else if (playerChoice == "Rock" && computerChoice != "Paper") {
        playerScore++;
        return messagePlayerWin;
    }
    else if (playerChoice == "Scissor" && computerChoice != "Rock") {
        playerScore++;
        return messagePlayerWin;
    }
    else if (playerChoice == "Paper" && computerChoice != "Scissor") {
        playerScore++;
        return messagePlayerWin;
    }
    else {
        computerScore++;
        return messageComputerWin;
    }
}
// Play a game
function playGame() {
    console.log(playSingleGame(prompt("Choose rock, paper or scissor"), getComputerChoice()));
    console.log(playSingleGame(prompt("choose"), getComputerChoice()));
    console.log(playSingleGame(prompt("choose"), getComputerChoice()));
    console.log(playSingleGame(prompt("choose"), getComputerChoice()));
    console.log(playSingleGame(prompt("choose"), getComputerChoice()));
    if (playerScore > computerScore) {
        console.log("Congratulations player! You won with ".concat(playerScore, " points vs the computers ").concat(computerScore, "points"));
    }
    else {
        console.log("I'm sorry player! You lost with ".concat(playerScore, " points vs the computers ").concat(computerScore, "points"));
    }
}
playGame();
