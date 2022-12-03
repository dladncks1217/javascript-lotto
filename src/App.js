const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./domain/Lotto');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const makeLotto = require('./utils/makeLotto');
const makeStringToLotto = require('./utils/makeStringToLotto');
const answerNumberCheck = require('./utils/answerNumberCheck');
const calculateEarnMoney = require('./utils/calculateEarnMoney');
const { PRICE } = require('./constants/constants');
const inputMoneyVerify = require('./utils/inputMonreyVerify');
const verifyAnswerLotto = require('./utils/verifyAnswerLotto');

class App {
  #lottoCount;
  #myLottoList;
  #answerNumber;
  #bonusNumber;

  play() {
    InputView.inputMyMoney((input) => {
      inputMoneyVerify(input);
      this.#lottoCount = input / PRICE;
      this.#myLottoList = Array.from({ length: this.#lottoCount }, () => 0);
      return this.purchaseLotto();
    });
  }

  purchaseLotto() {
    const printLotteries = Array.from({ length: this.#lottoCount }, () => 0);
    OutputView.printPurchaseAmount(this.#lottoCount);
    for (let index = 0; index < this.#lottoCount; index++) {
      this.#myLottoList[index] = new Lotto(makeLotto());
      printLotteries[index] = this.#myLottoList[index].printLotto();
    }
    OutputView.printLotteries(printLotteries);
    return this.inputAnswer();
  }

  inputAnswer() {
    InputView.inputAnswer((input) => {
      this.#answerNumber = makeStringToLotto(input);
      verifyAnswerLotto(this.#answerNumber);
      return this.inputBonus();
    });
  }

  inputBonus() {
    InputView.inputBonus((input) => {
      this.#bonusNumber = Number(input);
      return this.rankCount();
    });
  }

  rankCount() {
    const correctCount = Array(8).fill(0);
    this.#myLottoList.forEach((lotto) => {
      const result = lotto.winCheck(
        this.#answerNumber,
        this.#bonusNumber,
        answerNumberCheck
      );
      correctCount[result] += 1;
    });
    return this.printResult(correctCount);
  }

  printResult(correctCount) {
    OutputView.printResult(
      correctCount,
      calculateEarnMoney,
      this.#lottoCount * PRICE
    );
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
