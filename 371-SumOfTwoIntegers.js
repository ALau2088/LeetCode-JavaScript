/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  var sum = a;
  if (b > 0) {
    for (var i = 0; i < b; i++) {
      sum++;
    }
  } else if (b < 0) {
    for (var i = 0; i > b; i--) {
      sum--;
    }
  }
  return sum;
};

/* Using bitwise AND and XOR operators*/
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

/* 

JavaScript uses 32bit binary numbers
 Example
 a = 1, b = 2
 sum = 1

 carry = 01 & 10 = 00
 sum = 01 ^ 10 = 11
 b = 00

 return sum = 11 = 3

 Example2
 a = 2, b = 2
 sum = 2

 carry = 010 & 010 = 010
 sum = 010 ^ 010 = 000
 b = 100

 carry = 000 & 100 = 100
 sum = 000 ^ 100 = 100
 b = 000

 return sum = 100 = 4

 AND truth table XOR truth table
  0 1            0 1
0|0 0          0|0 1
1|0 1          1|1 0
 */
var getSum = function(a, b) {
  var sum = a,
    carry,
    b;
  while (b !== 0) {
    carry = sum & b;
    sum = sum ^ b;
    b = carry << 1;
  }
  return sum;
};
