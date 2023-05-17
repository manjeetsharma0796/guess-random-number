const {instructionCycle} = require('./utils.js');

class GuessRandomNumber {
  #randomNumber 

  constructor() {
    this.#randomNumber = this.#generateRandomNumber();
  }

  #generateRandomNumber() {
   return Math.floor(Math.random() * 5);
  }

  isGuessCorrect(guess) {
    return this.#randomNumber === guess;
  }

  get number() {
    return this.#randomNumber;
  }

}

exports.GuessRandomNumber = GuessRandomNumber;