"use strict";

var _words = require("./words.js");

var time = 11;
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
var endMessageDisplay = document.querySelector(".endScreen__message");
/**A function that clears the introduction header, the instructions and the buttons when either button is clicked and displays the screen and input bigger. Also add a countdown before the game starts, score and timer. */

var countDownTimer = function countDownTimer() {
  if (time > 0) {
    time--;
  } else if (time == 0) {
    gameActivity = false;
    return;
  }

  timerDisplay.innerText = "Timer: ".concat(time);
}; //** A function to display a random word from the array of words. */


var pickWord = function pickWord(word) {
  var randomWord = Math.floor(Math.random() * word.length);
  wordDisplay.innerText = word[randomWord];
};
/**A function that checks whether the input text matches the word displayed.
 * if the word doesn't match : show red colour in input and word screen.
 * if the word matches: show green colour in input and word screen.
 */

/**A function that starts after enter button is clicked
 * if the word is correct, display the next word
 * if the word is incorrect, keep the same word. 
 */


var gameOver = function gameOver() {
  congratulationsDisplay.innerText = "Congratulations!!!";
  endMessageDisplay.innerText = "You have typed ".concat(score, " words! Keep it up!");
  wordDisplay.innerText = "";
  timerDisplay.innerText = "";
  scoreDisplay.innerText = "";
  messageDisplay.innerText = "";
  inputBar.style.display = "none";
};

var wordMatch = function wordMatch() {
  if (inputBar.value.toUpperCase() === wordDisplay.innerText) {
    messageDisplay.innerText = 'Correct!!!';
    pickWord(_words.words);
    inputBar.value = "";
    score++;
    scoreDisplay.innerText = "Score: ".concat(score);
  } else {
    messageDisplay.innerText = '';
  }

  ;
};

var gameStatus = function gameStatus() {
  if (!gameActivity && time === 0) {
    messageDisplay.innerText = "Time is up!";
    gameOver();
  }
};

var startGame = function startGame() {
  if (wordMatch()) {
    gameActivity = true;
    pickWord(_words.words);
    inputBar.value = '';
  }
};

var onButtonParagraphClick = function onButtonParagraphClick(event) {
  introSection.innerText = "";
  instructionsSection.innerText = "";
}; //RANDOM WORD GAME


var onButtonRandomClick = function onButtonRandomClick(event) {
  introSection.innerText = "";
  instructionsSection.innerText = "";
  inputBar.style.display = "block";
  inputBar.focus();
  pickWord(_words.words);
  setInterval(countDownTimer, 1000);
  setInterval(gameStatus, 50);
  inputBar.addEventListener("input", startGame);
};
/**A reset button to restart the game. */
//Event listeners


paragraphMode.addEventListener("click", onButtonParagraphClick);
randomWordsMode.addEventListener("click", onButtonRandomClick);