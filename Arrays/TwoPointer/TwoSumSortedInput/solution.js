// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// THOUGHT PROCESS: we need to initialize two pointers. One for the left starting at 0 and one for the right starting at numbers.length-1
// We then loop until left < right or we find a valid match.
// Because we know the array is sorted from smallest to largest, we add number[left] and number[right] and compare it to the target. if the sum is too small, we know that we need to increment the left pointer only because decrementing the right pointer will only lower the sum.
// We can use the same logic for if the sum is too large.
// Then we just need to check if sum === target and return the [left+1, right+1]

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum > target) right--;
    else if (sum < target) left++;
  }
};
