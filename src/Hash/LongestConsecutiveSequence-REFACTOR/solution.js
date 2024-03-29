// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// https://leetcode.com/problems/longest-consecutive-sequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

// OPTIMIZED SOLUTION:
var longestConsecutive = function (nums) {
  // remove all duplicate values
  const set = new Set(nums);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    // if the set includes the next consecutive number, we know we're not at the highest value yet for that group.
    // we can then just continue to the next iteration of the loop.
    if (set.has(nums[i] + 1)) {
      continue;
    }
    // if there is no next consecutive number, we now know that this is where the consecutive group ends.
    // we can check to see if the set contains the previous consecutive number, if it does we increment count.
    let current = nums[i];
    let count = 1;
    while (set.has(current - 1)) {
      count++;
      current--;
    }
    max = Math.max(count, max);
  }

  return max;
};

// var longestConsecutive = function (nums) {
//   // checking for edge case that nums is empty
//   if (nums.length === 0) return 0;

//   // create a set to hold all values of nums and remove the duplicate values
//   const set = new Set();

//   // adding all elements into set
//   for (let i = 0; i < nums.length; i++) {
//     set.add(nums[i]);
//   }

//   //create an array from the set so it's easier to work with
//   //then we need to sort the array so we can test if the current value === prevValue + 1
//   const values = Array.from(set);
//   values.sort((a, b) => a - b);

//   // initialize prev value to be the first value in array
//   let prev = values[0];
//   //variables to hold longest length and current length. Initialize these at 1 instead of 0 because the length will always be greater than 0 unless empty
//   let longest = 1;
//   let current = 1;

//   // loop through the array to check is prev + 1 === currentValue
//   for (let i = 1; i < values.length; i++) {
//     // increment current by 1 if they are consecutive
//     if (values[i] === prev + 1) {
//       current += 1;
//     } else {
//       // else check if current > longest and reset current back to 1
//       if (current > longest) {
//         longest = current;
//       }
//       current = 1;
//     }
//     prev = values[i];
//   }
//   // since the last element can also be consecutive, it could be the case that longest never gets updated. To fix this we can just check to see which is longer and return the longer value
//   return longest < current ? current : longest;
// };

module.exports = longestConsecutive;
