const playChoices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let randomPlayChoice = Math.floor(Math.random()*playChoices.length);
    return playChoices[randomPlayChoice]; 
} //so computer choice can choose random between the three

let playerSelection;

function getId(button) {
    playerSelection = button.id;
    game(playerSelection);
}


function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return  "it's a tie!" + "<br>" +computerSelection + " " + playerSelection +  "<br>" + tie(); 
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
function tie() {// shows score when tie
    return "\n Score: \nYou: " + playerScore + " Computer: " + computerScore
}

function finalScore() {    //result of the whole game at end
    if(playerScore > computerScore) {
        return "You win! Congratulations!! :)"
    } else if (playerScore < computerScore) {
        return "You lose! My condolences. T o T"
    } else {
        return "A tie! Crazy!!"
    }
}

// function displayResult(fct) {
//     const result = document.querySelector('#result');
//     return result.innerHTML = fct;
// }
const result = document.querySelector('#result');
const roundNumber = document.querySelector("#round-number");
const finScore = document.querySelector('#final-score')

function display(round, roundNum,fScore) {   
     result.innerHTML = round;
     roundNumber.innerHTML = roundNum;
     finScore.innerHTML = fScore;
}

let i =  1 ;
function game(playerSelection, ) { 
    roundNum = "Round "+ i + " : "; 
    rounds = playRound(playerSelection,  );
    if (playerScore < 5 && computerScore < 5) {
    display(rounds, roundNum, null);  
    i++;
    } else if (playerScore == 5 || computerScore == 5) {
    display(rounds, roundNum, finalScore());
    restart();
    }
    
}
function restart() { //reboots scores
    i = 1;
    computerScore = 0;
    playerScore = 0;
}
