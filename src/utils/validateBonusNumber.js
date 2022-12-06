const { ERROR } = require('../constants/constants');
const OutputView = require('../UI/OutputView');

const validateBonusNumber = (answer, inputNumber) => {
  console.log(inputNumber);
  if (Number.isNaN(Number(inputNumber))) {
    OutputView.printNumberOnlyError();
    throw new Error(ERROR.NUMBER_ONLY);
  }
  if (answer.includes(Number(inputNumber))) {
    OutputView.printNumberOverlapError();
    throw new Error(ERROR.NUMBER_OVERLAP);
  }
};

module.exports = validateBonusNumber;
