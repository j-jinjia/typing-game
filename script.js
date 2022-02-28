import {words, CheeringMessage} from "./words.js"

//global variables
let time = 10;
let score = 0;
let gameActivity;


//DOM elements
const randomWordsMode = document.querySelector(".buttons__random");
const inputBar = document.querySelector("#input");
const introSection = document.querySelector(".introdcution");
const instructionsSection = document.querySelector(".instructions");
const wordDisplay = document.querySelector(".gameSettings__screenDisplay");
const timerDisplay = document.querySelector(".scoreBoard__timer");
const scoreDisplay = document.querySelector(".scoreBoard__score");
const messageDisplay = document.querySelector(".message");
const congratulationsDisplay = document.querySelector(".endScreen__header");
const endMessageDisplay = document.querySelector(".endScreen__message");

//RANDOM WORD GAME

/** A function that creates and displays a timer.*/
const countDownTimer = () => {
    if (time > 0){
        time--;
    }else if (time == 0){
        gameActivity = false;
    };
    timerDisplay.innerText = `Time: ${time}`
};
//** A function to display a random word from the array of words. */
const pickWord = (word) => {
    const randomWord = Math.floor(Math.random() * word.length);
    wordDisplay.innerText = word[randomWord];
};
//** A function to display a random word from the array of messages. */
const pickCheeringMessage = (message) => {
    const randomMessage = Math.floor(Math.random() * message.length);
    messageDisplay.innerText = message[randomMessage];
};

/** GameOver Screen. A function that changes the HTML tags for game ending screen. Displays the words typed and a message */

const gameOver= () =>{
    if (score == null) return
    if (score == 0){
        congratulationsDisplay.innerText = "Em..."
        endMessageDisplay.innerText = `You didn't type any word... It's ok...`
        wordDisplay.style.display="none";
        timerDisplay.style.display="none";
        scoreDisplay.style.display="none";
        messageDisplay.style.display="none";
        inputBar.style.display="none";
    };
    if (score > 0){
        congratulationsDisplay.innerText = "Congratulations!!!"
        endMessageDisplay.innerText = `You have typed ${score} words! Keep it up!`
        wordDisplay.style.display="none";
        timerDisplay.style.display="none";
        scoreDisplay.style.display="none";
        messageDisplay.style.display="none";
        inputBar.style.display="none";
    };
};
/** A function that checks whether the word typed matches word displayed. If so, add 1 to the score and display a new word from the array*/
const wordMatch = () => {
    if (inputBar.value.toUpperCase() === wordDisplay.innerText) {
        pickCheeringMessage(CheeringMessage);
        pickWord(words);
        inputBar.value="";
        score++;
        scoreDisplay.innerText = `Score: ${score}`;
      } else {
        messageDisplay.innerText = '';
      };
};
/** Checks if the timer is 0 and wether the game is active. And calls game over function */
const gameStatus = () =>{
    if (!gameActivity && time === 0){
        gameOver(); 
    };
};
/**Start the game function. Display word from array. */
const startGame = () => {
    if (wordMatch()) {
      gameActivity = true;
      pickWord(words);
      inputBar.value = '';
    };
};
/** Start all the functions when Random Game mode is triggered.Timer,display word, focus on input bar, clkearing messages and diplaying scores. */
const onButtonRandomClick = () => {
    introSection.innerText="";
    instructionsSection.style.display="none";
    inputBar.style.display="block";
    timerDisplay.innerText="Time: 60 ";
    scoreDisplay.innerText="Score: 0";
    inputBar.focus();
    pickWord(words);
    setInterval(countDownTimer,1000);
    setInterval(gameStatus,50);
    
};

//Event listeners
randomWordsMode.addEventListener("click", onButtonRandomClick);
inputBar.addEventListener("input", startGame);

