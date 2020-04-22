/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxHeap = function(k) {
  this.maxNodes = k;
  this.nodes = [];
};

maxHeap.prototype.insert = function(num) {
  /*
  INSERT num to end of nodes
  WHILE currentParentNode exists:
      IF num > currentParentNode:
          swap with ParentNode
          SET currentParentNode level up
  IF number of nodes > k:
      remove last node
    
  RETURN
  */
  this.nodes.push(num);
  console.log(this.nodes);
  let numNodes = this.nodes.length;
  let currentParentNodeIndex = Math.floor(numNodes / 2 - 1);
  let currentNumIndex = this.nodes.length - 1;
  while (this.nodes[currentParentNodeIndex]) {
    if (num > this.nodes[currentParentNodeIndex]) {
      let temp = this.nodes[currentParentNodeIndex];
      this.nodes[currentParentNodeIndex] = num;
      this.nodes[currentNumIndex] = temp;
      currentNumIndex = currentParentNodeIndex;
      currentParentNodeIndex = (currentParentNodeIndex - 2) / 2;
    } else {
      break;
    }
  }

  if (this.nodes.length > this.maxNodes) {
    this.nodes.pop();
  }
  return;
};

var findKthLargest = function(nums, k) {
  let heap = new maxHeap(k);
  for (let i = 0; i < nums.length; i++) {
    heap.insert(nums[i]);
  }
  return heap.nodes[0];
};
