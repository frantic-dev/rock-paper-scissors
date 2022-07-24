const playChoices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let randomPlayChoice = Math.floor(Math.random()*playChoices.length);
    return playChoices[randomPlayChoice]; 
} //so computer choice can choose random between the three

function oneRound() {
    let playerSelectionVirgin = prompt("what are you playing?","rock"); //enter in player's move
    let playerSelection = playerSelectionVirgin.charAt(0).toUpperCase() + playerSelectionVirgin.slice(1).toLowerCase(); //insensitive to cap
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return computerSelection + " " + playerSelection + " " +  "it's a tie!" + tie(); 
    } else if ((playerSelection == "Paper" 
    && computerSelection === "Scissors") 
    || (playerSelection == "Rock"
    && computerSelection ==="Paper")
    ||(playerSelection =="Scissors" 
    && computerSelection === "Rock")) {
        return "You lose!" + " " + computerSelection + " beats " + playerSelection + computerWins();    
    }// player loses 
    else if ((playerSelection == "Paper"
    && computerSelection === "Rock")
    || (playerSelection == "Rock" 
    && computerSelection === "Scissors")
    || (playerSelection == "Scissors" 
    && computerSelection === "Paper")) {
        return "You win!"  + " " + playerSelection + " beats " + computerSelection + playerWins();
    }//player wins
    else {
        return "error";
    }
}

let rounds ="";



let playerScore = 0;
let computerScore = 0;
function playerWins() { //player wins a point and shows score
    playerScore+= 1;
    return "\n Score: \n You: " + playerScore + " Computer: " + computerScore;
}
function computerWins() { //computer  wins a point and shows score
    computerScore += 1;
    return "\n Score: \n You: " + playerScore + " Computer: " + computerScore;
}
function tie() {// shows score
    return "\n Score: \n You: " + playerScore + " Computer: " + computerScore
}

function score() {
    if(playerScore > computerScore) {
        return "You win! Congratulations!!"
    } else if (playerScore < computerScore) {
        return 'You lose! My condolences.'
    } else {
        return "A tie! Crazy!!"
    }
}
function game() {
    for (let i = 1;; i++) {
      rounds = "round "+ i + ": "+ oneRound();
      console.log(rounds);
    }
    console.log(score())
    
}
game()