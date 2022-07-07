"use strict";

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const playerScr = document.getElementById('plyr-score')
const computerScr = document.getElementById('comp-score')
const cmpChoice = document.getElementById('cmp-choice')


// computer choice
// function that handle computer choice
// returns string value from the list
function computerChoice() {
  const choiceList = [rock, paper, scissors];
  console.log(choiceList.length)

  let choice = Math.floor(Math.random() * choiceList.length);
  console.log(choiceList[choice]);
  cmpChoice.innerHTML = choiceList[choice]
  return choiceList[choice];
}
//player choice
//returns lowercase string value from the user prompt
function playerChoice(choice) {
  let choiceValue = choice;

  console.log(choice);

  return choiceValue;
}

//play round
//function that handle game logic , and set of rules
//rock beats scissors , scissors beat paper , paper beats rock
function playRoud(player, computer) {
  let message = "";
  const playerWonMessage = "player won";
  const computerWonMessage = "computer won";
  const tieGame = "It's tie game";

  if (player === rock && computer === scissors) {
    message = playerWonMessage;
    return message;
  } else if (player === scissors && computer === rock) {
    message = computerWonMessage;
    return message;
  } else if (player === scissors && computer === paper) {
    message = playerWonMessage;
    return message;
  } else if (player === paper && computer === scissors) {
    message = computerWonMessage;
    return message;
  } else if (player === paper && computer === rock) {
    message = playerWonMessage;
    return message;
  } else if (player === rock && computer === paper) {
    message = computerWonMessage;
    return message;
  } else {
    message = tieGame;
    return message;
  }
}
let playerScore = 0;
let computerScore = 0;

// check if the player or the computer reached 5 points
function check_result(){
  if(playerScore === 5){
    console.log("player won")
    playerScore = 0
    computerScore = 0

  }
  else if(computerScore === 5){
    console.log('comp won')
    playerScore = 0
    computerScore = 0

  }
  else{
    console.log("battle in progress")
  }
 
}

//main function that runs the game

function game() {
  //selects all btns
  const btns = document.querySelectorAll(".btn");

  btns.forEach((btn) => {
    // click event for every btn
    btn.addEventListener("click", function () {
        let round = playRoud(
          playerChoice(this.dataset.value),
          computerChoice()
        );   

        if (round === "player won") {
          playerScore += 1;
          playerScr.innerHTML = playerScore
          console.log(`running score ${playerScore} - ${computerScore}`);
          check_result()

          return playerScore;
        } else if (round === "computer won") {
          computerScore += 1;
          computerScr.innerHTML = computerScore
          console.log(`running score ${playerScore} - ${computerScore}`);
          check_result()
        }
    });
  });
}
game()

