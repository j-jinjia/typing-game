"use strict";

var _words = require("./words.js");

var time = 100;
var score = 0;
var gameActivity; //DOM elements

var paragraphMode = document.querySelector(".buttons__paragraph");
var randomWordsMode = document.querySelector(".buttons__random");
var inputBar = document.querySelector("#input");
var introSection = document.querySelector(".introdcution");
var instructionsSection = document.querySelector(".instructions");
var wordDisplay = document.querySelector(".gameSettings__screenDisplay");
var timerDisplay = document.querySelector(".scoreBoard__timer");
var scoreDisplay = document.querySelector(".scoreBoard__score");
var messageDisplay = document.querySelector(".scoreBoard__message");
var congratulationsDisplay = document.querySelector(".endScreen__header");
var endMessageDisplay = document.querySelector(".endScreen__message"); //PARAGRAPH GAME

var onButtonParagraphClick = function onButtonParagraphClick(event) {
  introSection.innerText = "";
  instructionsSection.innerText = "";
}; //RANDOM WORD GAME

/** A function that creates and displays a timer.*/


var countDownTimer = function countDownTimer() {
  if (time > 0) {
    time--;
  } else if (time == 0) {
    gameActivity = false;
  }

  ;
  timerDisplay.innerText = "Timer: ".concat(time);
}; //** A function to display a random word from the array of words. */


var pickWord = function pickWord(word) {
  var randomWord = Math.floor(Math.random() * word.length);
  wordDisplay.innerText = word[randomWord];
};

var pickHappyMessage = function pickHappyMessage(word) {
  var randomWord = Math.floor(Math.random() * word.length);
  messageDisplay.innerText = word[randomWord];
};
/** GameOver Screen. A function that changes the HTML tags for game ending screen. Displays the words typed and a message */


var gameOver = function gameOver() {
  congratulationsDisplay.innerText = "Congratulations!!!";
  endMessageDisplay.innerText = "You have typed ".concat(score, " words! Keep it up!");
  wordDisplay.innerText = "";
  timerDisplay.innerText = "";
  scoreDisplay.innerText = "";
  messageDisplay.innerText = "";
  inputBar.style.display = "none";
};
/** A function that checks whether the word typed matches word displayed. If so, add 1 to the score and display a new word from the array*/


var wordMatch = function wordMatch() {
  if (inputBar.value.toUpperCase() === wordDisplay.innerText) {
    pickHappyMessage(_words.HappyMessage);
    pickWord(_words.words);
    inputBar.value = "";
    score++;
    scoreDisplay.innerText = "Score: ".concat(score);
  } else {
    messageDisplay.innerText = '';
  }

  ;
};
/** Checks if if the timer is 0 and wether the game is active. And calls game over function */


var gameStatus = function gameStatus() {
  if (!gameActivity && time === 0) {
    gameOver();
  }

  ;
};
/**Start the game function. Display word from array. */


var startGame = function startGame() {
  if (wordMatch()) {
    gameActivity = true;
    pickWord(_words.words);
    inputBar.value = '';
  }

  ;
};
/** Start all the functions when Random Game mode is triggered.Timer,display word, focus on input bar, and event listener on input for this game mode. */


var onButtonRandomClick = function onButtonRandomClick(event) {
  introSection.innerText = "";
  instructionsSection.innerText = "";
  inputBar.style.display = "block";
  timerDisplay.innerText = "Timer: ";
  scoreDisplay.innerText = "Score: ";
  inputBar.focus();
  pickWord(_words.words);
  setInterval(countDownTimer, 1000);
  setInterval(gameStatus, 50);
}; //Event listeners


paragraphMode.addEventListener("click", onButtonParagraphClick);
randomWordsMode.addEventListener("click", onButtonRandomClick);
inputBar.addEventListener("input", startGame);