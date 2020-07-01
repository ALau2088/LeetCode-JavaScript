/**
 * @param {number} n
 * @return {number}
 */

/*
n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.

I: int coins
O: int rows
C: none
E: none

psuedocode
---------------
iterative:
while there is enough coins to build next row
        build row
        
binary search and sum of natural numbers:
    (rows(rows+1))/2 <= n
        
math by completing the square(ax^2 + bx + c = 0):
    (rows(rows+1))/2 <= n
    rows(rows+ 1) <= 2n
    rows^2 + rows <= 2n
    rows^2 + rows + (1/2)^2 <= 2n + (1/2)^2
    (rows + 1/2) ^ 2 <= 2n + 1/4
    rows <= sqrt(2n + 1/4) - 1/2
    
    
*/

// iterative approach
var arrangeCoins = function (n) {
  let coinsforNextRow = 1,
    rows = 0;
  // O(k) time where k is the number of rows
  while (n >= coinsforNextRow) {
    rows++;
    n -= coinsforNextRow;
    coinsforNextRow++;
  }
  return rows;
};

// binary search
var arrangeCoins = function (n) {
  let rows,
    low = 0,
    high = n;
  while (low <= high) {
    rows = low + Math.floor((high - low) / 2);
    if ((rows * (rows + 1)) / 2 === n) {
      return rows;
    } else if ((rows * (rows + 1)) / 2 > n) {
      high = rows - 1;
    } else {
      low = rows + 1;
    }
  }
  return high;
};

// math completing the square
// O(1) time
var arrangeCoins = function (n) {
  return Math.floor(Math.sqrt(2 * n + 1 / 4) - 1 / 2);
};
