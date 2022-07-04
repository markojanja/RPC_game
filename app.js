"use strict";

// computer choice
// function that handle computer choice
// returns string value from the list
function computerChoice() {
  const choiceList = ["rock", "paper", "scissors"];

  let i = Math.floor(Math.random() * 3);
  console.log(choiceList[i]);

  return choiceList[i];
}
//player choice
//returns lowercase string value from the user prompt
function playerChoice() {
  let choice = prompt("Enter rock, paper, scissors: ");

  //handle wrong user input

  if (choice !== "rock" || choice !== "paper" || choice !== "scissors") {
    alert("Not valid choice");
    choice = prompt("Enter valid choice");
    console.log(choice);
    return choice.toLocaleLowerCase();
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

  if (player === "rock" && computer === "scissors") {
    console.log("player won");
  } else if (player === "scissors" && computer === "rock") {
    console.log("computer won");
  } else if (player === "scissors" && computer === "paper") {
    console.log("player won");
  } else if (player === "paper" && computer === "scissors") {
    console.log("computer won");
  } else if (player === "paper" && computer === "rock") {
    console.log("player won");
  } else if (player === "rock" && computer === "paper") {
    console.log("computer won");
  } else if (player === computer) {
    console.log("tie game");
  }

  return computerPlay, playerPlay;
}

playRoud(playerChoice(), computerChoice());

//TODO:code refactoring