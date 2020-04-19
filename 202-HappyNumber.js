/**
 * @param {number} n
 * @return {boolean}
 */
/*
I: int > 0
O: bool true if happy number; squaring digits eventually ends in 1
C: none
E: none

I: 19
O: true
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

I: 9
9^2 = 81
8^2 + 1^2 = 65
6^2 + 5^2 = 61
6^2 + 1^2 = 37
3^2 + 7^2 = 58
5^2 + 8^2 = 89
8^2 + 9^2 = 145
1^1 + 4^2 + 5^2 = 42
4^2 + 2^2 = 20
2^2 + 0^2 = 4
4^2 = 16
1^2 + 6^2  = 37
3^2 + 7^2 = 58
5^2 + 8^2 = 89
cycle return false
use look up table
*/
/*
o(k) time where k is number of times to produce sum of each squared digit
o(k) time space to store sums in a cycle or sum = 1
*/
var isHappy = function (n) {
  let sum;
  let sums = {};
  let digits = n.toString().split('');
  do {
    sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += Math.pow(parseInt(digits[i]), 2);
    }
    // check if digits seen before
    if (sums[sum.toString()]) {
      return false;
    } else {
      sums[sum.toString()] = true;
    }
    digits = sum.toString().split('');
  } while (sum !== 1);

  return true;
};
