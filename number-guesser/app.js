/*
GAME FUNCTION:
- Player must guess a number between min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
	max = 10,
	winningNum = getRandomNum(min, max),
	guessesLeft = 3;

// UI Elements
const gameUI = document.querySelector('#game'),
	  minNumUI = document.querySelector('.min-num'),
	  maxNumUI = document.querySelector('.max-num'),
	  guessBtnUI = document.querySelector('#guess-btn'),
	  guessInputUI = document.querySelector('#guess-input'),
	  messageUI = document.querySelector('.message');

// Assign UI min and max
minNumUI.textContent = min;
maxNumUI.textContent = max;

// Listen for guess
guessBtnUI.addEventListener('click', function () {
	let guess = parseInt(guessInputUI.value);

// Listen for play again
gameUI.addEventListener('mousedown', function (e) {
	if(e.target.className === 'play-again') {
		window.location.reload();
	}
});

	// Validate
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	} else {
		// Check if won
		if (guess === winningNum) {
		// Game over - won
		gameOver(true, `${winningNum} is correct, YOU WIN!`);
		} else {
		// Wrong number
		guessesLeft -= 1;

		if (guessesLeft === 0) {
			// Game over - lost
			gameOver(false, `Game Over, You lost. The correct number was ${winningNum}.`)

		} else {
			// Game contionues - answer wrong 
			// Change border color
			guessInputUI.style.borderColor = 'orange';
			// Clear input
			guessInputUI.value = '';
			// Set message
			setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'orange');
			}
		}
	}


});

// Game over
function gameOver (won, msg) {

	let color;
	won === true ? color = 'green' : color = 'red';
	// Disable input
	guessInputUI.disabled = true;
	// Change border color
	guessInputUI.style.borderColor = color;
	// Set message
	setMessage(msg, color);

	// Play again?
	guessBtnUI.value = 'Play Again?';
	guessBtnUI.className += 'play-again';
}

// Get winning number
function getRandomNum (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage (msg, color) {
	messageUI.style.color = color;
	messageUI.textContent = msg;
}