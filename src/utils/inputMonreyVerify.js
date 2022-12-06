const { PRICE, ERROR } = require('../constants/constants');
const OutputView = require('../UI/OutputView');

const inputMoneyVerify = (input) => {
  if (Number.isNaN(Number(input))) {
    OutputView.printNumberOnlyError();
    throw new Error(ERROR.NUMBER_ONLY);
  }
  if (Number(input) % PRICE !== 0) {
    OutputView.printInvalidMoneyUnitError();
    throw new Error(ERROR.INVALID_MONEY_UNIT);
  }
};

module.exports = inputMoneyVerify;
