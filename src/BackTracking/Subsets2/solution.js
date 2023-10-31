// link: https://leetcode.com/problems/subsets-ii/

// this variation is a bit more tricky than the previous subset problem because it contains duplicate numbers in the array and the solution cannot contain any duplicate subsets.

// there is no gaurentee that the input array is sorted, so the first step would be to sort the input array.
// once the array is sorted, we can just do the same algorithm except this time, we need to make sure we're not including duplicates.
// we can just loop until nums[i] is a different number and then call the make the second backtrack call

var subsetsWithDup = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  function backtrack(arr, i) {
    if (i === nums.length) {
      res.push(arr);
      return;
    }
    backtrack([...arr, nums[i]], i + 1);

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    backtrack(arr, i + 1);
  }

  backtrack([], 0);
  return res;
};
