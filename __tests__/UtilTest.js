const answerNumberCheck = require('../src/utils/answerNumberCheck');
const calculateEarnMoney = require('../src/utils/calculateEarnMoney');
const correctNumberCount = require('../src/utils/correctNumberCount');
const inputMoneyVerify = require('../src/utils/inputMonreyVerify');
const makeLottoString = require('../src/utils/makeLottoString');
const makeStringToLotto = require('../src/utils/makeStringToLotto');
const verifyAnswerLotto = require('../src/utils/verifyAnswerLotto');

const testcases = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 4, 5],
  [1, 2, 3, 4, 'r', 5],
];

describe('유틸함수 테스트 모음', () => {
  test.each(
    testcases.map((value) => {
      return [value];
    })
  )('입력된 정답 로또 유효성 검사 Error throw', (input) => {
    expect(() => {
      verifyAnswerLotto(input);
    }).toThrow();
  });

  test('로또 정답 입력번호 배열화 후 반환', () => {
    expect(makeStringToLotto('1,2,3,4,5,6')).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('배열상태 로또 요구사항에 맞는 문자열화', () => {
    expect(makeLottoString([1, 2, 3, 4, 5, 6])).toMatch('[1, 2, 3, 4, 5, 6]');
  });

  // makeLotto 추가

  test('구매 로또 금액 예외 발생', () => {
    expect(() => {
      inputMoneyVerify('1001');
    }).toThrow();
    expect(() => {
      inputMoneyVerify('e');
    }).toThrow();
  });

  test('특정 로또 정답 번호 수 반환 유틸함수', () => {
    expect(correctNumberCount([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9])).toBe(3);
  });

  test('로또로 번 금액 반환 유틸함수', () => {
    expect(calculateEarnMoney([10, 9, 8, 1, 1, 0, 0, 0])).toBe(55000);
  });

  test('총 정답 수 반환 유틸함수', () => {
    expect(answerNumberCheck([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9], 1)).toBe(
      4
    );
  });
});
