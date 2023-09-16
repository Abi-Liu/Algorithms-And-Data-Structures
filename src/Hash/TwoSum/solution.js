// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// link: //leetcode.com/problems/two-sum/description/

https: var twoSum = function (nums, target) {
  let map = new Map(); // initialize new Map
  for (let i = 0; i < nums.length; i++) {
    // loop through nums and for each value, subtract from target to get the number we need to get to target
    let result = target - nums[i];
    if (map.has(result)) {
      // if map has the required number, return the index of the values
      return [map.get(result), i];
    }
    // else set nums[i] and it's index into map
    map.set(nums[i], i);
  }
};

module.exports = twoSum;
