// link: https://leetcode.com/problems/combination-sum/

//Another backtracking problem, this time instead of like in the subset one, we can use the same element infinte amount of times.

// it's the same approach but we just have to account for the fact that we can reuse the same element.
// first lets build the recursive function

var combinationSum = function (candidates, target) {
  let res = [];
  function backtrack(arr, i, target) {
    // base case when we reach the target
    if (target === 0) {
      res.push(arr);
      return;
    }
    // OR  if the target goes negative, or we reach the end of the candidates array
    if (target < 0 || i === candidates.length) {
      return;
    }

    // here is where the recursion happens.
    // our first statement we are simply adding the current element, and instead of incrementing i, we keep it the same to account for repeated elements
    backtrack([...arr, candidates[i]], i, target - candidates[i]);
    // in our next case we dont add i and increment it
    backtrack(arr, i + 1, target);
  }
  backtrack([], 0, target);
  return res;
};
