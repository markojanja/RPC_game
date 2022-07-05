"use strict";

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
// computer choice
// function that handle computer choice
// returns string value from the list
function computerChoice() {
  const choiceList = [rock, paper, paper];

  let choice = Math.floor(Math.random() * choiceList.length);
  console.log(choiceList[choice]);

  return choiceList[choice];
}
//player choice
//returns lowercase string value from the user prompt
function playerChoice() {
  let choice = prompt("Enter rock, paper, scissors: ").toLowerCase();

  //handle wrong user input
  if (choice !== rock && choice !== paper && choice !== scissors) {
    alert("Not valid choice");
    choice = prompt("Enter valid choice").toLowerCase();
  }
  console.log(choice);
  return choice.toLowerCase();
}

//play round
//function that handle game logic , and set of rules
//rock beats scissors , scissors beat paper , paper beats rock
function playRoud(player, computer) {
  let computerPlay = computer;
  let playerPlay = player;
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
  } else{
    message = tieGame;
    return message;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let round = playRoud(playerChoice(), computerChoice());
    if (round === "player won") {
      playerScore += 1;
    } else if (round === "computer won") {
      computerScore += 1;
    }
    console.log(`player ${playerScore} - computer ${computerScore}`)
  }
  
  if (playerScore > computerScore) {
    console.log("WIIIINNNNNN");
  } else if(playerScore<computerScore) {
    console.log("Computer is the BOSS");
  }
  else{
    console.log("It's tie game!!");
  }
}

game();
