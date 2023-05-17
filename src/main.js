const { GuessRandomNumber } = require("./random-number-guess");
const { stdRead } = require("./utils");

const main = () => {
  const randomNumber = new GuessRandomNumber();
  console.log(randomNumber.number);
  stdRead(randomNumber.isGuessCorrect.bind(randomNumber), console.log);
}

main();