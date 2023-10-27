// link: https://leetcode.com/problems/combination-sum-iii/?envType=study-plan-v2&envId=leetcode-75

var combinationSum3 = function (k, n) {
  // because we can only use numbers between 1-9 we can create a combinations array to represent the digits we can use
  const combinations = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const res = [];

  // for our recursive function, it's going to take in an array, as well an index and a sum
  // the index represents what index we are at in the combinations array
  function backtrack(arr, i, sum) {
    // our base case is if arr.length is exactly k elements long and sum is equal to n
    // if we meet these conditions, we can push the arr into our result array and return
    if (arr.length === k && sum === n) {
      res.push(arr);
      return;
    }
    // if we reach the end of the  combinations array, or arr.length is greater than k or sum is greater than n, we know we cannot reach the target value so we can return
    if (arr.length > k || sum > n || i === combinations.length) {
      return;
    }
    // now we can just  call the function recursively, one route takes hte current value and the other route doesn't
    backtrack([...arr, combinations[i]], i + 1, sum + combinations[i]);
    backtrack(arr, i + 1, sum);
  }
  backtrack([], 0, 0);
  return res;
};

module.exports = combinationSum3;
