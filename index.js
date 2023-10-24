
let cards = [];
let sum = 0;
let message = "";
let hasBlackJack = false;
let isAlive = false;
const MESSAGE_INDICATOR = document.querySelector("#message_indicator");
const CARDS_NUMBER = document.querySelector("#cards_number");
const SUM_CARDS = document.querySelector("#sum_cards");
const START_GAME = document.querySelector("#start_game");
const NEW_CARD = document.querySelector("#new_card");

function renderCard() {
  CARDS_NUMBER.textContent = "cards: "
  for (let i = 0; i < cards.length; i++) {
    CARDS_NUMBER.textContent += cards[i] + " ";
  }

  SUM_CARDS.textContent = "sum: " + sum;
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

function randomCard() {
  let random = Math.floor( Math.random() * 13 ) + 1
  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  } else {
    return random;
  }
}

function newCard() {
  let card = randomCard();
  sum += card;
  cards.push(card);
  newCard();
}

START_GAME.addEventListener("click", () => {
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderCard();
})

NEW_CARD.addEventListener("click", () => {
  if (hasBlackJack === false && isAlive === true) {
    newCard();
  }
  renderCard();
})




