const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/constants');

const InputView = {
  inputMyMoney(callback) {
    Console.readLine(MESSAGE.INPUT_MONEY, callback);
  },

  inputAnswer(callback) {
    Console.readLine(MESSAGE.INPUT_ANSWER, callback);
  },

  inputBonus(callback) {
    Console.readLine(MESSAGE.INPUT_BONUS, callback);
  },
};

module.exports = InputView;
