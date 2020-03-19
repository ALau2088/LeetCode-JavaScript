function checkWord(word, pattern) {
  var hashMap1 = {};
  var hashMap2 = {};
  for (let i = 0; i < word.length; i++) {
    if (!hashMap1[word[i]]) hashMap1[word[i]] = pattern[i];
    if (!hashMap2[pattern[i]]) hashMap2[pattern[i]] = word[i];
    if (hashMap1[word[i]] !== pattern[i] || hashMap2[pattern[i]] !== word[i])
      return false;
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
