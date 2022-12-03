const Lotto = require('../src/domain/Lotto');
const answerNumberCheck = require('../src/utils/answerNumberCheck');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호는 중복되어선 안됩니다.');
  });

  test('로또 번호가 6자가 아니라면 예외 발생 (유틸함수 오작동 시)', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR] 로또 번호는 6자리여야 합니다.');
  });

  test('출력될 형식으로 로또 번호 반환 기능 테스트(Lotto Domain)', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = lotto.printLotto();
    expect(result).toBe('[1, 2, 3, 4, 5, 6]');
  });

  test('정답과 Lotto Domain의 로또번호 비교 후 맞은 수의 개수를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = lotto.winCheck([3, 4, 5, 6, 7, 8], 9, answerNumberCheck);
    expect(result).toBe(4);
  });
});
