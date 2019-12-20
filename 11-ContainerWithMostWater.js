/**
 * @param {number[]} height
 * @return {number}
 */

/*
*IOCE*
I: integers(arr)
O: max units of water(int)
C: length of integers at least 2
E: none

*EXAMPLES*
Input: [1,8]
Output: 1

Step1: left bound is first element and right bound is second element.
Step2: Units of water contained equals product of shorter bound and 1.

Input: [1,8,6]
Step1 and Step2 same as prev example.
Step3: Set new left bound to second element and right bound to third element and repeat Step1 and Step2.
Step4: Compare Vs previous container. If greater than prev container, Return this.

Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
Step1thru4 same as prev example.
Step5: Repeat step1thru4 for all elements. Keep track of greatest container.


*PSEUDOCODE*
// largestContainer(lc)
// currentContainer(cc)
// leftBound(lb)
// rightBound(rb)
// FOR length of integers:
  // set leftBound
  // FOR length - 1 of integers:
   // set rightBound
   // Determine cc by Multiply minimum of leftBound and rightBound by distance between leftBound and Right
   // IF cc greater than lc, lc equal cc
// Return largestContainer
*/
var maxArea = function(height) {
  var lc = 0;
  var cc;
  var lb;
  var rb;
  for (var i = 0; i < height.length; i++) {
    cc = 0;
    lb = height[i];
    for (var j = i + 1; j < height.length; j++) {
      rb = height[j];
      cc = Math.min(lb, rb) * (j - i);
      if (cc > lc) {
        lc = cc;
      }
    }
  }
  return lc;
};
