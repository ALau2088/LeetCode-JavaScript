/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
I: linkedlist
O: boo
C: constant space
E: empty linkedlist
*/
var hasCycle = function (head) {
  if (head === null) {
    return false;
  }
  let a = head;
  let b = head.next;
  while (a !== null && b !== null) {
    if (a === b) {
      return true;
    } else {
      if (a.next && b.next) {
        a = a.next;
        b = b.next.next;
      } else {
        return false;
      }
    }
  }
  return false;
};
