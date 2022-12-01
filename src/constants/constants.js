const MESSAGE = {
  INPUT_MONEY: '구입금액을 입력해 주세요.',
  INPUT_ANSWER: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS: '보너스 번호를 입력해 주세요.',
  COUNT_MY_LOTTO: (count) => `${count}개를 구매했습니다.`,
  RESULT: (five, four, three, two, one, rate) =>
    `3개 일치 (5,000원) - ${five}개\n4개 일치 (50,000원) - ${four}개\n5개 일치 (1,500,000원) - ${three}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${two}개\n6개 일치 (2,000,000,000원) - ${one}개\n총 수익률은 ${rate}%입니다.`,
};
const PRICE = 1000;

module.exports = { MESSAGE, PRICE };
