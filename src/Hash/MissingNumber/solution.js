// link: https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
  // create a set from nums
  const set = new Set(nums);
  // loop from 0 to nums.length inclusive and check if the index is in the set.
  // return the missing index
  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};

module.exports = missingNumber;
