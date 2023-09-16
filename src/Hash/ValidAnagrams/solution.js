// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// link: https://leetcode.com/problems/valid-anagram/description/

var isAnagram = function (s, t) {
  const map = new Map(); // creates a map
  for (let i = 0; i < s.length; i++) {
    // loops through the first string and adds all the values to the map with an initial value of 1
    if (!map.get(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1); // increments the value to represent how many times the character appears in the string
    }
  }

  for (let i = 0; i < t.length; i++) {
    // loops through the second array this time decrementing the value each time it appears.
    if (!map.get(t[i])) {
      // if a value exists in string 2 but not string 1 return false
      return false;
    } else {
      if (map.get(t[i]) === 1) {
        // delete the entry if the value reaches 0
        map.delete(t[i]);
      } else {
        map.set(t[i], map.get(t[i]) - 1); // decrement the value each time it is seen
      }
    }
  }
  if (map.size === 0) {
    // if map is empty that means they are valid anagrams return true
    return true;
  } else {
    // else return false
    return false;
  }
};

module.exports = isAnagram;
