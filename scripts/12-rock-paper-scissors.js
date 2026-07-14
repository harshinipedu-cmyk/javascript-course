let score = JSON.parse(localStorage.getItem('score')) || 
{
  wins: 0,
  losses: 0,
  ties: 0
};

updatateScoreElement();

let isAutoPlaying = false;
let intervalId; // left it undefined to start.

function autoPlay(){
  if (!isAutoPlaying){
    intervalId = setInterval(() => { // functions are values that can be saved in a variable.
      //the setInterval() function returns a number.
      const playerMove = pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying = true;
    document.querySelector('.auto-play-button').innerHTML = 'Stop Play'
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.auto-play-button').innerHTML = 'Auto Play'
  }
}

// below are the event listeners for the "click" event.
document.querySelector('.js-rock-button').addEventListener('click',() => playGame('Rock'));
document.querySelector('.js-paper-button').addEventListener('click',() => playGame('Paper'));
document.querySelector('.js-scissors-button').addEventListener('click',() => playGame('Scissors'));

document.querySelector('.js-reset-score-button').addEventListener('click',() => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updatateScoreElement();
});

document.querySelector('.js-auto-play-button').addEventListener('click',() => autoPlay());

//below are the event listeners for on keydown of the first letter of the player move
document.body.addEventListener('keydown',(event) => {
  if (event.key === 'r'){
    playGame('Rock');
  } else if (event.key === 'p'){
    playGame('Paper');
  } else if (event.key === 's') {
    playGame('Scissors');
  }
});

function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';
  
  if (playerMove === 'Scissors'){
    if (computerMove === 'Rock'){
      result = 'You Lose.';
    } else if (computerMove === 'Paper'){
      result = 'You Win.';
    } else if (computerMove === 'Scissors'){
      result = 'Tie.';
    }
  } else if (playerMove === 'Paper'){
    if (computerMove === 'Rock'){
      result = 'You Win.';
    } else if (computerMove === 'Paper'){
      result = 'Tie.';
    } else if (computerMove === 'Scissors'){
      result = 'You Lose.';
    }
  } else {
    if (computerMove === 'Rock'){
      result = 'Tie.';
    } else if (computerMove === 'Paper'){
      result = 'You Lose.';
    } else if (computerMove === 'Scissors'){
      result = 'You Win.';
    }
  }

  if (result === 'You Win.') {
    score.wins += 1;
  } else if (result === 'You Lose.') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }
  
  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You 
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class = "move-icon"> 
  computer`;

  localStorage.setItem('score', JSON.stringify(score));
  updatateScoreElement();
};

function updatateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function pickComputerMove () {
  const randomNumber = Math.random();
  let computerMove= '';

  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissors';
  }

  return computerMove;
};
