// link: https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75

var longestOnes = function (nums, k) {
  // we need to set up variables to keep track of the left and right pointer, the max consecutive 1's, the current count of consecutive 1's
  // as well as a counter for how many 0's we have flipped so far.
  let left = 0,
    right = 0,
    max = 0,
    curr = 0,
    flip = 0;

  // now we can begin building our sliding window
  while (right < nums.length) {
    // if the the element at the right index is one, we can increase the current count and increment the right var.
    if (nums[right] === 1) {
      curr++;
      right++;
    } else {
      // if not, then we have to check if we have flipped the maximum amount we can
      // if we have we need to increment the left pointer to begin closing the window
      // we can then decrease the count of flipped 0's and the current count
      if (flip >= k) {
        if (nums[left] !== 1) {
          flip--;
        }
        curr--;
        left++;
      } else {
        // if we are below k flipped 0's we can continue on as if it were a 1.
        curr++;
        flip++;
        right++;
      }
    }
    max = Math.max(curr, max);
  }
  return max;
};

module.exports = longestOnes;
