/**
 * @param {number} N
 * @return {number}
 */
/*
*IOCE
I: int
O: int
C: none
E: n = 0 or 1 return n
*EXAMPLES
Ex1
I: 
O: 
Explanation:
*PSEUDOCODE
FUNC fib(n):
    obj lookUp
    
    // Edge case 
    IF n === 0 OR n === 1 return n
    
    FUNC _fibRecurs(n):
        // base case
        IF n === 0 OR n == 1:
            lookUp[n] = n
            return n
        // base case
        IF lookUp[n]:
            RETURN lookUp[n]
        
        lookUp[n] = _fibRecurs(n-1) + _fibRecurs(n-2)
    
    RETURN _fibRecurs(n-1) + fibRecurs(n-2)
END FUNC
*/
var fib = function(N) {
  var lookUp = {};

  if (N === 0 || N === 1) return N;

  function _fibRecurs(n) {
    if (n === 0 || n === 1) {
      lookUp[n] = n;
      return n;
    }

    if (lookUp[n]) return lookUp[n];

    return _fibRecurs(n - 1) + _fibRecurs(n - 2);
  }

  return _fibRecurs(N - 1) + _fibRecurs(N - 2);
};
