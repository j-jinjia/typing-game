import {words, HappyMessage} from "./words.js"

//global variables
let time = 100;
let score = 0;
let gameActivity;
//DOM elements
const paragraphMode = document.querySelector(".buttons__paragraph");
const randomWordsMode = document.querySelector(".buttons__random");
const inputBar = document.querySelector("#input");
const introSection = document.querySelector(".introdcution");
const instructionsSection = document.querySelector(".instructions");
const wordDisplay = document.querySelector(".gameSettings__screenDisplay");
const timerDisplay = document.querySelector(".scoreBoard__timer");
const scoreDisplay = document.querySelector(".scoreBoard__score");
const messageDisplay = document.querySelector(".scoreBoard__message");
const congratulationsDisplay = document.querySelector(".endScreen__header");
const endMessageDisplay = document.querySelector(".endScreen__message");


//PARAGRAPH GAME
const onButtonParagraphClick = (event) => {
   introSection.innerText="";
   instructionsSection.innerText="";
}

//RANDOM WORD GAME

/** A function that creates and displays a timer.*/
const countDownTimer = () => {
    if (time > 0){
        time--;
    }else if (time == 0){
        gameActivity = false;
    };
    timerDisplay.innerText = `Timer: ${time}`
};
//** A function to display a random word from the array of words. */
const pickWord = (word) => {
    const randomWord = Math.floor(Math.random() * word.length);
    wordDisplay.innerText = word[randomWord];
};
const pickHappyMessage = (word) => {
    const randomWord = Math.floor(Math.random() * word.length);
    messageDisplay.innerText = word[randomWord];
};

/** GameOver Screen. A function that changes the HTML tags for game ending screen. Displays the words typed and a message */
const gameOver= () =>{
    congratulationsDisplay.innerText = "Congratulations!!!"
    endMessageDisplay.innerText = `You have typed ${score} words! Keep it up!`
    wordDisplay.innerText="";
    timerDisplay.innerText="";
    scoreDisplay.innerText="";
    messageDisplay.innerText="";
    inputBar.style.display="none";
}
/** A function that checks whether the word typed matches word displayed. If so, add 1 to the score and display a new word from the array*/
const wordMatch = () => {
    if (inputBar.value.toUpperCase() === wordDisplay.innerText) {
        pickHappyMessage(HappyMessage);
        pickWord(words);
        inputBar.value="";
        score++;
        scoreDisplay.innerText = `Score: ${score}`;
      } else {
        messageDisplay.innerText = '';
      };
    
};
/** Checks if if the timer is 0 and wether the game is active. And calls game over function */
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
/** Start all the functions when Random Game mode is triggered.Timer,display word, focus on input bar, and event listener on input for this game mode. */
const onButtonRandomClick = (event) => {
    introSection.innerText="";
    instructionsSection.innerText="";
    inputBar.style.display="block";
    timerDisplay.innerText="Timer: ";
    scoreDisplay.innerText="Score: "
    inputBar.focus();
    pickWord(words);
    setInterval(countDownTimer,1000);
    setInterval(gameStatus,50);
    
};

//Event listeners
paragraphMode.addEventListener("click", onButtonParagraphClick);
randomWordsMode.addEventListener("click", onButtonRandomClick);
inputBar.addEventListener("input", startGame);

