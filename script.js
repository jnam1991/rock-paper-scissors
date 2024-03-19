let playerOneInput = prompt("Rock, paper, or scissors?", "Please type: rock, paper, or scissors");

let CpuInput = "rock";

if (playerOneInput === "rock" && CpuInput === "rock"){

    console.log("You and your oponent both chose rock. Its a tie!");

} else if (playerOneInput === "rock" && CpuInput === "paper"){

    console.log("You chose rock and your oponent chose paper. You lose.");

} else if (playerOneInput === "rock" && CpuInput === "scissors"){

    console.log("You chose rock and your oponent chose scissors. You win!");

} else if (playerOneInput === "paper" && CpuInput === "paper"){

    console.log("You and your oponent chose paper. Its a tie!");

} else if (playerOneInput === "paper" && CpuInput === "scissors"){

    console.log("You chose paper and your oponent chose scissors. You lose.");

} else if (playerOneInput === "paper" && CpuInput === "rock"){

    console.log("You chose paper and your oponent chose rock. You win!");

} else if (playerOneInput === "scissors" && CpuInput === "scissors"){

    console.log("You and your oponent chose scissors. Its a tie!");

} else if (playerOneInput === "scissors" && CpuInput === "rock"){

    console.log("You chose scissors and your oponent chose rock. You lose.");

} else if (playerOneInput === "scissors" && CpuInput === "paper"){

    console.log("You chose scissors and your oponent chose paper. You win!");

}