// link: https://leetcode.com/problems/search-in-rotated-sorted-array/description/

var search = function (nums, target) {
  // first we find the pivot point, just like in the previous problem Find min rotated sorted array.
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  // after this loop finishes, left is now the pivot point

  // now we check to see if the pivot point is 0, then we can just perform a normal binary search on the nums array
  if (left === 0) {
    (left = 0), (right = nums.length - 1);
  } // if the pivot point is not 0, then we check to see if the target number is less than nums[0].
  // if that is the case, we know that we need to search the right hand side of nums
  else if (target < nums[0]) {
    right = nums.length - 1;
  } // else we search the left hand side
  else {
    right = left;
    left = 0;
  }
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  // return -1 if we don't find the target
  return -1;
};
