class Deck {
  constructor() {
    this.cards = [];
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
  Deck: Deck,
};
