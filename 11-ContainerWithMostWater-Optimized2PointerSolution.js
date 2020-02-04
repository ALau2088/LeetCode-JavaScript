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

Step1: Set up two pointers. Pointer one is left bound starting at first element and pointer is right bound starting at last element.
Step2: Calculate units of water contained by product of shorter bound and width.

Input: [1,8,6]
Step1 and Step2 same as prev example.
Step3: Determine which pointer is is taller. If pointer one is taller, decrement. pointer two. If pointer two is taller, increment pointer one.
Step4: Compare Vs previous container. If greater than prev container, Return this.
Step5. Repeat 1-4 until until pointer one and pointer two meet.
Step6. Return largest container.

Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]

*PSEUDOCODE*
// FUNC maxArea(height):
  // largestContainer(lc) = min(height[0],height[height.length -1])*(height.length -1)
  // currentContainer(cc)
  // leftBound(lb) = 0
  // rightBound(rb) = height.length - 1
  // WHILE (lb < rb):
    // IF height[lb] < height[rb]:
      //lb++
    // ELSE
      //rb--
    END IF
    // cc = min(height[lb], height[rb])*(rb - lb)
    // IF cc > lc:
      lc = cc
  END WHILE
  // Return lc
// END FUNC
*/
var maxArea = function(height) {
  var lc = Math.min(height[0], height[height.length - 1]) * (height.length - 1);
  var cc;
  var lb = 0;
  var rb = height.length - 1;
  while (lb < rb) {
    if (height[lb] < height[rb]) {
      lb++;
    } else {
      rb--;
    }
    cc = Math.min(height[lb], height[rb]) * (rb - lb);
    if (cc > lc) lc = cc;
  }
  return lc;
};

// Time complexity is optimized from O(n^2) to O(n). Space complexity is O(1).
