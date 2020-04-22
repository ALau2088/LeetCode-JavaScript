/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/*
*IOCE
I: array of intervals
O: array of intervals
C: none
E: 0 or 1 element
*EXAMPLES
*PSEUDOCODE
FUNC merge(intervals):
    helper function to sort intervals
    int p1 = 0
    int p2 = 1
    
    // Edge case
    IF intevals.length === 0 OR 1:
        RETURN intervals
    
    WHILE p2 < intervals.length:
        IF end of interval p1 >= start of interval p2:
            set start of interval p2 = start of interval p1
            remove interval p1 from intervals
        ELSE:
            p1++
            p2++
    END WHILE
    RETURN intervals
END FUNC
*/
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  var p1 = 0;
  var p2 = 1;

  if (intervals.length === 0 || intervals.length === 1) {
    return intervals;
  }

  while (p2 < intervals.length) {
    if (intervals[p1][0] < intervals[p2][0]) {
      if (intervals[p1][1] < intervals[p2][0]) {
        p1++;
        p2++;
      } else if (intervals[p1][1] === intervals[p2][0]) {
        intervals[p1][1] = intervals[p2][1];
        intervals.splice(p2, 1);
      } else {
        if (intervals[p1][1] < intervals[p2][1]) {
          intervals[p1][1] = intervals[p2][1];
          intervals.splice(p2, 1);
        } else {
          intervals.splice(p2, 1);
        }
      }
    } else if (intervals[p1][0] === intervals[p2][0]) {
      if (intervals[p1][1] < intervals[p2][1]) {
        intervals[p1][1] = intervals[p2][1];
        intervals.splice(p2, 1);
      } else {
        intervals.splice(p2, 1);
      }
    } else {
      if (intervals[p1][0] < intervals[p2][1]) {
        if (intervals[p1][1] <= intervals[p2][1]) {
          intervals.splice(p1, 1);
        } else {
          intervals[p1][0] = intervals[p2][0];
          intervals.splice(p2, 1);
        }
      } else if (intervals[p1][0] === intervals[p2][1]) {
        intervals[p1][0] = intervals[p2][0];
        intervals.splice(p2, 1);
      } else {
        p1++;
        p2++;
      }
    }
  }

  return intervals;
};
