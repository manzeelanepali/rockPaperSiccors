const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerWinsDisplay = document.getElementById("playerWins");
const computerWinsDisplay = document.getElementById("computerWins");
let userChoice
let playerWins = 0; 
let computerWins = 0;
const choices= document.getElementsByTagName("button")


for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", (e) => {
        userChoice = e.target.id;
        console.log(userChoice);  
        playerDisplay.textContent = `You chose: ${userChoice}`;

        generateComputerChoice();
    });
}


function generateComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
     const randomIndex = Math.floor(Math.random() * computerChoices.length);
    const computerChoice = computerChoices[randomIndex];
    computerDisplay.textContent = `Computer chose: ${computerChoice}`;
       determineWinner(userChoice, computerChoice);
}


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        resultDisplay.textContent = "It's a tie!";
        resultDisplay.style.color="blue"
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDisplay.textContent = "You win!";
        resultDisplay.style.color="green";
        
        playerWins ++
        
    } else {
        resultDisplay.textContent = "You lose!";
        resultDisplay.style.color="red"
        resultDisplay.style.fontWeight = "bold";

        computerWins++;
    }
       playerWinsDisplay.textContent = `Player Wins: ${playerWins}`;
     
    computerWinsDisplay.textContent = `Computer Wins: ${computerWins}`;
}
