/**
 * @param {number} k
 * @param {number[]} nums
 */

var KthLargest = function(k, nums) {
  _mergeSort = function(arr, start, end) {
    if (start < end) {
      let mid = Math.floor((start + end) / 2);
      _mergeSort(arr, start, mid);
      _mergeSort(arr, mid + 1, end);
      _merge(arr, start, mid, end);
    }
    return arr;
  };
  _merge = function(arr, start, mid, end) {
    let i = start;
    let j = mid + 1;
    let tempArr = [];
    while (i < mid + 1 && j <= end) {
      if (arr[i] > arr[j]) {
        tempArr.push(arr[j]);
        j++;
      } else {
        tempArr.push(arr[i]);
        i++;
      }
    }
    if (i < mid + 1) {
      for (; i < mid + 1; i++) {
        tempArr.push(arr[i]);
      }
    }
    for (let i = 0; i < tempArr.length; i++) {
      arr[start + i] = tempArr[i];
    }
  };

  this.k = k;
  this.nums = _mergeSort(nums, 0, nums.length - 1);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  //Binary Search
  if (this.nums.length === 1) {
    if (val < this.nums[0]) {
      this.nums.unshift(val);
    } else {
      this.nums.push(val);
    }
  }

  let start = 0;
  let end = this.nums.length - 1;
  let pivot = Math.floor((end - start) / 2);
  while (start < end) {
    if (val >= this.nums[pivot] && val <= this.nums[pivot + 1]) {
      this.nums.splice(pivot + 1, 0, val);
      return this.nums[this.nums.length - this.k];
    } else if (val < this.nums[pivot]) {
      end = pivot;
    } else if (val > this.nums[pivot]) {
      start = pivot + 1;
    }
    pivot = Math.floor((end - start) / 2) + start;
  }
  // if new pivot is last element:
  //if val > pivot: add to end of arr and return
  if (pivot === this.nums.length - 1) {
    this.nums.push(val);
    return this.nums[this.nums.length - this.k];
  }
  // if new pivot is zero:
  // if val < pivot add to front and return
  if (pivot === 0) {
    this.nums.unshift(val);
    return this.nums[this.nums.length - this.k];
  }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

debugger;
var testCase = new KthLargest(7, [-10, 1, 3, 1, 4, 10, 3, 9, 4, 5, 1]);

console.log(testCase.nums);
