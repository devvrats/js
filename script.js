'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

let secretnumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretnumber);
let score = 20;
let highscore = 0;

function qury(text1, text) {
  document.querySelector(text1).textContent = text;
}
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //no number
    // document.querySelector('.message').textContent = 'no number';
    qury('.message', 'no number');
  }

  //correct number and winner
  else if (guess === secretnumber) {
    qury('.number', secretnumber);
    qury('.message', 'correct number');

    // document.querySelector('.number').textContent = secretnumber;
    // document.querySelector('.message').textContent = 'correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      qury('.highscore', highscore);
      // document.querySelector('.highscore').textContent = highscore;
    }

    //if number is low
  }
  else if (guess !== secretnumber) {
    qury('.message', guess > secretnumber ? 'High Number' : 'Low Number');
    // document.querySelector('.message').textContent = guess > secretnumber ? 'High Number' : 'Low Number';
    score--;
    qury('.score', score);
    // document.querySelector('.score').textContent = score;
    if (score < 1) {
      qury('.message', 'You lost the game');
      qury('.score', 0);
      // document.querySelector('.message').textContent = 'You lost the game';
      // document.querySelector('.score').textContent = 0;
    }

  }
  // else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'low number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //if number is high
  // } else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'high number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//restore the values
document.querySelector('.again').addEventListener('click', function () {

  qury('.message', 'Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  qury('.score', score);
  // document.querySelector('.score').textContent = score;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretnumber);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
