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
*IOCE*
I: linkedlist(obj)
O: linkedlist(obj)
C: replace nodes only, return modified self linkedlist
E: 1-empty obj, 2-one node

*EXAMPLES/EXPLANATIONS*
I: 1->2->3->4
O: 2->1->4->3
Step1: make a copy of first node and second node copy1 = 1 copy2 = 2
Step2: set first node as second node and second node as first node 
2->1->2->3->4  
Step3: make a copy of the orginal copy2 next value replace copy of first node and set its next value as copy2 copy1 = copy2.next = 3 copy2 = copy1.next = 4
Step4: set third node as copy2 and fourth node as copy1
2->1->4->3->4
Repeat for as many nodes until copy2 is null then set tail as copy

*PSUEDOCODE*
// Inputs: (head)
// copy1(cpy1)
// copy2(cpy2)
// cpy1 = head, cpy2 = head.next
*/

var swapPairs = function(head) {
  //edge case-empty object
  if (head === {} || head.next === null) {
    return head;
  }

  console.log('hello');
  console.log(head);

  var cpy1 = Object.create(head); //1->2->3->4
  var cpy2 = cpy1.next; // 2->3->4
  head = Object.assign(head, cpy2); // 2->3->4
  head.next = Object.assign(head.next, cpy1); //1->2->3->4 changes head to 2->1->2->3->4
  var currentNode = head;
  currentNode.next = head.next;

  console.log('line56', head);

  cpy1 = cpy2.next; //references back to changed head from line 48 and 49
  cpy2 = cpy1.next; // references back to head

  console.log('line58', cpy1, cpy2);
  debugger;
  // while (cpy1 && cpy2){
  //     currentNode = currentNode.next.next
  //     currentNode = cpy2
  //     currentNode.next = cpy1
  //     cpy1 = cpy2.next;
  //     cpy2 = cpy1.next;
  // }

  // if (cpy2 === null) {
  //   currentNode = currentNode.next.next;
  //   currentNode = cpy2;
  // }

  return head;
};

swapPairs({
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
});
