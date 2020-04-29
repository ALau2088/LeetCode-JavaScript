/**
 * @param {number} numRows
 * @return {number[][]}
 */
// time complexity is times that sum operation took place O(n(n+1)/2) ~ O(n^2)
// space complexity is O(n^2) store all sums
// dynamic programming
var generate = function (numRows) {
  const pt = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      pt.push([1]);
    } else if (i === 1) {
      pt.push([1, 1]);
    } else {
      let currentRow = [1, 1];
      // sums of previous rows.
      for (let j = 1; j < pt[i - 1].length; j++) {
        currentRow.splice(j, 0, pt[i - 1][j] + pt[i - 1][j - 1]);
      }
      pt.push(currentRow);
    }
  }
  return pt;
};
