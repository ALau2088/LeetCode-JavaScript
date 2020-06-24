/**
 * @param {number[]} nums
 * @return {number}
 */

/*
examples
-------------
Input: [2,2,1]
Output: 1
brute force explanation:
count numbers and store in hashmap
return number with 1 count
linear runtime, linear space
bit manipulation explanation
start with store 2-bit binary number 00
first two
2 = 10
XOR ^
10 ^ 00 = 10
second two 
10 ^ 10 = 00
first 1 = 01
00 ^ 01 = 01
return 01 = 1
linear runtime, constant space

Input: [4,1,2,1,2]
Output: 4

start with 000
4 = 100
100 ^ 000 = 100
1 = 001
001 ^ 100 = 101
2 = 010
010 ^ 101 = 111
1 = 001
001 ^ 111 = 110
2 = 010
010 ^ 110 = 100
return 4 = 100
*/
var singleNumber = function (nums) {
  let binary = 0;
  for (let i = 0; i < nums.length; i++) {
    binary ^= nums[i];
  }
  return binary;
};
