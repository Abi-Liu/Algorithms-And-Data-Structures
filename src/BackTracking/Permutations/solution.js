// link: https://leetcode.com/problems/permutations/

var permute = function (nums) {
  const res = [];

  function backtrack(curr, rest) {
    // base case. if the rest of the array is empty, that means we have explored all possibilities
    if (rest.length === 0) {
      res.push(curr);
      return;
    }
    // we then want to loop through all unexplored elements, and add the ith element to our current array, and remove it from the rest array.
    for (let i = 0; i < rest.length; i++) {
      backtrack(
        [...curr, rest[i]],
        [...rest.slice(0, i), ...rest.slice(i + 1)]
      );
    }
  }

  backtrack([], nums);
  return res;
};

module.exports = permute;
