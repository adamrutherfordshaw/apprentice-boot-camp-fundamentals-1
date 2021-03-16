const { PlayingCard } = require("./playing-card.js");
const { Deck } = require("./deck.js");

class PlayingDeck extends Deck {
  constructor() {
    super();
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
}

module.exports = {
  PlayingDeck: PlayingDeck,
};
