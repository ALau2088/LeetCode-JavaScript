/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.children = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  /*
 I: str
 O: none
 C:o(n)
 E: all inputs non-empty, lowercase letters only
 Examples:
 "apple"
 1. use ascii values for letter char
 2. Check if ascii value exists at current level.If Exists Repeat check for next level. 
 Else add subsequent letters at each level.  
 */
  let i = 0;
  let currentNode = this.children;
  while (i < word.length) {
    if (!currentNode[word.charCodeAt(i)]) {
      break;
    } else {
      currentNode = currentNode[word.charCodeAt(i)].children;
      i++;
    }
  }

  if (i < word.length) {
    while (i < word.length) {
      console.log(currentNode);
      console.log('line 39', this);
      currentNode[word.charCodeAt(i)] = { children: {} };
      currentNode = currentNode[word.charCodeAt(i)].children;
      i++;
    }
  }
  console.log(this);
  return;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  /*
  WHILE i < word.length:
      IF char[i] not exists at currentLevel:
          RETURN false
      ELSE:
      continue
  RETURN true
  */
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  /*
  Same as search except check one more level down to see if last char has children
  */
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
