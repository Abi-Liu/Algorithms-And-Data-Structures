// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// link: https://leetcode.com/problems/container-with-most-water/description/

var maxArea = function (height) {
  // create variables to hold the max area, left index, and right index.
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    // the area for any given two points will be the lowest height of the two indexes * (right index - left index)
    // this is because a container can only store as much water as the lowest point can hold.
    const area = Math.min(height[left], height[right]) * (right - left);
    if (area > max) max = area;
    // because we are looking for the max possible area, we only want to shift the index with the lowest height.
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};
