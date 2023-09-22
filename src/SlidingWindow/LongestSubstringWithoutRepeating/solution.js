// link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

var lengthOfLongestSubstring = function (s) {
  let j = 0;
  let max = 0;
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[j]);
      j++;
    }
    set.add(s[i]);
    max = Math.max(max, i - j + 1);
  }
  return max;
};

module.exports = lengthOfLongestSubstring;
