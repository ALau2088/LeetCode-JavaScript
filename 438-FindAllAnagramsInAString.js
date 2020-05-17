/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/*
I: s (str), p (str)
O: indices where anagram start [arr]
C: none
E: empty s or p return []


Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

psuedocode
-------------------------
hashmap store letters of p and occurences
loop for letter in s
    if p containers letter
        check if p + subsequent length of p-1 letters are in hashmap
            add index of p ti arr of indices
        check if p contains subsquent length of p - 1 letters is anagram with helper
            store in hashmap
            add index of p to arr of indices
return arr of indices

I: p hashmap(obj), s(int), startingindex(int), end index(int)
O: is anagram(bool)
_helper function
    for index of current letter to subsequent length of p -1 check
     hashmap store letters of possible anagram and number of letters 
    loop for comparing letters and count in hashmap of p and possible anagram
        if letter and count does not match return false
    return true
    
time taken: 35min
*/

const _isAna = (hash_P, str, start, end) => {
  const hm_Ana = {};
  for (let i = start; i <= end; i++) {
    if (hm_Ana[str[i]]) {
      hm_Ana[str[i]]++;
    } else {
      hm_Ana[str[i]] = 1;
    }
  }
  for (letter in hash_P) {
    if (hm_Ana[letter] !== hash_P[letter]) return false;
  }
  return true;
};
var findAnagrams = function (s, p) {
  const hmp = {};
  const hmAna = {};
  const sol = [];
  for (let i = 0; i < p.length; i++) {
    if (hmp[p[i]]) {
      hmp[p[i]]++;
    } else {
      hmp[p[i]] = 1;
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (hmp[s[j]]) {
      if (hmAna[s.substring(j, j + p.length)]) {
        sol.push(j);
        continue;
      }
      if (_isAna(hmp, s, j, j + p.length - 1)) {
        hmAna[s.substring(j, j + p.length)] = true;
        sol.push(j);
      }
    }
  }

  return sol;
};
