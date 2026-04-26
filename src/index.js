module.exports = function reverse(n) {
  let result = ``;
  const number = Math.abs(n).toString();
  for (let i = number.length; i !== 0; i -= 1) {
    result = `${result}${number[i - 1]}`;
  }
  return Number(result);
};
