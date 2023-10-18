// link: https://leetcode.com/problems/same-tree/

var isSameTree = function (p, q) {
  // base case
  if (!p && !q) {
    return true;
  } else if (!p || !q || p.val !== q.val) {
    return false;
  }
  // this will continue down until it reaches the base case, both nodes are null, or only 1 is null or the values don't match.
  // if the values match the whole way down the true will bubble up into the first function call and we are left with the return value of true && true which resolves to true.
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

module.exports = isSameTree;
