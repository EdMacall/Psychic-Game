var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var compsLetter = compMakesUpLetter();
var key;
var guess;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesText = document.getElementById("guesses-text");

document.onkeyup = function(event) {
  key = event.keyCode;
  if((key > 32 && key < 59) || (key > 64 && key < 91))
  {
	guess = String.fromCharCode(key).toLowerCase();

    if(guess === compsLetter) {
      playerWins();
    }
    else if(guess !== compsLetter) {
      playerGuessWrong();
    }
    updateDisplay();
  }
}

function playerWins() {
  wins++;
  guessesLeft = 9;
  guesses = [];
  compsLetter = compMakesUpLetter();
}

function playerGuessWrong() {
  guessesLeft--;
  guesses.push(guess);

  if(guessesLeft === 0) {
  	playerLosses();
  }
}

function playerLosses() {
  losses++;
  guessesLeft = 9;
  guesses = [];
  compsLetter = compMakesUpLetter();
}

function updateDisplay() {
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  guessesText.textContent = "Your guesses so far: ";
  if(guesses !== undefined && guesses[0] !== undefined) {
    for(var i = 0; i < guesses.length; i++) {
      guessesText.textContent += guesses[i] + ((i < (guesses.length - 1)) ? ", " : ((i === (guesses.length - 2)) ? ", and " : ""));
    }
  }
}

function compMakesUpLetter() {
  return "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*26));
}

