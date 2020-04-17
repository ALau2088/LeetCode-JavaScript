/**
 * @param {number} n
 * @return {number}
 */

/*
 
I: int
O: int
C: none
E: 0 or 1 return 0,

I:10
O: 4

2 -> 2 = 2 -> prime
3 -> 3 % 2 = 1 -> prime
4 -> 4 % 2 = 0 -> not prime
5 -> 5 % 2 = 1 -> prime
6 -> not prime
7 -> not prime
8 -> not prime
9 ->  9 % 3 = 0 -> not prime

time: O(n*n^1/2) time
space: O(n)

*/

var countPrimes = function (n) {
  if (n === 0 || n === 1 || n === 2) {
    return 0;
  } else {
    let primeCount = 0;
    for (let i = 2; i < n; i++) {
      let primeNumber = true;
      let j = 2;
      while (j <= Math.floor(Math.sqrt(i))) {
        if (i % j === 0) {
          primeNumber = false;
          break;
        } else {
          j++;
        }
      }
      if (primeNumber) primeCount++;
    }
    return primeCount;
  }
};
