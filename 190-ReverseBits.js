/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

/*
001
001

001
ret 100

n = 00
input = 00000010100101000001111010011100
n= input
ret = 000000000000000000000000
n = 0000001010010100000111101001110


JavaScript binary are 32-bit signed integers
*/
var reverseBits = function (n) {
  let [ret, pow] = [0, 31];
  while (n) {
    /*
      (n & 1)<< pow needs to be in parentheses because +/- takes precedence over left shift operation
      ret needs to be positive number therefore use Math.abs();
      */
    ret = Math.abs(ret + ((n & 1) << pow));
    n >>>= 1;
    pow -= 1;
  }
  return ret;
};
