/**
 * @param {number} n
 * @return {number}
 */
/*
I: int n
O: int replacements
C: none
E: n = 1;
FUNC integerReplacement(n):
    minSteps = null;
    
    IF n === 1:
        return 0
    ELSE :
        recursion(n,0)
    
    RETURN minSteps
*/
var integerReplacement = function(n) {
  var minSteps = null;
  function recursion(number, currentSteps) {
    // base case: IF number === 1 compare minSteps
    if (number === 1) {
      if (currentSteps < minSteps || minSteps === null) {
        minSteps = currentSteps;
      }
      return;
    }

    if (number % 2 === 0) {
      recursion(number / 2, ++currentSteps);
    } else {
      recursion(number - 1, ++currentSteps);
      recursion(number + 1, ++currentSteps);
    }
    return;
  }

  if (n === 1) {
    return 0;
  } else {
    recursion(n, 0);
  }
  return minSteps;
};
