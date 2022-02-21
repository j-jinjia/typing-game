//global variables
//DOM elements
const paragraphMode = document.querySelector(".gameMode1");
const randomWordsMode = document.querySelector(".gameMode2");
const inputBar = document.querySelector(".inputBar")
//functions
/**A function that clears the introduction header, the instructions and the buttons when either button is clicked and displays the screen and input bigger. Also add a countdown before the game starts, score and timer. */
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
onRandomWordButtonClick = () => {

}

onParagraphButtonClick =() => {
}
//Event listeners
paragraphMode.addEventListener("click", onParagraphButtonClick);
randomWordsMode.addEventListener("click", onRandomWordButtonClick);
