
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
    let RPS_result = RPS_game("rock", getComputerChoice())
    result_display.textContent = String(RPS_result)
    console.log(ps_result)
    if (player_won == true) {
        ps_result += 1
        player_won = false
        computer_won = false
        playerScore.textContent = "Player Score: " + String(ps_result)
    }
    else if (computer_won == true) {
        cs_result += 1
        player_won = false
        computer_won = false
        computerScore.textContent = "Computer Score: " + String(cs_result)
    }
    
})
paper_button.addEventListener("click", function(e) {
    result_display.textContent = String(RPS_game("paper", getComputerChoice()))
    if (player_won == true) {
        ps_result += 1
        player_won = false
        computer_won = false
        playerScore.textContent = "Player Score: " + String(ps_result)
    }
    else if (computer_won == true) {
        cs_result += 1
        player_won = false
        computer_won = false
        computerScore.textContent = "Computer Score: " + String(cs_result)
    }
})
scissors_button.addEventListener("click", function(e) {
    result_display.textContent = String(RPS_game("scissors", getComputerChoice()))
    if (player_won == true) {
        ps_result += 1
        player_won = false
        computer_won = false
        playerScore.textContent = "Player Score: " + String(ps_result)
    }
    else if (computer_won == true) {
        cs_result += 1
        player_won = false
        computer_won = false
        computerScore.textContent = "Computer Score: " + String(cs_result)
    }
})

let result_display = document.createElement("h3")
result_display.textContent = "Click on a button to play Rock-Paper-Scissors"
result_display.style.position = "relative"
result_display.style.textAlign = "center"
result_display.style.bottom = "50px"

const playerScore = document.createElement("h6")
playerScore.textContent = "Player Score: " + String(ps_result)
playerScore.style.position = "relative"
playerScore.style.textAlign = "center"
playerScore.style.right = "200px"
playerScore.style.fontSize = "24px"
const computerScore = document.createElement("h6")
computerScore.textContent = "Computer Score: " + String(cs_result)
computerScore.style.position = "relative"
computerScore.style.textAlign = "center"
computerScore.style.left = "200px"
computerScore.style.bottom = "85px"
computerScore.style.fontSize = "24px"







container.appendChild(rock_button)
container.appendChild(paper_button)
container.appendChild(scissors_button)
container.appendChild(playerScore)
container.appendChild(computerScore)
container.appendChild(result_display)






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
            computer_won = true
            return "You lose paper covers rock!"
            

        }
        else if (String(computerChoice.toLowerCase()) == "rock"){
            return "you both chose rock you both tie!"
        } 
        else {
            player_won = true
            return "you won! the computer chose scissors"
            
        }
    }
    else if (playerChoice.toLowerCase() == "paper") {
        if (String(computerChoice.toLowerCase()) == "paper"){
            return "You tie you both chose paper!"
        }
        else if (String(computerChoice.toLowerCase()) == "rock"){
            player_won = true
            return "you won! paper covers rock"
            
        } 
        else {
            computer_won = true
            return "you lose! the computer chose scissors"
            
        }
    }
    else {
        if (computerChoice.toLowerCase() == "paper"){
            player_won = true
            return "You win scissors cuts paper!"
           
        }
        else if (computerChoice.toLowerCase() == "rock"){
            computer_won = true
            return "you lose! Rock crushes scissors!"
            
        } 
        else {
            return "you tie the computer chose scissors"
        }
    }
    }
