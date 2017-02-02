var ranArray = [10, 12, 20, 21, 30, 34, 40, 46, 50, 52, 60, 67, 70, 75, 80, 83, 90, 98, 100][Math.floor(Math.random() * 19)]; 

var tries = document.querySelector('.tries');
var lastAnswer = document.querySelector('.lastAnswer');
var ansRange = document.querySelector('.ansRange');
var container = document.querySelector('.container');
var win = new Audio('cor.mp3');
var lose = new Audio('wrong.mp3');

var guessInput = document.querySelector('.guessInput');
var guessBox = document.querySelector('.guessBox');
var guessCount = 1;
var buttonReset;

guessBox.focus();

function guessCheck() {
var userTry = Number(guessBox.value);
if(guessCount === 1) {
   tries.textContent = 'Previous Guesses: '; 
}

tries.textContent += userTry + ' ';
if(userTry === ranArray){
win.play();    
lastAnswer.textContent = 'Congrats! You got it right!';
lastAnswer.style.background = '#08BE00';
container.style.backgroundColor = '#840747';
ansRange.textContent = '';
startGameOver();
} else if(guessCount === 6) {
lose.play();
lastAnswer.textContent = 'Sorry, game over!';
container.style.backgroundColor = "#2D0D48";
ansRange.textContent = '';
startGameOver()
} else {
lastAnswer.textContent = 'Wrong guess, try again!';
lastAnswer.style.backgroundColor = 'red';
if (userTry < ranArray) {
ansRange.textContent = 'Last guess was too low!';
} else if (userTry > ranArray) {
ansRange.textContent = 'Last guess was too high!';
    
}
}

guessCount++;
guessBox.value = '';
guessBox.focus();

}

guessInput.addEventListener('click', guessCheck);

function startGameOver(){
guessBox.disabled = true;
guessInput.disabled = true;
buttonReset = document.createElement ('button');
buttonReset.textContent = 'Start New Game?'
document.body.appendChild(buttonReset);
buttonReset.addEventListener('click', gameReset);
}

function gameReset() {
guessCount = 1;
var paraReset = document.querySelectorAll('.paraResult p');
for (var i = 0; i < paraReset.length; i++) {
    
 paraReset[i].textContent = '';   
    
}
    
buttonReset.parentNode.removeChild(buttonReset);    

guessBox.disabled = false;
guessInput.disabled = false;
guessBox.value = '';
guessBox.focus();
container.style.backgroundColor = ' #830c82';
lastAnswer.style.backgroundColor = ' #830c82';

ranArray = [10, 12, 20, 21, 30, 34, 40, 46, 50, 52, 60, 67, 70, 75, 80, 83, 90, 98, 100][Math.floor(Math.random() * 19)]; 

}

//audio 

var sound = new Audio()
sound.src = "sound.mp3"















