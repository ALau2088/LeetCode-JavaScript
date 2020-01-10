var mergeTwoLists = function(l1, l2) {
  var cn1 = l1;
  var cn2 = l2;
  var ltr;

  // Edge case-one or two empty linked list
  if (l1 === null && l2 === null) {
    return null;
  } else if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }

  if (l1.val <= l2.val) {
    ltr = l1;
    cn1 = l1.next;
  } else {
    ltr = l2;
    cn2 = l2.next;
  }

  cn3 = ltr;
  while (cn1 !== null && cn2 !== null) {
    if (cn1.val <= cn2.val) {
      cn3.next = cn1;
      cn1 = cn1.next;
    } else {
      cn3.next = cn2;
      cn2 = cn2.next;
    }

    cn3 = cn3.next; // renaming cn3.next
    // cn3.next = cn3.next.next; // incorrect-rewriting object property value
  }
  if (cn1 !== null) {
    cn3.next = cn1;
  }

  if (cn2 !== null) {
    cn3.next = cn2;
  }

  return ltr;
};

// Test cases
// console.log(
//   mergeTwoLists(
//     { val: 1, next: { val: 2, next: { val: 4, next: null } } },
//     { val: 1, next: { val: 3, next: { val: 4, next: null } } }
//   )
// );
