/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // Using count sort O(n) time; O(n) space
  // sort first: since O(n) time only possible sort can use is count sort
  // find min and max: min = 1; max = 8 O(n)
  // construct array = [null,1,2,2,1,0,0,1,1] O(n)
  // loop thru array and add index with 0 to return arr O(n)

  // const count = [];
  // for (let i = 1; i <= nums.length; i++) {
  //   count[i] = 0;
  // }

  // for (let i = 0; i < nums.length; i++) {
  //   count[nums[i]]++;
  // }

  // const result = [];
  // for (let i = 0; i < count.length; i++) {
  //   if (count[i] === 0) result.push(i);
  // }

  // return result;

  // Using -negative markers and absolute values
  // time o(n); space o(1)
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  var findDisappearedNumbers = function (nums) {
    /*
  ex11
  [4,3,2,7,8,2,3,1]
  []
  nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1] // first time will be negative, second time will be positive
  i = 2
  nums[2] = -2
  i = 5
  nums[2] = 2
   if nums is positive push index 
   
   ex2
   [1,1]
   nums[nums[0]] = -1
   nums[nums[1]] = 1
   
  */
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[Math.abs(nums[i]) - 1] > 0) {
        nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
      }
    }

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > 0) {
        result.push(j + 1);
      }
    }
    return result;
  };
};
