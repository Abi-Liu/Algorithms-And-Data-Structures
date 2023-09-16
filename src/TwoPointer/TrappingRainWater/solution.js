// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// link: https://leetcode.com/problems/trapping-rain-water/description/

//Thought process: The trickiest part of this problem is finding a way to determine how many blocks of rain can each index trap. So, how can we do that? If we take a look at the diagram, its impossible to hold any water in the 0th index and last index because there are no blocks to the left or right to trap water, this is simple enough to understand. In order to trap blocks of water, we need to have containing blocks on each side to hold the water in. A mistake I first made when thinking of a solution was viewing the problem too narrowly. What I mean by this is that I would look at each index and look directly left and right to see if i can find a containing pair of blocks. This method is too limiting and inefficient, so instead I realized I could just take the max height of ALL elements to the left and right of an index and compute the amount of water held with that.

var trap = function (height) {
  // intialize variables to hold max left and right arrays as well as a result variable.
  let water = 0;
  let maxLeft = [];
  let maxRight = [];

  // loop through the height array and begin filling in values for maxLeft and right arrays.
  for (let i = 0; i < height.length; i++) {
    // i is going to be used for maxLeft, and j is for maxRight. This is so we can loop through it only once and fill out both arrays simultaneously
    let j = height.length - 1 - i;
    // if i is 0 that means we are still at the ends of the array. This means we have no values to the left of the start or right of the end so we push 0 to both arrays.
    if (i === 0) {
      maxLeft.push(0);
      maxRight.push(0);
    } else {
      // if the height of the previous value in height is greater than the height that is currently in max arrays, push the previous highest or the new highest value
      maxLeft[i - 1] > height[i - 1]
        ? maxLeft.push(maxLeft[i - 1])
        : maxLeft.push(height[i - 1]);
      maxRight[i - 1] > height[j + 1]
        ? maxRight.push(maxRight[i - 1])
        : maxRight.push(height[j + 1]);
    }
  }
  // reverse the right array so we have it in the same order as the left and height array.
  maxRight.reverse();
  for (let i = 0; i < height.length; i++) {
    // the equation we can use to figure out how much water an index can store. However, total can be a negative number and since we cant store negative amounts of water, we should treat negative answers as 0.
    let total = Math.min(maxLeft[i], maxRight[i]) - height[i];
    total = total < 0 ? 0 : total;
    water += total;
  }
  return water;
};

module.exports = trap;
