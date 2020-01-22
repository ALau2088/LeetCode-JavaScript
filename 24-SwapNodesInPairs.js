/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
*IOCE
I: linked list
O: swapped linked list
C: cannot modify values only nodes
E: empty list, one node, two nodes, odd number of nodees

*Examples
-On paper
*PSEUDOCODE
FUNC (head):
    currentNodeA (cna) = head
    currentNodeB (cnb) = head.next
    tempNode (tn)
    
    if()
    cnb.next = cna;
    cna.next = null;
    head = cnb
    
    WHILE cna.next AND cnb.next NOT EQ null:
        
        
*/
var swapPairs = function(head) {
  // edge case- empty list
  if (head === null) {
    return null;
  }

  // edge case - 1 nodes
  if (head.next === null) {
    return head;
  }

  let cna = head;
  let cnb = head.next;
  let tn;

  // edge case - 2 nodes
  if (cnb.next === null) {
    cnb.next = cna;
    cna.next = null;
    head = cnb;
    return head;
  }

  tn = cnb.next;
  cnb.next = cna;
  cna.next = tn.next;
  head = cnb;

  while (cna.next !== null && cnb.next !== null && tn) {
    cna = tn;
    cnb = cna.next;
    tn = cnb.next;
    cnb.next = cna;
    if (tn) {
      cna.next = tn.next;
    } else {
      cna.next = null;
    }
  }

  // Edge case-odd number of nodes
  if (tn) {
    cna.next = tn;
  }

  return head;
};

// Test cases
// console.log(
//   swapPairs({
//     val: 1,
//     next: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
//   })
// );

// console.log(
//   swapPairs({
//     val: 1,
//     next: { val: 2, next: { val: 3, next: null } }
//   })
// );

// console.log(
//   swapPairs({
//     val: 1,
//     next: { val: 2, next: null }
//   })
// );
