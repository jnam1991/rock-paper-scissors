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

    let cpuChoice = getComputerChoice();

    if (playerOneInput === "rock" && cpuChoice === "rock"){

        alert("You and your oponent both chose rock. Its a tie!");

        showConfirm();
    
    } else if (playerOneInput === "rock" && cpuChoice === "paper"){
    
        alert("You chose rock and your oponent chose paper. You lose.");

        showConfirm();
    
    } else if (playerOneInput === "rock" && cpuChoice === "scissors"){
    
        alert("You chose rock and your oponent chose scissors. You win!");

        showConfirm();

    } else if (playerOneInput === "paper" && cpuChoice === "paper"){
    
        alert("You and your oponent chose paper. Its a tie!");

        showConfirm();
    
    } else if (playerOneInput === "paper" && cpuChoice === "scissors"){
    
        alert("You chose paper and your oponent chose scissors. You lose.");

        showConfirm();
    
    } else if (playerOneInput === "paper" && cpuChoice === "rock"){
    
        alert("You chose paper and your oponent chose rock. You win!");

        showConfirm();

    } else if (playerOneInput === "scissors" && cpuChoice === "scissors"){
    
        alert("You and your oponent chose scissors. Its a tie!");

        showConfirm();
    
    } else if (playerOneInput === "scissors" && cpuChoice === "rock"){
    
        alert("You chose scissors and your oponent chose rock. You lose.");

        showConfirm();
    
    } else if (playerOneInput === "scissors" && cpuChoice === "paper"){
    
        alert("You chose scissors and your oponent chose paper. You win!");

        showConfirm();

    } else {

        showConfirm();

    }


}

showConfirm();