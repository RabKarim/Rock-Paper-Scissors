
const container = document.querySelector("#container")
const rock_button = document.createElement("button")
rock_button.textContent = "Rock"
const paper_button = document.createElement("button")
paper_button.textContent = "Paper"
const scissors_button = document.createElement("button")
scissors_button.textContent ="Scissors"
let ps_result = 0
let cs_result = 0
player_won = false
computer_won = false



rock_button.addEventListener("click", function(e) {
    console.log(RPS_game("rock", getComputerChoice()))
    
})
paper_button.addEventListener("click", function(e) {
    console.log(RPS_game("paper", getComputerChoice()))
})
scissors_button.addEventListener("click", function(e) {
    console.log(RPS_game("scissors", getComputerChoice()))
})

const result_display = document.createElement("h3")
result_display.textContent = "Click on a button to play Rock-Paper-Scissors"
result_display.style.position = "relative"
result_display.style.textAlign = "center"

const playerScore = document.createElement("h6")
playerScore.textContent = "Player Score: " + String(ps_result)
playerScore.style.position = "relative"
playerScore.style.textAlign = "center"
playerScore.style.right = "200px"
playerScore.style.fontSize = "16px"
const computerScore = document.createElement("h6")
computerScore.textContent = "Computer Score: " + String(cs_result)
computerScore.style.position = "relative"
computerScore.style.textAlign = "center"
computerScore.style.left = "200px"
computerScore.style.bottom = "55px"
computerScore.style.fontSize = "16px"







container.appendChild(rock_button)
container.appendChild(paper_button)
container.appendChild(scissors_button)
container.appendChild(playerScore)
container.appendChild(computerScore)
container.appendChild(result_display)



console.log(getComputerChoice());




function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
    let choice
    if (ranNum == 0) {
        return choice = "rock" 
    }
    else if (ranNum == 1) {
        return choice = "paper"
    }
    else {
        return choice = "scissors"
    }
    
    
}

function RPS_game(playerChoice, computerChoice) {
    
    if (playerChoice.toLowerCase() == "rock"){
        if (String(computerChoice.toLowerCase()) == "paper"){
            return "You lose paper covers rock!"
            
        }
        else if (String(computerChoice.toLowerCase()) == "rock"){
            return "you both chose rock you both tie!"
        } 
        else {
            return "you won! the computer chose scissors"
        }
    }
    else if (playerChoice.toLowerCase() == "paper") {
        if (String(computerChoice.toLowerCase()) == "paper"){
            return "You tie you both chose paper!"
        }
        else if (String(computerChoice.toLowerCase()) == "rock"){
            return "you won! paper covers rock"
        } 
        else {
            return "you lose! the computer chose scissors"
        }
    }
    else {
        if (computerChoice.toLowerCase() == "paper"){
            return "You win scissors cuts paper!"
        }
        else if (computerChoice.toLowerCase() == "rock"){
            return "you lose! Rock crushes scissors!"
        } 
        else {
            return "you tie the computer chose scissors"
        }
    }
    }
