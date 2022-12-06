const { ERROR } = require('../constants/constants');
const OutputView = require('../UI/OutputView');

const verifyAnswerLotto = (lotto) => {
  let set = new Set(lotto);
  if (lotto.length < 6 || lotto.length > 6) {
    OutputView.printNumberCountInvalidError();
    throw new Error(ERROR.NUMBER_COUNT_INVALID);
  }
  if (set.size !== 6) throw new Error(ERROR.NUMBER_OVERLAP);
  lotto.forEach((value) => {
    if (Number.isNaN(Number(value))) {
      OutputView.printNumberOnlyError();
      throw new Error(ERROR.NUMBER_ONLY);
    }
  });
};
module.exports = verifyAnswerLotto;
