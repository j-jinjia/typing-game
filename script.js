//global variables
let time = 60;
let score = 0;
//DOM elements
const paragraphMode = document.querySelector(".buttons__paragraph");
const randomWordsMode = document.querySelector(".buttons__random");
const inputBar = document.querySelector(".inputBar")
const introSection = document.querySelector(".introdcution")
const instructionsSection = document.querySelector(".instructions")
const timerDisplay = document.querySelector(".scoreBoard__timer");
const scoreDisplay = document.querySelector(".scoreBoard__score")
/**A function that clears the introduction header, the instructions and the buttons when either button is clicked and displays the screen and input bigger. Also add a countdown before the game starts, score and timer. */
onButtonParagraphClick = (event) => {
   introSection.innerText="";
   instructionsSection.innerText="";
}

//RANDOM WORD GAME
onButtonRandomClick = (event) => {
    introSection.innerText="";
    instructionsSection.innerText="";
    timerDisplay.innerText+= ` ${time}`;
    scoreDisplay.innerText+= ` ${score}`
    setInterval(countDownTimer,1000);

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
const countDownTimer = () => {
    console.log("hello1")
    if (time > 0){
        time--;
    }else if (time === 0){
        timerDisplay.innerText ="Time is up!";
    }
    timerDisplay.innerText = `Timer: ${time}`
}


/**A reset button to restart the game. */
//Event listeners
paragraphMode.addEventListener("click", onButtonParagraphClick);
randomWordsMode.addEventListener("click", onButtonRandomClick );

