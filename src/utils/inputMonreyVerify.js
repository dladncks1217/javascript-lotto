const { PRICE, ERROR } = require('../constants/constants');

const inputMoneyVerify = (input) => {
  if (Number.isNaN(Number(input))) throw new Error(ERROR.NUMBER_ONLY);
  if (Number(input) % PRICE !== 0) throw new Error(ERROR.INVALID_MONEY_UNIT);
};

module.exports = inputMoneyVerify;
