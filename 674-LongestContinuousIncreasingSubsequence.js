/**
 * @param {number[]} nums
 * @return {number}
 */
/*
I: arr nums
O: int cont
C: none
E: empty nums, last element is continous
*/
var findLengthOfLCIS = function(nums) {
  let maxContinuous = 0;
  let continuous = 1;
  //

  if (nums.length === 0) {
    return 0;
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      continuous++;
    } else {
      if (continuous > maxContinuous) {
        maxContinuous = continuous;
      }
      continuous = 1;
    }
  }
  // last element is continuous
  if (continuous > maxContinuous) {
    maxContinuous = continuous;
  }
  return maxContinuous;
};
