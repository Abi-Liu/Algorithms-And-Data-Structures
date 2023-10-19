// link: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75

var maxVowels = function (s, k) {
  // left and right variables for the sliding window technique, a max count to store the max # of vowels as well as a count that will be changing with the window
  let left = 0,
    right = 0,
    max = 0,
    count = 0;

  // create a map to store the vowels to be able to quickly check to see if a character is a vowel
  const map = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  // build out the window to length k
  while (right < k) {
    if (map[s[right]]) {
      max++;
    }
    right++;
  }
  count = max;

  // here we will go through the rest of the string until we reach the end
  // we increment the left and right side of the window and check to see if the maximum vowels changes
  while (right < s.length) {
    if (map[s[left]]) {
      count--;
    }
    if (map[s[right]]) {
      count++;
    }
    left++;
    right++;
    max = Math.max(count, max);
  }

  return max;
};

module.exports = maxVowels;
