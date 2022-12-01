const verifyAnswerLotto = (lotto) => {
  let set = new Set(lotto);
  if (set.size !== 6) throw new Error('[ERROR]');
  lotto.forEach((value) => {
    if (Number.isNaN(Number(value))) throw new Error('[ERROR]');
  });
};
module.exports = verifyAnswerLotto;
