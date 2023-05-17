const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const isEqual = (value1, value2) => {
  return value1 === value2;
};

const validator = (callBackFn) => {
  process.stdin.setEncoding('utf-8');
  const stdScannerID = setInterval(() => {
    const data = +process.stdin.read();
    if(data) {
      const randomNumber = generateRandomNumber();
      console.log(randomNumber);
      const result = callBackFn(data, randomNumber);
      console.log(result);
    }  
  }, 300);
};

validator(isEqual, generateRandomNumber());