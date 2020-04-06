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
  const _inorderTraversal = function (root) {
    // base case
    if (root === null) {
      return;
    }

    // traverse left child
    if (root.left) {
      _inorderTraversal(root.left);
    }

    // traverse parent
    nodeValues.push(root.val);

    // traverse right child
    if (root.right) {
      _inorderTraversal(root.right);
    }

    return;
  };
  _inorderTraversal(root);
  return nodeValues;
};

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
  stack.push(root);
  let currentNode = root;
  // edge case
  if (!root) {
    return [];
  }

  while (stack.length !== 0) {
    // traverse left child
    if (currentNode.left) {
      stack.push(currentNode.left);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop();
      // traverse parent
      nodeValues.push(currentNode.val);
      // traverse right child
      if (currentNode.right) {
        stack.push(currentNode.right);
        currentNode = currentNode.right;
      }
    }
  }

  return nodeValues;
};
