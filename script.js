function getComputerChoice(){


    function randomLetterGen(){

        function randomNumGen(){
            return Math.floor(Math.random()*3);
        }

        let word = "rps";
        return word.charAt(randomNumGen());
    }

    let cpuInput = randomLetterGen();

    if (cpuInput == "r"){
        return "rock";
    } else if (cpuInput == "p"){
        return "paper";
    } else if (cpuInput == "s") {
        return "scissors";
    }

}


function showConfirm(){

    let playerOneInput = prompt("Rock, paper, or scissors?", "Please type: rock, paper, or scissors");

    if (playerOneInput === "rock" && getComputerChoice() === "rock"){

        console.log("You and your oponent both chose rock. Its a tie!");

        
    
    } else if (playerOneInput === "rock" && getComputerChoice() === "paper"){
    
        console.log("You chose rock and your oponent chose paper. You lose.");

        
    
    } else if (playerOneInput === "rock" && getComputerChoice() === "scissors"){
    
        console.log("You chose rock and your oponent chose scissors. You win!");

        
    
    } else if (playerOneInput === "paper" && getComputerChoice() === "paper"){
    
        console.log("You and your oponent chose paper. Its a tie!");

        
    
    } else if (playerOneInput === "paper" && getComputerChoice() === "scissors"){
    
        console.log("You chose paper and your oponent chose scissors. You lose.");

        
    
    } else if (playerOneInput === "paper" && getComputerChoice() === "rock"){
    
        console.log("You chose paper and your oponent chose rock. You win!");

        
    
    } else if (playerOneInput === "scissors" && getComputerChoice() === "scissors"){
    
        console.log("You and your oponent chose scissors. Its a tie!");

        
    
    } else if (playerOneInput === "scissors" && getComputerChoice() === "rock"){
    
        console.log("You chose scissors and your oponent chose rock. You lose.");

        
    
    } else if (playerOneInput === "scissors" && getComputerChoice() === "paper"){
    
        console.log("You chose scissors and your oponent chose paper. You win!");

    } else {

        return playerOneInput;

    }


}

showConfirm();