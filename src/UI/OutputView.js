const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('../constants/constants');

const OutputView = {
  printPurchaseAmount(amount) {
    Console.print(MESSAGE.COUNT_MY_LOTTO(amount));
  },

  printLotteries(lottoList) {
    Console.print(lottoList.join('\n'));
  },

  printResult(array, calculateEarnMoney, startMoney) {
    const earnMoney = calculateEarnMoney(array);
    printMessage = MESSAGE.RESULT(
      array[3],
      array[4],
      array[5],
      array[6],
      array[7],
      ((earnMoney / startMoney) * 100).toFixed(1)
    );
    Console.print(printMessage);
  },

  printNumberOnlyError() {
    Console.print(ERROR.NUMBER_ONLY);
  },

  printInvalidMoneyUnitError() {
    Console.print(ERROR.INVALID_MONEY_UNIT);
  },

  printNumberOverlapError() {
    Console.print(ERROR.NUMBER_OVERLAP);
  },

  printNumberCountInvalidError() {
    Console.print(ERROR.NUMBER_COUNT_INVALID);
  },
};

module.exports = OutputView;
