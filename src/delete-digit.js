const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberString = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < numberString.length; i++) {
    const partBefore = numberString.slice(0, i);
    const partAfter = numberString.slice(i + 1);
    const newNumberString = partBefore + partAfter;
    const newNumber = parseInt(newNumberString, 10);

    maxNumber = Math.max(maxNumber, newNumber);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit,
};
