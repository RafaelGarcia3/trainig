//Generates a random integer between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

//Define the paragraphs for the results 
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

//Define submit button and field to put the number on
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Define the user's guess count and the reset button
let guessCount = 1;
let resetButton;

guessField.focus();

function checkGuess() {
    //Take user's input value
    const userGuess = Number(guessField.value);

    //If is the first guess
    if (guessCount === 1) {
      guesses.textContent = "Previous guesses:";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;
  
    //If the guess is correct
    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHigh.textContent = "";
        setGameOver();
    } 
    
    //If the user don't have more guesses 
    else if (guessCount === 10) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHigh.textContent = "";
        setGameOver();
    } 
    
    //If user's guess is wrong
    else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = "Last guess was too low!";
        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = "Last guess was too high!";
        }
    }
  
    guessCount++;
    guessField.value = "";
    guessField.focus();
}
 
//Add event listiner to the submit button
guessSubmit.addEventListener("click", checkGuess);

//Define style, buttons and attributes when the game is over
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

//Reset attributes and values for a new game
function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll(".resultParagraphs p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
  
  