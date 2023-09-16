// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// link: https://leetcode.com/problems/group-anagrams/description/

var groupAnagrams = function (strs) {
  // initializes an object for a map to hold array values.
  const map = {};
  // for each string in the array, sort the string alphabetically and put it in the map
  for (const str of strs) {
    const sorted = str.split("").sort().join("");
    if (map[sorted]) {
      map[sorted].push(str);
    } else {
      map[sorted] = [str];
    }
  }
  //return the array of values inside the map
  return Object.values(map);
};

module.exports = groupAnagrams;
