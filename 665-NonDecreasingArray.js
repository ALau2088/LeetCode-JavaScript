/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
I: arr nums
O: bool modify one digit to get a non-decreasing array
C: 
E: one element
*/

const isNonDecrease = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return true;
};

var checkPossibility = function (nums) {
  // edge case- 1 element
  if (nums.length === 1) return true;

  for (let i = 0; i < nums.length; i++) {
    // first element is greater
    let temp = nums[i];
    if (i === 0) {
      if (nums[i] > nums[i + 1]) {
        nums[i] = nums[i + 1];
        if (isNonDecrease(nums)) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      // following element
      nums[i] = nums[i - 1];
      if (isNonDecrease(nums)) {
        return true;
      } else {
        nums[i] = temp;
      }
    }
  }
  return false;
};

// solution 2 -time complexity of O(n)

var checkPossibility = function (nums) {
  let decreasingAllowed = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      decreasingAllowed--;
      if (
        i < nums.length - 1 &&
        nums[i - 1] > nums[i + 1] &&
        nums[i - 2] > nums[i]
      )
        return false; // cannot change i and i - 1
    }
    if (decreasingAllowed < 0) {
      return false;
    }
  }
  return true;
};
