'use strict';

function randomNr() {
  return Math.floor(Math.random() * 20 + 1);
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let score = 20;
let highscore = 0;
let secretNr = randomNr();

const body = document.body;
// const message = document.querySelector('.message'); //my variant
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const number = document.querySelector('.number');

// //my Variant
// function updateMessage(text) {
//   if (score > 1) {
//     message.textContent = text;
//     score--;
//     scoreText.textContent = score;
//   } else {
//     message.textContent = `☹ You Lose!`;
//     scoreText.textContent = 0;
//     body.classList.add('lose-color');
//   }
// }

// Check the number
check.addEventListener('click', () => {
  const guessNr = Number(document.querySelector('.guess').value);

  //The number is not between 1 and 20
  // if (!guessNr || 1 < guessNr || guessNr > 20) {
  if (1 > guessNr || guessNr > 20) {
    displayMessage('⛔ No Number!');
    // message.textContent = `⛔ No Number!`; //my variant

    //Player Win
  } else if (guessNr === secretNr) {
    displayMessage('🥇 Corect number!');
    // message.textContent = `🥇 Corect number!`; //my variant
    number.textContent = secretNr;
    body.classList.add('win-color');

    //Check and update the Highscore
    if (score > highscore) {
      highscore = score;
      highscoreText.textContent = highscore;
    }

    //The number is too low/Height
  } else if (guessNr !== secretNr) {
    if (score > 1) {
      displayMessage(guessNr < secretNr ? '📉 Too Low!' : '📈 Too Hight!');
      // message.textContent =
      //   guessNr < secretNr ? '📉 Too Low!' : '📈 Too Hight!';
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('😢 You Lose!');
      // message.textContent = `☹ You Lose!`; //my variant
      scoreText.textContent = 0;
      body.classList.add('lose-color');
    }
  }
  //   //The number is too low/Height //my variant
  // } else if (guessNr < secretNr) {
  //   updateMessage('📉 Too Low!');
  // } else if (guessNr > secretNr) {
  //   updateMessage('📈 Too Hight!');
  // }
});

//restart game
again.addEventListener('click', () => {
  score = 20;
  scoreText.textContent = String(score);
  secretNr = randomNr();
  displayMessage('Start guessing...');
  // message.textContent = `Start guessing...`; //my variant
  number.textContent = '?';
  body.classList.remove('win-color');
  body.classList.remove('lose-color');
  document.querySelector('.guess').value = '';
});
