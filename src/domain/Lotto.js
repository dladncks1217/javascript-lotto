const { ERROR } = require('../constants/constants');
const makeLottoString = require('../utils/makeLottoString');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length > 6 || numbers.length < 6)
      throw new Error(ERROR.NUMBER_COUNT_INVALID);
    if (new Set(numbers).size !== 6) throw new Error(ERROR.NUMBER_OVERLAP);
  }

  printLotto() {
    return makeLottoString(this.#numbers);
  }

  // 이 로또 정답 확인
  winCheck(answer, bonusNumber, correctCheck) {
    return correctCheck(this.#numbers, answer, bonusNumber);
  }
}

module.exports = Lotto;
