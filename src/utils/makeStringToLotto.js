const makeStringToLotto = (input) => {
  const values = input.split(',');
  const result = [];
  values.forEach((value) => {
    result.push(Number(value));
  });
  return result;
};

module.exports = makeStringToLotto;
