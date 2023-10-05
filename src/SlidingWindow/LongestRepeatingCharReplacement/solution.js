// link: https://leetcode.com/problems/longest-repeating-character-replacement/

var characterReplacement = function (s, k) {
  // create left right pointers, as well as a var to hold the count of the char with the highest freq and a max length var
  let left = 0,
    right = 0,
    maxFreq = 0,
    max = 0;
  // map to store the letters in s and their frequencies
  const map = {};

  while (right < s.length) {
    // increment the frequency count for the char at index right
    map[s[right]] = map[s[right]] + 1 || 1;
    // determine if that character has the highest frequency in the window so far
    maxFreq = Math.max(maxFreq, map[s[right]]);
    // if the current length of the window - maxFreq is greater than k, that means we cannot replace any more characters
    // we now must begin to slide the left pointer to the right until we break out of this condition, aka we can replace more characters
    while (right - left + 1 - maxFreq > k) {
      map[s[left]] = map[s[left]] - 1;
      left++;
    }
    max = Math.max(right - left + 1, max);
    right++;
  }
  return max;
};

module.exports = characterReplacement;
