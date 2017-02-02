var randomNumber = Math.floor(Math.random() * 50) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var container = document.querySelector('.container');
var win = new Audio('cor.mp3');
var lose = new Audio('wrong.mp3');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

guessField.focus();

function checkGuess() {
var userGuess = Number(guessField.value);
if(guessCount === 1) {
   guesses.textContent = 'Previous Guesses: ';    
}

guesses.textContent += userGuess + ' ';

if(userGuess === randomNumber){
win.play();
lastResult.textContent = 'Congrats! You got it right!';
lastResult.style.backgroundColor = 'green';
container.style.backgroundColor = '#9CF7A1';
lowOrHi.textContent = '';
setGameOver();    
} else if(guessCount === 10) {
lose.play();
lastResult.textContent = 'Sorry! Game over';
container.style.backgroundColor = '#F78A8A';
lowOrHi.textContent = '';
setGameOver();
} else {
lastResult.textContent = 'Wrong guess, try again!';
lastResult.style.backgroundColor = 'red';
if(userGuess < randomNumber) {
lowOrHi.textContent = 'Last guess was too low!';
} else if (userGuess > randomNumber) {
lowOrHi.textContent = 'Last guess was too high!'; 
 
    
} 


}



guessCount++;
guessField.value = '';
guessField.focus();

}


guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
guessField.disabled = true;
guessSubmit.disabled = true;
resetButton = document.createElement('button');
resetButton.textContent = 'Start New Game?';
document.body.appendChild(resetButton);
resetButton.addEventListener('click', resetGame);
}

function resetGame() {
guessCount = 1;
var resetParas = document.querySelectorAll('.resultParas p');
for(var i = 0; i < resetParas.length; i++) {
resetParas[i].textContent = '';      

}

resetButton.parentNode.removeChild(resetButton);

guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value = '';
guessField.focus();
container.style.backgroundColor = '#D5B6E8';
lastResult.style.backgroundColor = '#D5B6E8';

randomNumber = Math.floor(Math.random() * 50) + 1;

}


//audio 

var sound = new Audio()
sound.src = "sound.mp3"


















