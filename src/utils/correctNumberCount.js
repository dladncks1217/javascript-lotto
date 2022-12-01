const correctNumberCount = (number, answer) => {
  let count = 0;
  number.forEach((value, index) => {
    if (answer.includes(value)) count += 1;
  });
  return count;
};

module.exports = correctNumberCount;
