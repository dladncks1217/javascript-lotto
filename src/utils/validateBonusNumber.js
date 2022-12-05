const { ERROR } = require('../constants/constants');

const validateBonusNumber = (answer, inputNumber) => {
  console.log(inputNumber);
  if (Number.isNaN(Number(inputNumber))) throw new Error(ERROR.NUMBER_ONLY);
  if (answer.includes(Number(inputNumber)))
    throw new Error(ERROR.NUMBER_OVERLAP);
};

module.exports = validateBonusNumber;
