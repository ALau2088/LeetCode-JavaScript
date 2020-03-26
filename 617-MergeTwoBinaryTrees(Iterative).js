/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  const stack = [];
  if (t1 === null) {
    return t2;
  }

  if (t2 === null) {
    return t1;
  }

  stack.push([t1, t2]);

  while (stack.length !== 0) {
    let currentNode = stack.pop();
    if (currentNode[0] !== null && currentNode[1] !== null) {
      currentNode[0]['val'] = currentNode[0]['val'] + currentNode[1]['val'];
    }
    if (currentNode[0]['left'] !== null) {
      if (currentNode[1]['left'] !== null) {
        stack.push([currentNode[0]['left'], currentNode[1]['left']]);
      }
    } else if (currentNode[1] !== null) {
      currentNode[0]['left'] = currentNode[1]['left'];
    }
    if (currentNode[0]['right'] !== null) {
      if (currentNode[1]['right'] !== null) {
        stack.push([currentNode[0]['right'], currentNode[1]['right']]);
      }
    } else if (currentNode[1] !== null) {
      currentNode[0]['right'] = currentNode[1]['right'];
    }
  }
  return t1;
};
