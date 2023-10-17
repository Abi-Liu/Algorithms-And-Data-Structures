// link: https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function (root) {
  // base case, we return 0
  if (!root) {
    return 0;
  }
  // this will continue to recurse until we hit the very bottom of the tree
  // we then return 0 to the previous call and add 1
  // it'll keep bubbling up and incrementing by one until we return the final result
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

module.exports = maxDepth;
