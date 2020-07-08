/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*

sort in descending order and return element at kth index
depending on what sorting algorithm is used time complexity can vary between O(n) -> O(n^2)

selection sort and insertion sort - O(n^2) time 
quicksort - O(nlogn) time average, O(n^2 worst)
mergesort - O(nlogn) time and O(n) space
heapsort - O(nlogn) time
countsort - O(n) time and O(n) space

traverse thru array and keep track of elements in min heap
each iteration might need to do both insert and delete which are both logk time each
O(n*(logk + logk)) = O(2nlogk) ~ O(nlogk) time, O(k) space

heaps insertion- add to end of heap to maintain complete tree
heaps deletion-remove root and reorder top down

examples
--------------
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

heap of 4 elements max

1233
2233
2334
3345
3445
4456

return 4

psuedocode
-----------------------
for num in nums
    insert num to heap
    if heap size > k and num > root of heap
        delete root
return root
        

*/
var findKthLargest = function (nums, k) {
  let minHeap = [];
  // O(n) time
  for (let i = 0; i < nums.length; i++) {
    // insert num to heap, O(logk) time
    minHeap.push(nums[i]);
    let c = minHeap.length - 1;
    while (c > 0) {
      let p = Math.floor((c - 1) / 2);
      if (minHeap[c] < minHeap[p]) {
        let temp = minHeap[c];
        minHeap[c] = minHeap[p];
        minHeap[p] = temp;
      }
      c = p;
    }
    if (minHeap.length > k) {
      // delete root from heap
      minHeap[0] = minHeap[minHeap.length - 1];
      minHeap.pop();
      let p = 0;
      while (2 * p + 1 <= minHeap.length) {
        let lc = 2 * p + 1; // left child
        let rc = 2 * p + 2; // right child
        // if left and right child
        if (minHeap[lc] && minHeap[rc]) {
          if (minHeap[lc] <= minHeap[rc]) {
            if (minHeap[p] > minHeap[lc]) {
              let temp = minHeap[p];
              minHeap[p] = minHeap[lc];
              minHeap[lc] = temp;
              p = lc;
            } else {
              break;
            }
          } else {
            if (minHeap[p] > minHeap[rc]) {
              let temp = minHeap[p];
              minHeap[p] = minHeap[rc];
              minHeap[rc] = temp;
              p = rc;
            } else {
              break;
            }
          }
        } else if (minHeap[lc]) {
          if (minHeap[p] > minHeap[lc]) {
            let temp = minHeap[p];
            minHeap[p] = minHeap[lc];
            minHeap[lc] = temp;
            p = lc;
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
  }
  return minHeap[0];
};
