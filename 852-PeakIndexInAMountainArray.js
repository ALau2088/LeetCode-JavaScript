/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let i = 0;
  while (i + 1 < A.length && A[i + 1] > A[i]) {
    i++;
  }
  return i;
};
