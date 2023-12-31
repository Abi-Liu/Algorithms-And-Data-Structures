// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// link: https://leetcode.com/problems/top-k-frequent-elements/description/

// REFACTORED SOLUTION
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 0);
  }

  const res = [...map.entries()].sort((a, b) => b[1] - a[1]).map((x) => x[0]);
  return res.slice(0, k);
};

// OLD SOLUTION SLOW
var topKFrequent = function (nums, k) {
  // initializing an object to be a map
  let map = {};
  //loops through the array nums and counts the total number of occurrences for each element
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  // sorts the values from highest to lowest and gets the first K elements.
  const values = Object.values(map)
    .sort((a, b) => b - a)
    .slice(0, k);

  //initialize result arr
  const result = [];

  // loop through the values array to find which key matches the value in the map object
  for (let i = 0; i < values.length; i++) {
    //push the key into the result array
    result.push(
      Object.keys(map).find((key) => {
        if (map[key] === values[i]) {
          const objKey = key;
          //deletes key from object to avoid adding the same number multiple times
          delete map[key];
          return objKey;
        }
      })
    );
  }
  return result;
};

module.exports = topKFrequent;
