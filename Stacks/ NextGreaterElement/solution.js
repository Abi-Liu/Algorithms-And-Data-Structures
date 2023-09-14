// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// link: https://leetcode.com/problems/next-greater-element-i/description/

// Brute force solution
var nextGreaterElement = function (nums1, nums2) {
  let res = [];
  // loop through nums1
  for (let i = 0; i < nums1.length; i++) {
    let x = -1;
    // find the index of nums1[i] in nums2
    let index = nums2.indexOf(nums1[i]) + 1;
    // start comparing elements after to find the next largest element
    for (let j = index; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        x = nums2[j];
        // if you find it break the current loop
        break;
      }
    }
    // add it to result array
    res.push(x);
  }
  return res;
};
