/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!endWord || wordList.indexOf(endWord) == -1) {
    return 0;
  }
  // 各个通用状态对应所有单词
  var comboDicts = {};
  var len = beginWord.length;
  for (var i = 0; i < wordList.length; i++) {
    for (var r = 0; r < len; r++) {
      var newWord = wordList[i].substring(0, r) + "*" + wordList[i].substring(r + 1, len);
    //   !comboDicts[newWord] && (comboDicts[newWord] = []);
      comboDicts[newWord].push(wordList[i]);
    }
  }
  // Queue for BFS
  var queue = [[beginWord, 1]];
  // visited
  var visited = { beginWord: true };
  while (queue.length > 0) {
    var currNode = queue.shift();
    var currWord = currNode[0];
    var currLevel = currNode[1];
    for (var i = 0; i < len; i++) {
      // 通用状态
      var newWord = currWord.substring(0, i) + "*" + currWord.substring(i + 1, len);
      if (newWord in comboDicts) {
        var tmpWords = comboDicts[newWord];
        for (var z = 0; z < tmpWords.length; z++) {
          if (tmpWords[z] == endWord) {
            return currLevel + 1;
          }
          if (!visited[tmpWords[z]]) {
            visited[tmpWords[z]] = true;
            queue.push([tmpWords[z], currLevel + 1]);
          }
        }
      }
    }
  }
  return 0;
};

var ladderLength = function(beginWord, endWord, wordList) {
    if (!endWord || wordList.includes(endWord)) {
      return 0;
    }
    // 获取各个通用状态对应所有单词字典
    let comboDicts = []
    let len = beginWord.length;
    for (let i = 0; i < wordList.length; i++) {
      for (let r = 0; r < len; r++) {
        let newWord = wordList[i].substring(0, r) + "*" + wordList[i].substring(r + 1, len);
        comboDicts.push([newWord, wordList[i]])
      }
    }

    console.log(comboDicts)
    // Queue for BFS
    var queue = [[beginWord, 1]];
    visited
    var visited = { beginWord: true };
    while (queue.length > 0) {
      var currNode = queue.shift();
      var currWord = currNode[0];
      var currLevel = currNode[1];
      for (var i = 0; i < len; i++) {
        // 通用状态
        var newWord = currWord.substring(0, i) + "*" + currWord.substring(i + 1, len);
        if (newWord in comboDicts) {
          var tmpWords = comboDicts[newWord];
          for (var z = 0; z < tmpWords.length; z++) {
            if (tmpWords[z] == endWord) {
              return currLevel + 1;
            }
            if (!visited[tmpWords[z]]) {
              visited[tmpWords[z]] = true;
              queue.push([tmpWords[z], currLevel + 1]);
            }
          }
        }
      }
    }
    return 0;
};
  

ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])