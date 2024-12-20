
//creating the getComputerChoice function
function getComputerChoice() {
    const inputs = ["rock", "paper", "scissors"];
    const computerInputs = inputs[Math.floor(Math.random() *inputs.length)]
    return computerInputs;
}
getComputerChoice();

//Declaring players' score variables
let humanScore = 0;
let computerScore = 0;

//logic to play single game
function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        result = "You win!";
        humanScore ++;
    } else {
        result = "You lose!";
        computerScore++;
    }  

    updateScore();
    checkWinner();
    showResult();
} 

//function to check score
function updateScore() { 
    document.getElementById('score').textContent = `Human: ${humanScore}, Computer: ${computerScore}`; }

//function to check winner
function checkWinner() {
    if (humanScore === 5){
        document.getElementById('results').textContent = "Congratulations! You are the ultimate winner!";
        resetGame();
    } else if (computerScore === 5) {
        document.getElementById('results').textContent = "Sorry, the computer is the ultimate winner!";
        resetGame();
    }
    
}

//function to display results in the DOM
function showResult(result) {
    document.getElementById('results').textContent = result;
}


//logic to play the entire game
function playGame() {

    for (let i=0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (humanSelection !== null) {
            playRound(humanSelection, computerSelection);
        } else {
            console.log("invalid choice: Round skipped.");
        }
    }
    if (humanScore > computerScore) {
        console.log("Overall winner: human!");
    } else if (humanScore < computerScore) {
        console.log("Overall winner: Computer!");
    } else {
        console.log("It is a tie!");
    }  
}

//function to reset game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
}

//add event listeners to buttons

document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice())); 
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice())); 
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));

updateScore();





