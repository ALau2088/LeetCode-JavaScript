/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let sol = [1];
  let l1 = 0,
    l2 = 0,
    l3 = 0;
  while (sol.length < n) {
    sol.push(Math.min(sol[l1] * 2, sol[l2] * 3, sol[l3] * 5));
    if (sol[sol.length - 1] === sol[l1] * 2) l1++;
    if (sol[sol.length - 1] === sol[l2] * 3) l2++;
    if (sol[sol.length - 1] === sol[l3] * 5) l3++;
  }
  return sol[sol.length - 1];
};
