// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// link: https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function (nums) {
  const set = new Set(); //creates new Set. Set's are collections of values where each value can only occur once
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true; //if nums[i] is in the set, return true
    else set.add(nums[i]); //else add nums[i] to the set
  }
  return false; // returns false if you loop through all the values without finding a duplicate.
};

module.exports = containsDuplicate;
