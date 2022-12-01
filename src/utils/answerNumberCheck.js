const answerNumberCheck = (mynumber, answer, bonusnumber) => {
  let count = 0;
  let bonusCheck = false;
  mynumber.forEach((value) => {
    if (value === bonusnumber || answer.includes(value)) count += 1;
  });
  if (count === 6 && !bonusCheck) return count + 1;
  return count;
};

module.exports = answerNumberCheck;
