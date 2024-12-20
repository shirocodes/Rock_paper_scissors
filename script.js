
//creating the getComputerChoice function
function getComputerChoice() {
    const inputs = ["rock", "paper", "scissors"];
    const computerInputs = inputs[Math.floor(Math.random() *inputs.length)]
    return computerInputs;
}
getComputerChoice();

//logic to get the human choice
function getHumanChoice () {
    let humanChoice = prompt ("Please enter your choice: rock, paper, or scissors").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        return null;
    }
}
getHumanChoice();

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

    console.log(result);
    console.log(`human score: ${humanScore}, computer score: ${computerScore} `);
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

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

playGame();





