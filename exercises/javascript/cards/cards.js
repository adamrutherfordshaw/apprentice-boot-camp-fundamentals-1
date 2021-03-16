class Deck {
  constructor() {
    this.cards = [];
    this.suits = ["clubs", "diamonds", "hearts", "spades"];
  }

  returnCards(requiredSuits) {
    if (requiredSuits.length != 0) this.suits = requiredSuits;
    this.createCards();
    return this.cards;
  }

  createCards() {
    for (this.suit of this.suits) {
      for (let val = 1; val <= 13; val++) {
        this.cards.push(new Card(val, this.suit).formatCard());
      }
    }
  }
}

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  formatCard() {
    if (this.value === 1) this.value = "ace";
    else if (this.value === 11) this.value = "jack";
    else if (this.value === 12) this.value = "queen";
    else if (this.value === 13) this.value = "king";

    return this.value + " of " + this.suit;
  }
}

module.exports = {
  Deck: Deck,
};
