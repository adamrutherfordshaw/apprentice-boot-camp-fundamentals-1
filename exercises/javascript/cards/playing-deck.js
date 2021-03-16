const { PlayingCard } = require("./playing-card.js");

class PlayingDeck {
  constructor() {
    this.cards = [];
    this.suits = ["clubs", "diamonds", "hearts", "spades"];
    this.values = [
      "ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "jack",
      "queen",
      "king",
    ];

    for (this.suit of this.suits) {
      for (this.value of this.values) {
        this.cards.push(new PlayingCard(this.value, this.suit));
      }
    }
  }

  getCards() {
    let result = new Array(this.cards.length);
    for (let i = 0; i < this.cards.length; i++) {
      let card = this.cards[i];
      result[i] = card.toString();
    }
    return result;
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      let indexA = Math.floor(Math.random() * i);
      let indexB = i;

      let valueA = this.cards[indexA];
      let valueB = this.cards[indexB];

      this.cards[indexA] = valueB;
      this.cards[indexB] = valueA;
    }
  }

  deal() {
    let card = this.cards.splice(0, 1)[0];
    return card;
  }
}

module.exports = {
  PlayingDeck: PlayingDeck,
};
