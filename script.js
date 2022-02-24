import {words} from "./words.js"

//global variables
let time = 10;
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

/**A function that clears the introduction header, the instructions and the buttons when either button is clicked and displays the screen and input bigger. Also add a countdown before the game starts, score and timer. */
//** A function to display a random word from the array of words. */
const countDownTimer = () => {
    if (time > 0){
        time--;
    }else if (time == 0){
        gameActivity = false
    }
    timerDisplay.innerText = `Timer: ${time}`
}
const pickWord = (word) => {
    const randomWord = Math.floor(Math.random() * word.length);
    wordDisplay.innerText = word[randomWord];
};
const wordMatch = () => {
    // Check if the typed word is matching the displayed word. Turn the typed words into lowercase.
    if (inputBar.value === wordDisplay.innerText) {
        messageDisplay.innerText = 'Correct!!!';
        return true;
      } else {
        messageDisplay.innerText = '';
        return false;
      };
    
};
const gameStatus = () =>{
    if (!gameActivity && time === 0){
        messageDisplay.innerText ="Time is up!"
        score = -1
    }
}
function startGame() {
    if (wordMatch()) {
      isPlaying = true;
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
/**A function that checks whether the input text matches the word displayed.
 * if the word doesn't match : show red colour in input and word screen.
 * if the word matches: show green colour in input and word screen.
 */

/**A function that starts after enter button is clicked
 * if the word is correct, display the next word
 * if the word is incorrect, keep the same word. 
 */
/**A function that sets a timer. When it reaches 0, end the game
 * display ending screen with a sentence.
 * "Game Over: You have typed X words in x minutes. Well done!
 */


/**A reset button to restart the game. */
//Event listeners
paragraphMode.addEventListener("click", onButtonParagraphClick);
randomWordsMode.addEventListener("click", onButtonRandomClick);

