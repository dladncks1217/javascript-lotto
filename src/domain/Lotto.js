const OutputView = require('../UI/OutputView');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (new Set(numbers).size !== 6)
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 한다.');
    if (numbers.length !== 6)
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
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
