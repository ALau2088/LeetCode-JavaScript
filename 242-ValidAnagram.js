/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var sLetters = {};
  var tLetters = {};

  // Edge case
  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (!sLetters[letter]) {
      sLetters[letter] = 1;
    } else {
      sLetters[letter]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (!tLetters[letter]) {
      tLetters[letter] = 1;
    } else {
      tLetters[letter]++;
    }
  }

  for (let i = 0; i < Object.keys(sLetters).length; i++) {
    let occurencesOfCurrentLetterInS = sLetters[Object.keys(sLetters)[i]];
    let occurencesOfCurrentLetterInT = tLetters[Object.keys(sLetters)[i]];
    if (occurencesOfCurrentLetterInS !== occurencesOfCurrentLetterInT) {
      return false;
    }
  }
  return true;
};

// Time Complexity O(n) and Space Complexity At most 26 keys O(26) ~ O(1)
