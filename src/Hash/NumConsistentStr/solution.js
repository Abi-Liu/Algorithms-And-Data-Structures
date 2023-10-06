// link: https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

var countConsistentStrings = function (allowed, words) {
  const set = new Set();
  let count = 0;
  for (let i = 0; i < allowed.length; i++) {
    set.add(allowed[i]);
  }

  for (let i = 0; i < words.length; i++) {
    let valid = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!set.has(words[i][j])) {
        valid = false;
      }
    }
    if (valid) {
      count++;
    }
  }
  return count;
};

module.exports = countConsistentStrings;
