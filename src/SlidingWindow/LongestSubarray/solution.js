// link: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/?envType=study-plan-v2&envId=leetcode-75

// we want to find the longest subarray of 1's and we MUST delete one element.
// in order to achieve this, we can use the sliding window technique to build our longest subarray
// we need to initialize variables to hold our left and right pointers, as well as the longest subarray, the length of our current subarray, and whether or not we have deleted any values yet

// from there, we can just do a typical sliding window algorithm. If nums[right] is a 1, we can increment our right pointer as well as our current length, and if it is a 0, but we have not yet deleted any values yet, we can simply just increment our right pointer to skip over that 0.

// if we encournter another 0 and we have already deleted it, we have to begin closing the left side of our window until we have reached the first 0 we deleted. Once we are at that index, we simply move past that 0 and reset our deleted varaiable so we can continue looking for a longer subarray.

// it is important to note that if we finish the loop and we have not deleted any values, we have to subtract one from our longest subarray since the problem requires us to delete an element.

var longestSubarray = function (nums) {
  let left = 0,
    right = 0;
  let longest = 0,
    current = 0,
    deleted = 0;
  while (right < nums.length) {
    if (nums[right] === 1) {
      current++;
      right++;
    } else if (nums[right] === 0 && deleted === 0) {
      deleted = 1;
      right++;
    } else {
      while (nums[left] !== 0) {
        left++;
        current--;
      }
      left++;
      deleted = 0;
    }
    longest = Math.max(longest, current);
  }
  return deleted === 0 ? longest - 1 : longest;
};

module.exports = longestSubarray;
