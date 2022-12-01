const { Random } = require('@woowacourse/mission-utils');

const makeLotto = () => {
  const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  numbers.sort((a, b) => a - b);
  return numbers;
};

module.exports = makeLotto;
