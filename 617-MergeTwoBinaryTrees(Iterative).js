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
  if (t1 !== null && t2 !== null) {
    t1.val = t1.val + t2.val;
  } else if (t1 === null && t2 !== null) {
    return t2;
  } else if (t1 !== null && t2 === null) {
    return t1;
  } else {
    return t1;
  }

  if (t1.left !== null) {
    if (t2.left !== null) {
      stack.push([t1.left, t2.left]);
    }
  } else {
    t1.left = t2.left;
  }
  if (t1.right !== null) {
    if (t2.right !== null) {
      stack.push([t1.right, t2.right]);
    }
  } else {
    t1.right = t2.right;
  }

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
