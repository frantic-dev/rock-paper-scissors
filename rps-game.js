const playChoices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let randomPlayChoice = Math.floor(Math.random()*playChoices.length);
    return playChoices[randomPlayChoice]; 
} //so computer choice can choose random between the three

let playerSelection;

function getId(button) {
    playerSelection = button.id;
    return displayResult(playRound(playerSelection, ));
}
function displayResult(fct) {
    const result = document.querySelector('#result');
    result.innerHTML = fct;
}

function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return computerSelection + " " + playerSelection + "<br>" +  "it's a tie!" + tie(); 
    } else if ((playerSelection == "Paper" 
    && computerSelection === "Scissors") 
    || (playerSelection == "Rock"
    && computerSelection ==="Paper")
    ||(playerSelection =="Scissors" 
    && computerSelection === "Rock")) {
        return "You lose!" + "<br>" + computerSelection + " beats " + playerSelection + "<br>"+ computerWins();    
    }// player loses 
    else if ((playerSelection == "Paper"
    && computerSelection === "Rock")
    || (playerSelection == "Rock" 
    && computerSelection === "Scissors")
    || (playerSelection == "Scissors" 
    && computerSelection === "Paper")) {
        return "You win!"  + "<br>" + playerSelection + " beats " + computerSelection +"<br>"+ playerWins();
    }//player wins
    else {
        return "error" + playerSelection;
    }
}

let rounds ="";



let playerScore = 0;
let computerScore = 0;
function playerWins() { //player wins a point and shows score
    playerScore+= 1;
    return "\n Score: \nYou: " + playerScore + " Computer: " + computerScore;
}
function computerWins() { //computer  wins a point and shows score
    computerScore += 1;
    return "\n Score: \nYou: " + playerScore + " Computer: " + computerScore;
}
function tie() {// shows score
    return "\n Score: \nYou: " + playerScore + " Computer: " + computerScore
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
      rounds = "round "+ i + ": "+ playRound();
      console.log(rounds);
    }
    console.log(score())
    
}
