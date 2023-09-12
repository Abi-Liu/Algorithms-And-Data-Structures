// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function (nums) {
  const res = [];
  // sorting the array will not only allow for us to check for duplicates more easily, but also speed up the process in general due to enabling us to use two pointers
  nums.sort((a, b) => a - b);
  // loop through the array. index i will be our first index in the triplet
  for (let i = 0; i < nums.length; i++) {
    //if nums[i] > 0, break because you cant reach 0 by adding only positive numbers
    if (nums[i] > 0) break;
    // if nums[i] === nums[i-1] skip this iteration and continue. If we continue down this iteration where i == i-1, we will only end up adding duplicates to our result array.
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    //left represents the next index after i and right represents the end of the array.
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      // if sum === 0, we can push the indices to our result array.
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        // in order to prevent duplicates, we need to skip all the values to the right of left that is equal to the number we just pushed to the array
        while (nums[left] === nums[left + 1]) {
          left += 1;
        }
        // repeat this process except in reverse for the right index.
        while (nums[right] === nums[right - 1]) {
          right -= 1;
        }
        // once we have skipped all the duplicate values, we can now increment left and decrement right to move onto a unique value
        left += 1;
        right -= 1;
        // if the sum is too large we move the right index to the left, since that will lower our sum
      } else if (sum > 0) {
        right -= 1;
        // if the sum is too low, then we increment our left index to increase the sum.
      } else {
        left += 1;
      }
    }
  }
  return res;
};
