/**
 * @param {number} n
 * @return {string[][]}
 */
/*
I: int n
O: arr of solutions; each solution []-index represents row, value represents column
C: none
E: n = 0, 2, 3 return 0; n = 1; return 1
*/

// backtracking
// time complexity
// space complexity
var solveNQueens = function (n) {
  // edge cases
  if (n === 0 || n === 2 || n === 3) return [];
  if (n === 1) return [['Q']];

  let solutions = [];
  const _recursion = function (queensRemain, arr) {
    // base case - valid solution
    if (queensRemain === 0) {
      // format solution
      solutions.push(arr);
      return;
    }

    // generate possible column placement for current row
    for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 0; j < n; j++) {
        if (j === i) {
          str += 'Q';
        } else {
          str += '.';
        }
      }
      // check column
      let validColumn = true;
      for (let i = 0; i < arr.length; i++) {
        if (str === arr[i]) {
          validColumn = false;
        }
      }
      // No column and no diagonal conflicts
      if (validColumn && _validDiag([...arr, str])) {
        _recursion(queensRemain - 1, [...arr, str]);
      }
    }
    return;
  };

  const _validDiag = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] === 'Q') {
          // check topright diag
          for (let a = i - 1, b = j + 1; a >= 0 && b < n; a--, b++) {
            if (arr[a][b] === 'Q') return false;
          }
          // check topleft diag
          for (let a = i - 1, b = j - 1; a >= 0 && b > 0; a--, b--) {
            if (arr[a][b] === 'Q') return false;
          }
          // check botright diag
          for (let a = i + 1, b = j + 1; a < arr.length && b < n; a++, b++) {
            if (arr[a][b] === 'Q') return false;
          }
          // check botleft diag
          for (let a = i + 1, b = j - 1; a < arr.length && b > 0; a++, b--) {
            if (arr[a][b] === 'Q') return false;
          }
        }
      }
    }
    return true;
  };

  _recursion(n, [], []);
  return solutions;
};
