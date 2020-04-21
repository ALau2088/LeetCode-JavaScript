/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
I: arr, k index to cut
O: rotated arr
C: O(1)
E: none

Ex:
make copy of arr
each element move k spaces to the right
O(n) space to make copy of arr

O(1) remember one element at a time
[1,2,3] k = 2
remember 2
[1,1,3]
remember 3
[1,1,2]
[3,1,2] swap one by one up to n times

remember 1
[3,3,2]

remember 2
[3,3,1]

[2,3,1]

repeat for next steps up to k

time complexity is O(n*k) where k is the number of steps
space complexity is O(1)
*/
var rotate = function (nums, k) {
  for (let i = 1; i <= k; i++) {
    let temp1 = nums[0];
    for (let j = 0; j < nums.length; j++) {
      if (j + 1 < nums.length) {
        let temp2 = nums[j + 1];
        nums[j + 1] = temp1;
        temp1 = temp2;
      } else {
        // last element
        nums[0] = temp1;
      }
    }
  }
  return nums;
};
