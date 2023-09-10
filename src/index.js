module.exports = function reverse (n) {
  let result = ``;
  let number = Math.abs(n).toString();
  for (let i = number.length; i !== 0; i--) {
    result = `${result}${number[i - 1]}`;
  };
  return Number(result)
};