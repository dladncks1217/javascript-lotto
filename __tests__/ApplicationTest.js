const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 테스트', () => {
  test('기능 테스트', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);
    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe('Application단위 예외 테스트', () => {
  test('구매 금액 예외 테스트', () => {
    mockQuestions(['1000j']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 숫자만 입력 해 주세요.');
  });

  test('당첨 번호 입력 예외 테스트 - 문자 입력', () => {
    mockQuestions(['2000', '1,2,3,4,5,e']);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 숫자만 입력 해 주세요.');
  });

  test('당첨 번호 입력 예외 테스트 - 중복 숫자 입력', () => {
    mockQuestions(['2000', '1,2,3,4,5,5']);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호는 중복되어선 안됩니다.');
  });

  test('당첨 번호 입력 예외 테스트 - 6개 미만 숫자 입력', () => {
    mockQuestions(['2000', '1,2,3,4,5']);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호는 6자리여야 합니다.');
  });

  test('당첨 번호 입력 예외 테스트 - 보너스 번호 문자 입력', () => {
    mockQuestions(['2000', '1,2,3,4,5,6', 'e']);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 숫자만 입력 해 주세요.');
  });

  test('당첨 번호 입력 예외 테스트 - 보너스 번호 문자 입력', () => {
    mockQuestions(['2000', '1,2,3,4,5,6', '5']);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호는 중복되어선 안됩니다.');
  });
});
