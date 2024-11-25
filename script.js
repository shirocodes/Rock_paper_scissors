console.log ("Hello World");
//Step II in creating the getComputerChoice function
function getComputerChoice() {
    let randomNumber = Math.random ()

    if (randomNumber <=0.33) {
        return "rock";
    } else if (randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }

}

//Step III: create the getHumanChoice function. I will test for invalid inputs too.
function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        console.log ("invalid choice: Please enter a valid choice: rock, paper, or scissors");
        return null;
    }
}

//Step IV: declare variables in global scope so they are accessible anywhere in the script
let humanscore = 0;
let computerscore = 0;

//step V: Creating a logic to play single round
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase;
    let result;
    if (humanChoice === computerChoice) {
        result = `It's a tie. Both players chose ${humanChoice}.`;
    } else if (

        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanscore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerscore++; 
    }
    console.log(result);
    
}

const humanSelection = getHumanChoice();
const computerSelection =getComputerChoice();

playRound (humanSelection,computerSelection);
console.log(`human score: ${humanscore}, computer score: ${computerscore}`);


//step VI: Playing 5 rounds using playGame function
function playGame () {
    let humanscore = 0;
    let computerscore = 0;
    
    function playRound (humanChoice, computerChoice) {
        humanChoice =humanChoice.toLowerCase;
        let result; 

        if (humanChoice === computerChoice) {
            result = (`It's a tie. You both chose ${humanChoice}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            result = `You win! ${humanChoice} beats ${computerChoice}`;
            humanscore++;
        } else {
            result = `You lose ${computerChoice} beats ${humanChoice}`;
            computerscore++;
        }

        console.log(result);
    }

    for (let i=0; i<5; i++); {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound (humanSelection, computerSelection); //play a round
    }

    //announcing overall winner
    if (humanscore > computerscore) {
        console.log("Congratulations1 You are the final winner.");
    } else if (computerscore > humanscore) {

        console.log("oops! You lose. The computer won.");
    } else {
        console.log("It's a tie!")
    }
    console.log (`Final scores - human:${humanscore}, computer: ${computerscore}`);

}

//start a new game
playGame();
