function randomWordGen(randomLetterGen){


    function randomLetterGen(){

        function randomNumGen(){
            return Math.floor(Math.random()*2);
        }

        let word = "rp";
        return word.charAt(randomNumGen());
    }

    if (randomLetterGen() == "r"){
        console.log("rock")
    } else if (randomLetterGen() == "p"){
        console.log("paper")
    } else {
        console.log("scissors")
    }

}

randomWordGen();

showConfirm();

function showConfirm(){

    let playerOneInput = prompt("Rock, paper, or scissors?", "Please type: rock, paper, or scissors");

    if (playerOneInput === "rock" && CpuInput === "rock"){

        console.log("You and your oponent both chose rock. Its a tie!");

        showConfirm();
    
    } else if (playerOneInput === "rock" && CpuInput === "paper"){
    
        console.log("You chose rock and your oponent chose paper. You lose.");

        showConfirm();
    
    } else if (playerOneInput === "rock" && CpuInput === "scissors"){
    
        console.log("You chose rock and your oponent chose scissors. You win!");

        showConfirm();
    
    } else if (playerOneInput === "paper" && CpuInput === "paper"){
    
        console.log("You and your oponent chose paper. Its a tie!");

        showConfirm();
    
    } else if (playerOneInput === "paper" && CpuInput === "scissors"){
    
        console.log("You chose paper and your oponent chose scissors. You lose.");

        showConfirm();
    
    } else if (playerOneInput === "paper" && CpuInput === "rock"){
    
        console.log("You chose paper and your oponent chose rock. You win!");

        showConfirm();
    
    } else if (playerOneInput === "scissors" && CpuInput === "scissors"){
    
        console.log("You and your oponent chose scissors. Its a tie!");

        showConfirm();
    
    } else if (playerOneInput === "scissors" && CpuInput === "rock"){
    
        console.log("You chose scissors and your oponent chose rock. You lose.");

        showConfirm();
    
    } else if (playerOneInput === "scissors" && CpuInput === "paper"){
    
        console.log("You chose scissors and your oponent chose paper. You win!");

        showConfirm();
    
    } else {
    
        showConfirm();
    
    }

}

