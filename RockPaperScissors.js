function rpsGame() {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let playerTurn;
    let playerNumber;
    let computerRandomNumber;

    let recursiveAsyncReadLine = function () {

        readline.question('Rock, Paper, Scissors?: ', rps => {
            playerTurn = rps;


            if (playerTurn === "r" || playerTurn == "rock") {
                playerTurn = rock;
                playerNumber = 1;
                console.log(`You choose Rock`);
                computerTurn();
                Outcome(playerNumber, computerRandomNumber);

                return readline.close();

            } else if (playerTurn === "p" || playerTurn == "paper") {
                playerTurn = paper;
                playerNumber = 2;
                console.log(`You choose Paper`);
                computerTurn();
                Outcome(playerNumber, computerRandomNumber);

                return readline.close();

            } else if (playerTurn === "s" || playerTurn == "scissors") {
                playerTurn = scissors;
                playerNumber = 3;
                console.log(`You choose Scissors`);
                computerTurn();
                Outcome(playerNumber, computerRandomNumber);

                return readline.close();
            } else {
                console.log(`Invalid Input. Try Again...`);
                recursiveAsyncReadLine();
            }

        });
    };

    recursiveAsyncReadLine();

    function computerTurn() {
        computerRandomNumber = Math.floor(Math.random() * 3) + 1;
        switch (computerRandomNumber) {
            case 1:
                computerMove = rock;
                console.log(`The computer chooses Rock`);
                break;
            case 2:
                computerMove = paper;
                console.log(`The computer chooses Paper`);

                break;
            case 3:
                computerMove = scissors;
                console.log(`The computer chooses Scissors`);

                break;

        }
    }

    function Outcome(myNumber, compNumber) {

        if (myNumber === compNumber) {
            console.log("Draw");
        } else if ((myNumber - compNumber) === -1 || (myNumber - compNumber) === 2) {
            console.log(`You lose`);
        } else {
            console.log(`You win`);
        }
    }
}

rpsGame();