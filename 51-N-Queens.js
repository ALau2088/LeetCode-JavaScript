/**
 * @param {number} n
 * @return {string[][]}
 */
/*
*IOCE
I: int n
O: return distinct solutions to n-queens puzzle
C: n >= 2, none time and space
E: n = 2 or n = 3, no solution
*EXAMPLES-ON PAPER
*PSEUDOCODE
FUNC solveNQueens(n):
    ARR solutions
    ARR solution
    FUNC checkHelper
    FUNC possibleSolution
    
    FOR row in rows:
        FOR column in columns:
            
END FUNC

*/
var solveNQueens = function(n) {
  var solutions = [];
  function checkHelper() {}
  function possibleSolution(s) {
    // base case n=4 push solution to solutions
    // base case does not pass check return
    // check with every next possible square
  }

  for (var i = 0; i < n; i++) {
    var solution = [[0, i]];
    // two ways to go about this
    // method one - iterative create your own call stack
    // method two - recursive use the interpreter call stack
    possibleSolution(solution);
  }
};
