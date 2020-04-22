/**
 * @param {number[]} nums
 * @return {number}
 */
/*
I: arr int
O: int that appears more than n/2
C: none
E: none because non-empty arr, majority element always exist
*/
// time complexity of O(2n) ~ O(n)-linear
// space complexity of O(n/2) ~O(n)-linear
var majorityElement = function (nums) {
  const counts = {}; // O(n/2) space
  for (let i = 0; i < nums.length; i++) {
    // O(n) time
    if (!counts[nums[i]]) {
      counts[nums[i]] = 1;
    } else {
      counts[nums[i]]++;
    }
  }
  for (let j = 0; j < Object.keys(counts).length; j++) {
    // O(n) time
    if (counts[Object.keys(counts)[j]] > Math.floor(nums.length / 2))
      return Object.keys(counts)[j];
  }
};
