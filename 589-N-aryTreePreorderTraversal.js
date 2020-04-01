/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let stack = [];
  let preorderTrav = [];
  stack.push(root);
  while (stack.length !== 0) {
    let currentNode = stack.pop();
    if (currentNode !== null) {
      preorderTrav.push(currentNode.val);
      for (let i = currentNode.children.length - 1; i >= 0; i--) {
        stack.push(currentNode.children[i]);
      }
    }
  }
  return preorderTrav;
};
