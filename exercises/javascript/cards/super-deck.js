const { Deck } = require("./deck.js");

class SuperDeck extends Deck {
  constructor(animalDeck, playingDeck) {
    super();
    this.cards = [...animalDeck.cards, ...playingDeck.cards];
  }
}

module.exports = {
  SuperDeck: SuperDeck,
};
