let playerScore: number = 0;
let computerScore: number = 0;
const inputButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".player-button");
const playerScoreDiv: HTMLElement = document.querySelector(".player-score span");
const computerScoreDiv: HTMLElement = document.querySelector(".computer-score span");
const winnerPresentation: HTMLElement = document.querySelector(".winner-presentation");
const scoreBoard = document.querySelector(".score-board");	

inputButtons.forEach((btn) => {
	btn.addEventListener("click", function(e) {
		winnerPresentation.innerText = playSingleRound((e.target as HTMLButtonElement).value, getComputerChoice());
		if(playerScore === 5 || computerScore === 5){
			endGame(playerScore - computerScore);
		}
	})
})

// Randomly generate rock, paper og scissor
function getComputerChoice():string {
	const randomNum: number = Math.floor(Math.random() * 3);
	if (randomNum === 1){
		return "rock";
	} else if (randomNum === 2) {
		return "paper";
	} else {
		return "scissor";
	}
}

// Play a single round and declare winner of round
function playSingleRound(playerSelection: string, computerSelection: string): string {
	const playerChoice = playerSelection;	
	const computerChoice = computerSelection; 
	const messageDraw = `Its a draw! ${playerChoice} vs ${computerChoice}`;
	const messagePlayerWin = `The player wins! ${playerChoice} vs ${computerChoice}`;
	const messageComputerWin = `The computer wins! ${computerChoice} vs ${playerChoice}`;
	if(playerChoice == computerChoice) {
		return messageDraw;
	} else if (playerChoice == "rock" && computerChoice != "paper") {
		playerScore++;
		playerScoreDiv.innerText = playerScore.toString();
		return messagePlayerWin;
	} else if (playerChoice == "scissor" && computerChoice != "rock") {
		playerScore++;
		playerScoreDiv.innerText = playerScore.toString();
		return messagePlayerWin;
	} else if (playerChoice == "paper" && computerChoice != "scissor") {
		playerScore++;
		playerScoreDiv.innerText = playerScore.toString();
		return messagePlayerWin;
	} else {
		computerScore++;
		computerScoreDiv.innerText = computerScore.toString();
		return messageComputerWin;
	}
}

function endGame(result: number) {
	
	inputButtons.forEach((btn) => {
		btn.disabled = true;
	})
	
	if (result > 0) {
		winnerPresentation.innerText = `Game over! Congratulations player! You won with ${playerScore} points vs the computers ${computerScore} points`; 
	} else {	
		winnerPresentation.innerText = `Game over! I'm sorry player! You lost with ${playerScore} points vs the computers ${computerScore} points`;
	}
	
	let resetBtn = document.createElement("button");
	resetBtn.value = "play-again";
	resetBtn.textContent = "Play again";
	resetBtn.classList.add("reset-button");
	resetBtn.addEventListener("click", function(){
		resetGame(resetBtn);
	});
	scoreBoard.appendChild(resetBtn);
}

function  resetGame(element: HTMLButtonElement): void {
	playerScore = 0;
	computerScore = 0;
	computerScoreDiv.innerText = computerScore.toString();
	playerScoreDiv.innerText = playerScore.toString();
	inputButtons.forEach(e => e.disabled = false);
	scoreBoard.removeChild(element);
};
