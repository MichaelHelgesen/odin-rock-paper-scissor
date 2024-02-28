let playerScore: number = 0;
let computerScore: number = 0;

// Randomly generate rock, paper og scissor
function getComputerChoice():string {
	const randomNum: number = Math.floor(Math.random() * 3);
	if (randomNum === 1){
		return "Rock"
	} else if (randomNum === 2) {
		return "Paper";
	} else {
		return "Scissor"
	}
}

// Play a single round and declare winner
function playSingleGame(playerSelection: string, computerSelection: string): string {
	const playerChoice = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
	const computerChoice = computerSelection.slice(0,1).toUpperCase() + computerSelection.slice(1).toLowerCase();
	const messageDraw = `Its a draw! ${playerChoice} vs ${computerChoice}`;
	const messagePlayerWin = `The player wins! ${playerChoice} vs ${computerChoice}`;
	const messageComputerWin = `The computer wins! ${computerChoice} vs ${playerChoice}`;
	if(playerChoice == computerChoice) {
		return messageDraw;
	} else if (playerChoice == "Rock" && computerChoice != "Paper") {
		playerScore++
		return messagePlayerWin;
	} else if (playerChoice == "Scissor" && computerChoice != "Rock") {
		playerScore++
		return messagePlayerWin;
	} else if (playerChoice == "Paper" && computerChoice != "Scissor") {
		playerScore++
		return messagePlayerWin;
	} else {
		computerScore++
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
		console.log(`Congratulations player! You won with ${playerScore} points vs the computers ${computerScore}points`) 
	} else {	
		console.log(`I'm sorry player! You lost with ${playerScore} points vs the computers ${computerScore}points`)
	}
}
playGame();
