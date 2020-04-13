/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/*
Since each node needs to be visited, the time complexity is O(n) and since O(h ) function calls will be placed on stack in the worst case. O(h) can be equal to O(n) in worst case therefore the space complexity is O(n)
*/
var invertTree = function (root) {
  // base case- node is null
  if (root === null) {
    return root;
  } else {
    let templeft = invertTree(root.left);
    let tempright = invertTree(root.right);
    root.left = tempright;
    root.right = templeft;
    return root;
  }
};
