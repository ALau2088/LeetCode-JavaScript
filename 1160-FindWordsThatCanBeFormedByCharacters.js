/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
/*
I: arr of word strs
O: int count
C: 1<=words<=1000
E: 1<=100

Examples-paper
PsuedoCode:
func (words, chars){
count = 0;
construct chars look up
iterate thru words:
    if chars contains all letters in string:
        ADD number of letters to count
return count
}
*/
var countCharacters = function(words, chars) {
  var lookup = {};
  var count = 0;
  for (var i = 0; i < chars.length; i++) {
    var currentLetter = chars[i];
    if (!lookup[currentLetter]) {
      lookup[currentLetter] = true;
    } else {
      lookup[currentLetter]++;
    }
  }
  for (var i = 0; i < words.length; i++) {
    var lookupCopy = JSON.parse(JSON.stringify(lookup));
    var allLettersInChars = true;
    for (var j = 0; j < words[i].length; j++) {
      var currentLetter = words[i][j];
      if (!lookupCopy[words[i][j]]) {
        allLettersInChars = false;
      } else {
        lookupCopy[words[i][j]]--;
      }
    }
    if (allLettersInChars === true) {
      count += words[i].length;
    }
  }
  return count;
};
