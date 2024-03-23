let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const ComputerScorePara = document.querySelector("#computer-score");

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game draw ! Play Again !"
    msg.style.backgroundColor = "#081b31";
}

const ShowWinner = (UserWin) => {
    if (UserWin) {
        userScore++;
        userScorePara.innerText = userScore;

        console.log("You Win");
        msg.innerText = "You Win !";
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("You Lost!");
        computerScore++;
        ComputerScorePara.innerText = computerScore;
        msg.innerText = "You Lost"
        msg.style.backgroundColor = "red";
    }
}
const GenCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const playGame = (UserChoice) => {
    console.log(" user choice =", UserChoice);
    const compChoice = GenCompChoice();
    console.log("Computer choice =", compChoice);

    if (UserChoice === compChoice) {
        //draw
        drawGame();
    }
    else {
        let UserWin = true;
        if (UserChoice === "rock") {
            //scissors , paper
            UserWin = compChoice === "paper" ? false : true;
        }
        else if (UserChoice === "paper") {
            //rock, scissors
            UserWin = compChoice === "rock" ? true : false;
        }
        else {
            //paper,rock
            UserWin = compChoice === "paper" ? true : false;
        }
        ShowWinner(UserWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const UserChoice = choice.getAttribute("id");

        playGame(UserChoice);
    });
});


