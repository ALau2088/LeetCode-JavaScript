/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let nodeValues = [];
  let stack = [];
  let currentNode = root;

  while (currentNode !== null || stack.length !== 0) {
    // traverse left child
    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    // traverse parent
    nodeValues.push(currentNode.val);
    // traverse right child
    currentNode = currentNode.right;
  }

  return nodeValues;
};
