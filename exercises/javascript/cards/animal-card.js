let AnimalCard = class AnimalCard {
  constructor(animal) {
    this.value = animal;
  }
};

AnimalCard.prototype.snap = function (otherCard) {
  return otherCard && this.value === otherCard.value;
};

AnimalCard.prototype.toString = function () {
  return this.value.toString();
};

module.exports = {
  AnimalCard: AnimalCard,
};
