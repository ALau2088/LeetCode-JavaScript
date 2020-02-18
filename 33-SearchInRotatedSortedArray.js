/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
*IOCE
I: sorted array rotated around pivot
O: index of target element
C: logarithmic time
E: zero or one element

*EXAMPLES
on paper

*PSEUDOCODE
FUNC (nums, target):        
    left = 0
    right = nums.length - 1
    indexTracker(it) = 0 
    WHILE left <= right:
     pivot = (left + right)/2
     IF target EQ nums[pivot]:
        return indexTracker + pivot
     ELSE IF  target < nums[pivot]:
        IF target < nums[left]:
            left = pivot + 1
            it += pivot
        ELSE:
            right = pivot - 1
     ELSE:
            left = pivot + 1
            it+=pivot
    END WHILE
    RETURN -1
END FUNC
*/

var search = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  while (left <= right) {
    var pivot = Math.floor((left + right) / 2);
    if (target === nums[pivot]) {
      return pivot;
    } else if (target < nums[pivot]) {
      if (target < nums[left]) {
        if (pivot - 1 >= left && nums[pivot - 1] < nums[left]) {
          right = pivot - 1;
        } else {
          left = pivot + 1;
        }
      } else {
        right = pivot - 1;
      }
    } else {
      if (target > nums[right]) {
        if (pivot + 1 <= right && nums[pivot + 1] > nums[right]) {
          left = pivot + 1;
        } else {
          right = pivot - 1;
        }
      } else {
        left = pivot + 1;
      }
    }
  }
  return -1;
};
