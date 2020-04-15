/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
 Time complexity of O(s+t) where s is the length of string s and t is the length of string t
 Space complexity worst case is O(s+t)
 */
var isIsomorphic = function (s, t) {
  const hashSetA = {};
  const hashSetB = {};
  for (let i = 0; i < s.length; i++) {
    if (hashSetA[s[i]]) {
      if (hashSetA[s[i]] !== t[i]) return false;
    } else {
      hashSetA[s[i]] = t[i];
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (hashSetB[t[j]]) {
      if (hashSetB[t[j]] !== s[j]) return false;
    } else {
      hashSetB[t[j]] = s[j];
    }
  }
  return true;
};
