/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/*
I: binary tree
O: tree with connected next
C: O(1), recursion
E:

examples
--------------------
1
this.next = recurse(this.left)


[1]

[2,3]

[4,5,7]
if arr[i+1] next is arr[i+1] else null

if queue not empty recurse

recursion
if queue empty return
else 
for nodes queue
    connect
    generate next level nodes
recurse next level



*/

var connect = function (root) {
  const _recursion = function (queue) {
    if (queue.length === 0 || queue[0] === null) {
      return root;
    } else {
      let newQ = [];
      for (let i = 0; i < queue.length; i++) {
        if (queue[i + 1]) {
          queue[i].next = queue[i + 1];
        }
        if (queue[i].left) newQ.push(queue[i].left);
        if (queue[i].right) newQ.push(queue[i].right);
      }
      _recursion(newQ);
    }
  };
  _recursion([root]);
  return root;
};
