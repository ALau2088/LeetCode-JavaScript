/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/*
I: linkedlist
O: reordered linked list
C: none
E: none

examples
----------
I: 1->2->3->4
O: 1->4->2->3

mid is 3
1->2->4->3
1->4->2->3

I: 1->2->3->4->5
O: 1->5->2->4->3

mid is 3
1->2->5->4->3
1->5->2->4->3


1->2->3
set slow and fast to 1
while slow.next and slow.next.next
    slow = slow.next
    fast = slow.next.next
return mid = slow

1->3->2

psuedocode
----------
find the middle of linkedlist
create a slow pointer that goes one step at a time and fast pointer that goes two step at a time
when the fast pointer reaches end, the slow pointer will be at the middle
reverse the 2nd half
reorder

*/
var reorderList = function (head) {
  // edge case - head is null and head.next is null
  if (head === null || head.next === null) return head;

  // find the middle node
  let slow = head,
    fast = head;
  //while (slow.next && slow.next.next)
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let mid = slow;
  // set last node in first half to null
  let curr = head;
  while (curr.next !== mid) {
    curr = curr.next;
  }
  curr.next = null;

  //console.log('line 63', mid);

  //reverse second half of linkedlist
  curr = mid;
  let prev = null;
  while (curr.next !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  //console.log('line 74', mid, prev, head);
  curr.next = prev;
  mid = curr;
  //console.log('line 76', head, mid, curr);
  curr = head;
  let next;
  while (mid !== null && curr !== null) {
    next = curr.next;
    curr.next = mid;
    mid = mid.next;
    //console.log('line 82', head, curr, next, mid);
    curr.next.next = next;
    //console.log('line 84', head, curr, next, mid);
    curr = next;
    //console.log('line 86', head, curr, next, mid);
  }
  if (mid != null) {
    let curr = head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = mid;
  }
  return head;
};
