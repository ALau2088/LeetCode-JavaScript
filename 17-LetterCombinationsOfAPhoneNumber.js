/**
 * @param {string} digits
 * @return {string[]}
 */

/*
*IOCE*
Input: num(str)
Output:strings(arr)
Constraints:none
Edge cases: 1 does not map to any numbers

*Examples*
Input: '23'
Output:

Step1: Map numbers to corresponding letters on keypad
2 ->abc
3->def

Step2: Determine all possible letter combinations
a -> ad, ae, af
b -> bd, be, bf
c -> cd, ce, cf

Inputs: '234'
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] x ["g", "h", "i"]
Repeat Step2

*PSEUDOCODE*
// numStr(ns) 
// mapDigitsToLettersObj(mdlo) {2:'abc', 3:'def', ...}
// digitsLettersArr(dla)
// possibleCombinationsArr(pca)
// tempArrToStorePreviouspco(ta)

// Edge Cases-Empty String
// IF numStr EQUALS '' RETURN ''

// FOR num IN ns: push mdlo[num] TO dla 
  
// FOR letter in pca[0]: push letter to pca 

// i:element in dla >1
// WHILE length of dla:
// ta = pca
// pco = []
// j: letter in element i;
// k: letter in element i +1;
// FOR length of ta
  // FOR length of dla[i + 1]
    // push ta[i][j] + ta[i+1][k] to pca
//i+2

// RETURN pca
*/

var letterCombinations = function(digits) {
  var mdlo = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  var dla = [];
  var pca = [];
  var ta;

  // Edge Case: empty string
  if (digits.length === 0) return [];

  for (var a = 0; a < digits.length; a++) {
    // Edge case digit equals 1
    if (digits[a] !== 1) dla.push(mdlo[digits[a]]);
  }

  // Set up pca for first element in dla
  for (var b = 0; b < dla[0].length; b++) {
    pca.push(dla[0][b]);
  }

  var i = 1;
  console.log(dla);
  while (i < dla.length) {
    ta = pca;
    pca = [];
    for (var j = 0; j < ta.length; j++) {
      for (var k = 0; k < dla[i].length; k++) {
        pca.push(ta[j] + dla[i][k]);
      }
    }
    i++;
  }

  return pca;
};
