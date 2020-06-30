/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

/*
Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]

word = oath
find o
match at board[0][0]
check right 
match a at board[0][1]
check right 
no match
check down
match t at board[1][1]


Why use trie?

example:
["aaaaaaaaab", "aaaaaaaaac"]
dont need to recheck aaaaaaaaa

board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

psuedocode
------------------------------
create a trie for storing words
    

backtracking
create a check matrix of size board 
for each letter go thru trie                              
    recursion
    

recursion(trie position, current row and column position)
    if current position is out of bounds 
        return
    if trie position is end of word
        add w
    if trie position matches current row and column position
        mark check matrix
        recurse right
        recurse bottom
        recurse left 
        recurse top    
        unmark check matrix
*/
// create trie
const Trie = function () {
  this.children = {};
};

Trie.prototype.insert = function (word) {
  let currentChildren = this.children;
  for (let i = 0; i < word.length; i++) {
    if (!currentChildren[word[i]]) {
      currentChildren[word[i]] = {};
    }
    currentChildren = currentChildren[word[i]];
  }
  currentChildren.isEnd = true;
};

Trie.prototype.isWord = function (word) {
  let currentChildren = this.children;
  for (let i = 0; i < word.length; i++) {
    if (!currentChildren[word[i]]) {
      return false;
    } else {
      currentChildren = currentChildren[word[i]];
    }
  }
  if (currentChildren.isEnd) {
    return true;
  } else {
    return false;
  }
};

Trie.prototype.isPrefix = function (pre) {
  let currentChildren = this.children;
  for (let i = 0; i < pre.length; i++) {
    if (!currentChildren[pre[i]]) {
      return false;
    } else {
      currentChildren = currentChildren[pre[i]];
    }
  }
  return true;
};

var findWords = function (board, words) {
  let output = [];

  // create trie
  let trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i]);
  }

  // create check
  let check = [];
  for (let r = 0; r < board.length; r++) {
    check[r] = [];
    for (let c = 0; c < board[0].length; c++) {
      check[r][c] = false;
    }
  }

  const recursion = (word, r, c, Trie) => {
    if (
      r >= board.length ||
      r < 0 ||
      c >= board[0].length ||
      c < 0 ||
      check[r][c]
    )
      return;

    if (
      Trie.isWord(word + board[r][c]) &&
      !output.includes(word + board[r][c])
    ) {
      output.push(word + board[r][c]);
    }
    if (Trie.isPrefix(word + board[r][c])) {
      check[r][c] = true;
      recursion(word + board[r][c], r, c + 1, Trie);
      recursion(word + board[r][c], r + 1, c, Trie);
      recursion(word + board[r][c], r, c - 1, Trie);
      recursion(word + board[r][c], r - 1, c, Trie);
      check[r][c] = false;
    }
  };

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      recursion('', r, c, trie);
    }
  }

  // output.sort((a,b) => {
  //     for (let i = 0; i < a.length; i++){
  //         if(a.charCodeAt(i) !== b.charCodeAt(i)){
  //         return a.charCodeAt(i) - b.charCodeAt(i)
  //         }
  //     }
  // })

  return output;
};
