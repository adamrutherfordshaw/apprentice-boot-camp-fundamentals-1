const animals = require("./animal.js").Animal;
const { AnimalCard } = require("./animal-card.js");
const { Deck } = require("./deck.js");

class AnimalDeck extends Deck {
  constructor() {
    super();
    for (let animal in animals) {
      this.cards.push(new AnimalCard(animal));
      this.cards.push(new AnimalCard(animal));
    }
  }
}

module.exports = {
  AnimalDeck: AnimalDeck,
};
