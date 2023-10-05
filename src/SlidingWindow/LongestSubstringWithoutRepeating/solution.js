// link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// different way of solving
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    max = 0;
  let set = new Set();
  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
    } else {
      while (s[left] !== s[right]) {
        set.delete(s[left]);
        left++;
      }
      set.delete(s[left]);
      left++;
    }
    max = Math.max(right - left, max);
  }

  return max;
};

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
