const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const numRows = matrix.length;
  const numColumns = matrix[0].length;

  for (let columnIndex = 0; columnIndex < numColumns; columnIndex++) {
      for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
          if (matrix[rowIndex][columnIndex] === 0) {
              break;
          }
          sum += matrix[rowIndex][columnIndex];
      }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
