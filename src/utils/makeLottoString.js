const makeLottoString = (lotto) => {
  return `[${String(lotto).split(',').join(', ')}]`;
};

module.exports = makeLottoString;
