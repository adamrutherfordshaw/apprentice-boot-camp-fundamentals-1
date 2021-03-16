const { Card } = require("./card.js");

class PlayingCard extends Card {
  constructor(value, suit) {
    super(value);
    this.suit = suit;
  }

  toString() {
    return this.value + " of " + this.suit;
  }
}
module.exports = {
  PlayingCard: PlayingCard,
};
