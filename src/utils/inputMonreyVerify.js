const { PRICE } = require('../constants/constants');

const inputMoneyVerify = (input) => {
  if (Number.isNaN(Number(input))) throw new Error('[ERROR]');
  if (Number(input) % PRICE !== 0) throw new Error('[ERROR]');
};

module.exports = inputMoneyVerify;
