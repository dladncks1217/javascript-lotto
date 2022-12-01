const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/constants');

const OutputView = {
  printPurchaseAmount(amount) {
    Console.print(MESSAGE.COUNT_MY_LOTTO(amount));
  },

  printLotto(lotto) {
    Console.print(`[${String(lotto).split(',').join(', ')}]`);
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
};

module.exports = OutputView;
