const GAME_MESSAGE = {
  INSERT_PURCHASE_COST: '구입금액을 입력해 주세요.\n',
  PURCHASE_AMOUNT: (count) => `${count}개를 구매했습니다.`,
  INSERT_WIN_NUMBER: '당첨 번호를 입력해 주세요.',
  GET_RANK_STATISTICS: '당첨 통계\n---',
};

const RANK_STATISTICS_MESSAGE = {
  RANK_5: (count) => `3개 일치 (5,000원) - ${count}개`,
  RANK_4: (count) => `4개 일치 (50,000원) - ${count}개`,
  RANK_3: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  RANK_2: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  RANK_1: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

const LOTTERY_PRIZE = {
  0: 0,
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

const CORRECT_NUMBER = {
  0: '0',
  1: '0',
  2: '0',
  3: '5',
  4: '4',
  5: '3',
  6: '2',
  7: '1',
};

const LOTTERY_INFORMATION = {
  COST: 1000,
  LENGTH: 6,
};

module.exports = {
  GAME_MESSAGE,
  RANK_STATISTICS_MESSAGE,
  LOTTERY_INFORMATION,
  LOTTERY_PRIZE,
  CORRECT_NUMBER,
};