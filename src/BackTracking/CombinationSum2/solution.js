// link: https://leetcode.com/problems/combination-sum-ii/

var combinationSum2 = function (candidates, target) {
  // because the input array combinations is not sorted, in order to find duplicate values easily we need to sort it so we can see if the next values are the same in order to prevent duplicate combinations
  candidates.sort((a, b) => a - b);
  const res = [];

  function backtrack(arr, i, sum) {
    // if sum and target are equal, we know we have reached our base case and we can push the array into our result array and break from recursion
    if (sum === target) {
      res.push(arr);
      return;
    }
    // if we are at the end of the input array or sum is greater than target, we know that we will never reach the target value and we can break
    if (i === candidates.length || sum > target) {
      return;
    }
    // our first recursive call will be to take the current element
    backtrack([...arr, candidates[i]], i + 1, sum + candidates[i]);
    // then to prevent duplicates we need to loop through the array until we reach a different value
    while (candidates[i] === candidates[i + 1]) {
      i++;
    }
    // our second recursive call will be to leave the current value and move onto the next index.
    backtrack(arr, i + 1, sum);
  }

  backtrack([], 0, 0);
  return res;
};

module.exports = combinationSum2;
