// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

var maxOperations = function (nums, k) {
  // sort the array so we can use a two pointer approach
  nums.sort((a, b) => a - b);
  // initialize a left and right pointer at each end of the array
  let left = 0;
  let right = nums.length - 1;
  // counter for # of operations done
  let operations = 0;
  while (left < right) {
    const sum = nums[left] + nums[right];
    // if sum === k, increment the operations count as well as shifting the left and right indexes towards to center to essentially remove them from the array.
    if (sum === k) {
      operations++;
      left++;
      right--;
      // if sum > k, that means we have to shift the right index in order to lower the sum
    } else if (sum > k) {
      right--;
      // if sum < k, we need to shift the left index to increase the sum
    } else {
      left++;
    }
  }
  return operations;
};

module.exports(maxOperations);
