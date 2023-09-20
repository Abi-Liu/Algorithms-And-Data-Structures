// link: https://leetcode.com/problems/find-peak-element/description/?envType=study-plan-v2&envId=leetcode-75

var findPeakElement = function (nums) {
  // initialize left and right points
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // next and prev variables are important for the edge cases
    // i.e [1] or [1,2,3,4] or [1,2]
    // because the left and right bounds of the array are gaurenteed to be - infinity
    // there will always be a peak element
    const prev = mid > 0 ? nums[mid - 1] : -Infinity;
    const next = mid < nums.length - 1 ? nums[mid + 1] : -Infinity;
    // next check to see if it is a peak element, if not go in the direction of the higher elements
    if (prev < nums[mid] && nums[mid] > next) {
      return mid;
    } else if (prev > nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};

module.exports = findPeakElement;
