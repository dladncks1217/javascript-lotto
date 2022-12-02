const MESSAGE = {
  INPUT_MONEY: '구입금액을 입력해 주세요.',
  INPUT_ANSWER: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS: '보너스 번호를 입력해 주세요.',
  COUNT_MY_LOTTO: (count) => `${count}개를 구매했습니다.`,
  RESULT: (five, four, three, two, one, rate) =>
    `3개 일치 (5,000원) - ${five}개\n4개 일치 (50,000원) - ${four}개\n5개 일치 (1,500,000원) - ${three}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${two}개\n6개 일치 (2,000,000,000원) - ${one}개\n총 수익률은 ${rate}%입니다.`,
};
const PRICE = 1000;

const ERROR = {
  NUMBER_OVERLAP: '[ERROR] 로또 번호는 중복되어선 안됩니다.',
  NUMBER_COUNT_INVALID: '[ERROR] 로또 번호는 6자리여야 합니다.',
  NUMBER_ONLY: '[ERROR] 숫자만 입력 해 주세요.',
  INVALID_MONEY: '[ERROR] 숫자만 입력해주세요.',
  INVALID_MONEY_UNIT: '[ERROR] 금액의 단위가 맞지 않습니다.',
};

module.exports = { MESSAGE, PRICE, ERROR };
