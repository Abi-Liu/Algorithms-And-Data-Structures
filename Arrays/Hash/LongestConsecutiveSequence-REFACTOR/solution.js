// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// https://leetcode.com/problems/longest-consecutive-sequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  const values = Array.from(set);
  values.sort((a, b) => a - b);
  console.log(values);
  let prev = values[0];
  let longest = 1;
  let current = 1;
  for (let i = 1; i < values.length; i++) {
    console.log(longest, current);
    if (values[i] === prev + 1) {
      current += 1;
    } else {
      if (current > longest) {
        longest = current;
      }
      current = 1;
    }
    prev = values[i];
  }
  return longest < current ? current : longest;
};

module.exports = longestConsecutive;
