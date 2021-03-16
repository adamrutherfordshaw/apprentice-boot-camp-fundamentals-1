class PlayingCard {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  snap(otherCard) {
    return otherCard && this.value === otherCard.value;
  }

  toString() {
    return this.value + " of " + this.suit;
  }
}
module.exports = {
  PlayingCard: PlayingCard,
};
