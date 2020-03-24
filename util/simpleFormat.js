module.exports = value => {
  const result = parseFloat(parseFloat(value).toFixed(2));
  return result;
};