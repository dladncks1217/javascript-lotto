const { ERROR } = require('../constants/constants');

const verifyAnswerLotto = (lotto) => {
  let set = new Set(lotto);
  if (lotto.length < 6 || lotto.length > 6)
    throw new Error(ERROR.NUMBER_COUNT_INVALID);
  if (set.size !== 6) throw new Error(ERROR.NUMBER_OVERLAP);
  lotto.forEach((value) => {
    if (Number.isNaN(Number(value))) throw new Error(ERROR.NUMBER_ONLY);
  });
};
module.exports = verifyAnswerLotto;
