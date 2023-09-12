// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // initialize left pointer at index 0 and right pointer at index s.length - 1
  let left = 0;
  let right = s.length - 1;

  // make string lower case because it should not be case sensitive
  s = s.toLowerCase();

  //loop over string
  // if either s[left] or s[right] are not alpha numeric, increment the left pointer or decrement the right pointer
  // else if s[left] !== s[right] return false because they are not a valid palindrome
  while (left < right) {
    if (!isAlphanumeric(s[left])) left += 1;
    else if (!isAlphanumeric(s[right])) right -= 1;
    else if (s[left] !== s[right]) {
      return false;
    } else {
      left += 1;
      right -= 1;
    }
  }
  // if you make it through the whole loop, you know it is a valid palindrome.
  return true;
};

function isAlphanumeric(character) {
  // Create a regular expression pattern to match alphanumeric characters
  const regex = /^[a-zA-Z0-9]$/;

  // Use the test() method to check if the character matches the pattern
  return regex.test(character);
}

module.exports = isPalindrome;
