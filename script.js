import {words} from "./words.js"

//global variables
let time = 11;
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

/**A function that clears the introduction header, the instructions and the buttons when either button is clicked and displays the screen and input bigger. Also add a countdown before the game starts, score and timer. */


const countDownTimer = () => {
    if (time > 0){
        time--;
    }else if (time == 0){
        gameActivity = false
        return
    }
    timerDisplay.innerText = `Timer: ${time}`
}
//** A function to display a random word from the array of words. */
const pickWord = (word) => {
    const randomWord = Math.floor(Math.random() * word.length);
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
const gameOver= () =>{
    congratulationsDisplay.innerText = "Congratulations!!!"
    endMessageDisplay.innerText = `You have typed ${score} words! Keep it up!`
    wordDisplay.innerText="";
    timerDisplay.innerText="";
    scoreDisplay.innerText="";
    messageDisplay.innerText="";
    return
}

const wordMatch = () => {
    // Check if the typed word is matching the displayed word. Turn the typed words into uppercase.
    if (inputBar.value.toUpperCase() === wordDisplay.innerText) {
        messageDisplay.innerText = 'Correct!!!';
        pickWord(words);
        inputBar.value="";
        scoreDisplay.innerText = `Score: ${score++}`;
        return true;
      } else {
        messageDisplay.innerText = '';
        return false;
      };
    
};
const gameStatus = () =>{
    if (!gameActivity && time === 0){
        messageDisplay.innerText ="Time is up!"
        gameOver()
    }
}
function startGame() {
    if (wordMatch()) {
      gameActivity = true;
      pickWord(words);
      inputBar.value = '';
      //score++;
    }
}
const onButtonParagraphClick = (event) => {
   introSection.innerText="";
   instructionsSection.innerText="";
}

//RANDOM WORD GAME
const onButtonRandomClick = (event) => {
    introSection.innerText="";
    instructionsSection.innerText="";
    pickWord(words);
    setInterval(countDownTimer,1000);
    setInterval(gameStatus,50);
    inputBar.addEventListener("input", startGame);
}




/**A reset button to restart the game. */
//Event listeners
paragraphMode.addEventListener("click", onButtonParagraphClick);
randomWordsMode.addEventListener("click", onButtonRandomClick);

