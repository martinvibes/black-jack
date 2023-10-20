
let firstCard = newCard();
let secondCard = newCard();
let sum = firstCard + secondCard;
let message = "";
let hasBlackJack = false;
let isAlive = false;
const MESSAGE_INDICATOR = document.querySelector("#message_indicator");
const CARDS_NUMBER = document.querySelector("#cards_number");
const SUM_CARDS = document.querySelector("#sum_cards");
const START_GAME = document.querySelector("#start_game");
const NEW_CARD = document.querySelector("#new_card");

function renderCard() {
  CARDS_NUMBER.textContent = "cards: " + firstCard + " " + secondCard;
  SUM_CARDS.textContent = "cards: " + sum;
  if (sum < 21) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "wohoo you've got black jack !!!";  
    hasBlackJack = true;
  } else {
    message = "you're out of the game!";
    isAlive = false;
  }

  MESSAGE_INDICATOR.textContent = message;
}

function newCard() {
  let random = Math.floor( Math.random() * 13 ) + 1
  return random;
}

START_GAME.addEventListener("click", () => {
  renderCard()
})


