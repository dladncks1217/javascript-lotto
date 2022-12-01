const calculateEarnMoney = (count) => {
  let result = 0;
  const money = [0, 0, 0, 5000, 50000, 1500000, 30000000, 2000000000];
  count.forEach((value, index) => {
    result += money[index] * value;
  });
  return result;
};

module.exports = calculateEarnMoney;
