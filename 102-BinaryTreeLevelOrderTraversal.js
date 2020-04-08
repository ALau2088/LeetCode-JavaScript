/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//Space: O(2(children node + currentlevel)) constant
//time: O(n) visit each node
var levelOrder = function (root) {
  const queue = [];
  queue.push({ node: root, currentlevel: 0 });
  const vals = [];
  if (root === null) {
    return [];
  }
  vals[0] = [root.val];

  while (queue.length != 0) {
    let currentNode = queue.shift();

    if (currentNode.node.left) {
      queue.push({
        node: currentNode.node.left,
        currentlevel: currentNode.currentlevel + 1,
      });
      if (!vals[currentNode.currentlevel + 1]) {
        vals[currentNode.currentlevel + 1] = [currentNode.node.left.val];
      } else {
        vals[currentNode.currentlevel + 1].push(currentNode.node.left.val);
      }
    }
    if (currentNode.node.right) {
      queue.push({
        node: currentNode.node.right,
        currentlevel: currentNode.currentlevel + 1,
      });
      if (!vals[currentNode.currentlevel + 1]) {
        vals[currentNode.currentlevel + 1] = [currentNode.node.right.val];
      } else {
        vals[currentNode.currentlevel + 1].push(currentNode.node.right.val);
      }
    }
  }
  return vals;
};
