// Trie (prefix tree)
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.children = {}; // 26 elements for each letter of the alphabet
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currentChild = this.children;
  for (let i = 0; i < word.length; i++) {
    if (!currentChild[word[i]]) {
      currentChild[word[i]] = new Trie();
    }
    currentChild = currentChild[word[i]];
  }

  currentChild.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currentChild = this.children;
  for (let i = 0; i < word.length; i++) {
    if (!currentChild[word[i]]) {
      return false;
    }
    currentChild = currentChild[word[i]];
  }
  if (currentChild.isWord) {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currentChild = this.children;
  for (let i = 0; i < prefix.length; i++) {
    if (!currentChild[prefix[i]]) {
      return false;
    }
    currentChild = currentChild[prefix[i]];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
