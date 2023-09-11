// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // array to hold the product of all integers to the left of an index
  let prefix = [];
  // array to hold the product of all integers to the right of an index
  let postfix = [];

  // loop through the array. If i === 0 add nums[0] to prefix
  // else multiply nums[i] by the previous value in the prefix array
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) prefix.push(nums[i]);
    else prefix.push(nums[i] * prefix[i - 1]);
  }
  let reversed = nums.reverse();
  // loop through the array. If i === 0 add nums[0] to postfix
  // else multiply nums[i] by the previous value in the postfix array
  for (let i = 0; i < reversed.length; i++) {
    if (i === 0) postfix.push(nums[i]);
    else {
      postfix.push(nums[i] * postfix[i - 1]);
    }
  }
  //reverse it back to the original order
  postfix = postfix.reverse();
  const result = [];
  // last loop. For elements in the first index, the result would be index i+1 in the postfix array because we want all elements to the right of the index.
  //Do the same for the last element except the result would be i-1 in the prefix array.
  // otherwise the result will be prefix[i-1] * postfix[i+1]
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) result.push(postfix[i + 1]);
    else if (i === nums.length - 1) result.push(prefix[i - 1]);
    else result.push(prefix[i - 1] * postfix[i + 1]);
  }
  // return the result array
  return result;
};
