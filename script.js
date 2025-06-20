//guess a numbere between 1 and 20, type a number on the right side where there is start guessing, it will display either too low or too high,
// the score will continue to reduce after a failed guess, and the score decreases by one
//when a the number is corerct, the screen will turn green and display the number of guesses it took to get the correct answer, and the score will be displayed and the highes score will be displayed

'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20; //state variable since they define the state of an application

let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
};

function checkGuess() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (score > 1) {
      displayMessage (guess > secretNumber ? '📈 Number Too High!' : '📉 Number Too Low!';)
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 👎 You lost the Game')
      document.querySelector('.score').textContent = 0;
    }
  }
}
// add Event Listerners
document.querySelector('.check').addEventListener('click', checkGuess);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') checkGuess();
});

//Reseting using Again! Button

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start Guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
