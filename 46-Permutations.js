/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
*IOCE
I:array of distinct integers
O: array of permutations
C: none
E: empty array, one element
*EXAMPLES-on paper
*PSEUDOCODE
FUNC permute (nums):
    IF nums.length EQ 0:
        RETURN nums
    
    permutations(p) = []
    
    FOR num in nums:
        remainingNums = arr not including num
        _permute([num], remainingNums)
    
    FUNC _permute(permutation, remainingNums):
        // BASE CASE - one element remainingNums
        IF remainingNums.length EQ 1:
            permutation.push(remainingNums[0])
            permutations.push(permutation)
        ELSE:
            FOR num in remainingNums:
                permutation+=num
                remainingNums = arr not including num
            _permute(permutation, remainingNums)
        END IF
    END FUNC
END FUNC
*/
var permute = function(nums) {
  if (nums.length === 0) {
    return nums;
  }

  var p = [];
  var _permute = function(permutation, nums) {
    if (nums.length === 1) {
      permutation.push(nums[0]);
      p.push(permutation);
      return;
    } else {
      for (var j = 0; j < nums.length; j++) {
        var newPermutation = permutation.slice();
        newPermutation.push(nums[j]);
        var remainingNums = nums.slice();
        remainingNums.splice(j, 1);
        _permute(newPermutation, remainingNums);
      }
    }
  };

  // for (var i = 0; i < nums.length; i++) {
  //   var remainingNums = nums.slice();
  //   remainingNums.splice(i, 1);
  //   var permutation = [];
  //   permutation.push(nums[i]);
  //   _permute(permutation, remainingNums);
  // }

  _permute([], nums);
  return p;
};

// Time complexity: Each num in nums will recurse n! time and each recursion takes n time therefore the runtime will be O(n^2*n!)
