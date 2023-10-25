// link: https://leetcode.com/problems/subsets/

// This problem is very similar to the generate valid parentheses problem in the stack section.

// for each element in the nums array, we have 2 possibilities. Either we add the element, or we leave out the element.
// we can recursively go through the array and have one option to add the current index to the result array, or leave it out.
// once we have gone through every element in the nums array, we can push the generated array to the results array and break out of the recursive function

// time complexity: O(2^n)
// Space: O(N)

var subsets = function (nums) {
  const res = [];
  function backtrack(arr, i) {
    if (i === nums.length) {
      res.push(arr);
      return;
    }
    backtrack([...arr, nums[i]], i + 1);
    backtrack([...arr], i + 1);
  }
  backtrack([], 0);
  return res;
};

module.exports = subsets;
