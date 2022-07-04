"use strict";

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
// computer choice
// function that handle computer choice
// returns string value from the list
function computerChoice() {
  const choiceList = [rock, paper, paper];

  let i = Math.floor(Math.random() * 3);
  console.log(choiceList[i]);

  return choiceList[i];
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
  const playerWonMessage = "player won";
  const computerWonMessage = "computer won";
  const tieGame = "It's tie game";

  if (player === rock && computer === scissors) {
    console.log(playerWonMessage);
  } else if (player === scissors && computer === rock) {
    console.log(computerWonMessage);
  } else if (player === scissors && computer === paper) {
    console.log(playerWonMessage);
  } else if (player === paper && computer === scissors) {
    console.log(computerWonMessage);
  } else if (player === paper && computer === rock) {
    console.log(playerWonMessage);
  } else if (player === rock && computer === paper) {
    console.log(computerWonMessage);
  } else if (player === computer) {
    console.log(tieGame);
  }

  return computerPlay, playerPlay;
}

playRoud(playerChoice(), computerChoice());

//TODO:code refactoring
