/**
 * @param {string} s
 * @return {string}
 */
/*
    I: str
    O: str
    C:none
    E: none
    iterate thru each word
        iterate thru each letter in word starting from last and create reversed word
        Time complexity of O(n) where n is length of the string
        Space complexity O(n) copy of s
    */
var reverseWords = function (s) {
  let words = s.split(' ');
  for (let i = 0; i < words.length; i++) {
    let reversedWord = '';
    for (let j = words[i].length - 1; j >= 0; j--) {
      reversedWord += words[i][j];
    }
    words[i] = reversedWord;
  }
  return words.join(' ');
};
