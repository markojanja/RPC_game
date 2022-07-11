"use strict";

const btns = document.querySelectorAll(".btn");
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const playerScr = document.getElementById("plyr-score");
const computerScr = document.getElementById("comp-score");
const cmpChoice = document.getElementById("cmp-choice");
const modal = document.querySelector('.modal');
const playAgainBtn = document.querySelector('.btn-primary');
const modalMsg = document.getElementById('modal_msg');
const closeBtn = document.querySelector('.btn-close');

// computer choice
// function that handle computer choice
// returns string value from the list
function computerChoice() {
  const choiceList = [rock, paper, scissors];
  // console.log(choiceList.length);

  let choice = Math.floor(Math.random() * choiceList.length);
  // console.log(choiceList[choice]);
  cmpChoice.innerHTML = choiceList[choice];
  return choiceList[choice];
}
//player choice
//returns string value when btn is clicked
function playerChoice(choice) {
  let choiceValue = choice;

  // console.log(choice);

  return choiceValue;
}

//play round
//function that handle game logic
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
function check_result() {
  if (playerScore === 5) {
    // console.log("player won");
    modalMsg.innerHTML = "Player Won";
    modal.classList.add('show');
    btns.forEach(btn=>{
      btn.disabled = true;
    })
    playAgain()

  } else if (computerScore === 5) {
    console.log("comp won");
    modalMsg.innerHTML = "Computer Won";
    modal.classList.add('show');
    btns.forEach(btn=>{
      btn.disabled = true;
    })
    playAgain()

  } else {
    
  }
}

//main function that runs the game

function game() {
  //selects all btns
 
  playAgain()
  btns.forEach((btn) => {
    // click event for every btn
    btn.addEventListener("click", function () {
      let round = playRoud(playerChoice(this.dataset.value), computerChoice());

      if (round === "player won") {
        playerScore += 1;
        playerScr.innerHTML = playerScore;
        // console.log(`running score ${playerScore} - ${computerScore}`);
        check_result();
      } else if (round === "computer won") {
        computerScore += 1;
        computerScr.innerHTML = computerScore;
        // console.log(`running score ${playerScore} - ${computerScore}`);
        check_result();
      }
    });
  });
}

//function that resets the game
function playAgain(){
  playAgainBtn.addEventListener('click', ()=>{

    modal.classList.remove('show');
    playerScore = 0;
    computerScore = 0;
    playerScr.innerHTML = '0';
    computerScr.innerHTML = '0';
    btns.forEach(btn=>{
      btn.disabled = false;
    })
  })
}
//close modal

closeBtn.addEventListener('click', ()=>{
  modal.classList.remove('show')
});

game();