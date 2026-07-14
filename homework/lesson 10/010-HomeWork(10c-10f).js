const buttonElement = document.querySelector('.js-button');
if (buttonElement.classList.contains('js-button')){
  console.log('Yes');
};

function clickDown(item){
  const gamingButtonElement = document.querySelector(item);
  if (!gamingButtonElement.classList.contains('is-toggled')){
    turnOffPreviousButton();
    gamingButtonElement.classList.add('is-toggled');
  } else {
    gamingButtonElement.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}