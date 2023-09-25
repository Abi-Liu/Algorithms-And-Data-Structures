// link https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// take the example [2,3,4,5,6,7,1]
// the midpoint, 5, is greater than the most right point, 1. so we look in the right hand side
// in this example, [1,2,3,4,5,6,7]
// the mid point is less than the right point, so we know to look in the left hand side

var findMin = function (nums) {
  // initialize left and right points for binary search
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // if the mid element is greater than the right most element, we know that the answer will be on the right because it's rotated
    if (nums[mid] > nums[right]) {
      left = mid + 1;
      // if the midpoint is not greater than the right most element, we know that the answer will lie on the left hand side.
    } else {
      right = mid;
    }
  }
  // by the end of the loop we know the left index will hold the lowest element
  return nums[left];
};

module.exports = findMin;
