const { Card } = require("./card.js");

class AnimalCard extends Card {
  constructor(value) {
    super(value);
  }

  toString() {
    return this.value.toString();
  }
}

module.exports = {
  AnimalCard: AnimalCard,
};
