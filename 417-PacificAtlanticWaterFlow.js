/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// Using DFS
var pacificAtlantic = function(matrix) {
  let solutions = [];
  function _checkNode(coordinate, y, x) {
    checkRight = true;
    checkDown = true;
    checkLeft = true;
    // check up
    if (y - 1 > 0 && coordinate >= matrix[y - 1][x]) {
      // check right
      if (x + 1 < matrix[0].length && coordinate >= matrix[y][x + 1]) {
        solutions.push([y, x]);
        return;
      }
      checkRight = false;
      // check down
      if (y + 1 < matrix.length && coordinate >= matrix[y + 1][x]) {
        solutions.push([y, x]);
        return;
      }
      checkDown = false;
    }
    // check right
    if (
      checkRight &&
      x + 1 < matrix[0].length &&
      coordinate >= matrix[y][x + 1]
    ) {
      // check left
      if (x - 1 >= 0 && coordinate > matrix[y][x - 1]) {
        solutions.push([y, x]);
        return;
      }
      checkLeft = false;
    }
    // check down
    if (
      checkDown &&
      checkLeft &&
      y + 1 < matrix.length &&
      coordinate >= matrix[y + 1][x]
    ) {
      // check left
      if (x - 1 >= 0 && coordinate >= matrix[y][x - 1]) {
        solutions.push([y, x]);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      _checkNode(matrix[i][j], i, j);
    }
  }
  return solutions;
};
