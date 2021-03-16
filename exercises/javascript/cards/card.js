class Card {
  constructor(value) {
    this.value = value;
  }

  snap(otherCard) {
    return otherCard && this.value === otherCard.value;
  }
}

module.exports = {
  Card: Card,
};
