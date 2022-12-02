const { ERROR } = require('../constants/constants');
const OutputView = require('../UI/OutputView');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (new Set(numbers).size !== 6) throw new Error(ERROR.NUMBER_OVERLAP);
    if (!(numbers.lenth !== 6)) throw new Error(ERROR.NUMBER_COUNT_INVALID);
  }

  printLotto() {
    OutputView.printLotto(this.#numbers);
  }

  // 이 로또 정답 확인
  winCheck(answer, correctCheck, bonusNumber) {
    return correctCheck(this.#numbers, answer, bonusNumber);
  }
}

module.exports = Lotto;
