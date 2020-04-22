/**
 * @param {number} n
 * @return {string[]}
 */

/*
*IOCE*
I: n pairs(int)
O: combinations(arr)
C: none
E: 

*Examples*
Input: 1
Output: "()"

Input: 2
Output: ["(())","()()" ]
Step1: 3
      /    \         \
     ((())) ((       ()()()
              /    \
             (()()) (())()
             
Input: 4
Output: 4
    /           \          \                                                   \
    (((())))    (((        ((                                                  ()     
              /            \        \                                   \       \
          ((()(             (()((  (()(        ()(()())   ()((()))
          /                    /       \
        ((()()))              (()(()(  (()()(
                             /             \
                             (()(()()))   (()()())

Explanation
Step1 Create initial left bracket iterations
Step2 Recursion
          Base cases
          1. no more left brackets add remaining right brackets and return as one combination
          2. no more right brackets is a solution return as one combination
Step3 Return possible combinations

*Pseudocode*

*/
var generateParenthesis = function(n) {
  var solutions = [];

  var recursionRightBrackets = function(
    combination,
    howManyLeftBracketsRemain,
    howManyRightBracketsRemain
  ) {
    // base case - no more Left brackets remaining add remaining right brackets if any
    if (howManyLeftBracketsRemain === 0) {
      while (howManyRightBracketsRemain > 0) {
        combination += ')';
        howManyRightBracketsRemain--;
      }
      console.log();
      return solutions.push(combination);
    }
    // recurse different combinations with right brackets
    var str = ')';
    var leftBracketsInStr =
      howManyRightBracketsRemain - howManyLeftBracketsRemain;
    for (var m = 1; m <= leftBracketsInStr; m++) {
      recursionLeftBrackets(
        combination + str,
        howManyLeftBracketsRemain,
        howManyRightBracketsRemain - m
      );
      str += ')';
    }
  };

  var recursionLeftBrackets = function(
    combination,
    howManyLeftBracketsRemain,
    howManyRightBracketsRemain
  ) {
    // recurse different combinations with left brackets
    var str = '(';
    for (var i = 1; i <= howManyLeftBracketsRemain; i++) {
      recursionRightBrackets(
        combination + str,
        howManyLeftBracketsRemain - i,
        howManyRightBracketsRemain
      );
      str += '(';
    }
  };

  var str = '(';
  for (var i = 1; i <= n; i++) {
    recursionRightBrackets(str, n - i, n);
    str += '(';
  }

  return solutions;
};

console.log(generateParenthesis(3));
