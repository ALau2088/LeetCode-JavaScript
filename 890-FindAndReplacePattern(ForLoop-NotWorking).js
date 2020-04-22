/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"

// Output: ["mee","aqq"]

/*
FUNC checkWord(word, pattern):
    FOR char in word:
      IF current and previous letter of pattern and current and previous of word does not match:
        RETURN false
    RETURN true

FUNC (words, pattern):
  solutions = []
  FOR word in words:
    // edge case
    IF length of word not equal to length of pattern:
      continue
    IF checkWord:
      add to solutions
  RETURN solutions
*/

function checkWord(word, pattern) {
  if (word.length === 1 && word === pattern) {
    return true;
  }

  if (
    word[0] !== word[word.length - 1] &&
    pattern[0] === pattern[word.length - 1]
  ) {
    return false;
  }

  if (
    word[0] === word[word.length - 1] &&
    pattern[0] !== pattern[word.length - 1]
  ) {
    return false;
  }
  for (var i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1] && pattern[i] === pattern[i - 1]) {
      continue;
    } else if (word[i] !== word[i - 1] && pattern[i] !== pattern[i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

var findAndReplacePattern = function(words, pattern) {
  var solutions = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length !== pattern.length) {
      continue;
    } else {
      if (checkWord(words[i], pattern)) {
        solutions.push(words[i]);
      }
    }
  }
  return solutions;
};
