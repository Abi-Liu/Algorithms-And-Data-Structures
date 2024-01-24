// link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function (nums, target) {
  const first = findFirst(nums, target);
  const last = findSecond(nums, target);
  return [first, last];
};

// use binary search to find the first and last occurences of the target number.
function findFirst(nums, target) {
  let left = 0,
    right = nums.length - 1;
  let occurence = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      occurence = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return occurence;
}

function findSecond(nums, target) {
  let left = 0,
    right = nums.length - 1;
  let occurence = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      occurence = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return occurence;
}

module.exports = searchRange;
