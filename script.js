function getComputerChoice(randomLetterGen){


    function randomLetterGen(){

        function randomNumGen(){
            return Math.floor(Math.random()*2);
        }

        let word = "rp";
        return word.charAt(randomNumGen());
    }

    if (randomLetterGen() == "r"){
        let cpuInput = "rock";
    } else if (randomLetterGen() == "p"){
        let cpuInput = "paper";
    } else {
        let cpuInput = "scissors";
    }

}

let cpuInput = getComputerChoice();


function showConfirm(){

    let playerOneInput = prompt("Rock, paper, or scissors?", "Please type: rock, paper, or scissors");

    if (playerOneInput === "rock" && cpuInput === "rock"){

        console.log("You and your oponent both chose rock. Its a tie!");

        showConfirm();
    
    } else if (playerOneInput === "rock" && cpuInput === "paper"){
    
        console.log("You chose rock and your oponent chose paper. You lose.");

        showConfirm();
    
    } else if (playerOneInput === "rock" && cpuInput === "scissors"){
    
        console.log("You chose rock and your oponent chose scissors. You win!");

        showConfirm();
    
    } else if (playerOneInput === "paper" && cpuInput === "paper"){
    
        console.log("You and your oponent chose paper. Its a tie!");

        showConfirm();
    
    } else if (playerOneInput === "paper" && cpuInput === "scissors"){
    
        console.log("You chose paper and your oponent chose scissors. You lose.");

        showConfirm();
    
    } else if (playerOneInput === "paper" && cpuInput === "rock"){
    
        console.log("You chose paper and your oponent chose rock. You win!");

        showConfirm();
    
    } else if (playerOneInput === "scissors" && cpuInput === "scissors"){
    
        console.log("You and your oponent chose scissors. Its a tie!");

        showConfirm();
    
    } else if (playerOneInput === "scissors" && cpuInput === "rock"){
    
        console.log("You chose scissors and your oponent chose rock. You lose.");

        showConfirm();
    
    } else if (playerOneInput === "scissors" && cpuInput === "paper"){
    
        console.log("You chose scissors and your oponent chose paper. You win!");

        showConfirm();
    
    } else {
    
        showConfirm();
    
    }

}
