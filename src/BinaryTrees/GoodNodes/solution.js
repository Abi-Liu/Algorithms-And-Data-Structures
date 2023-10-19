// link: https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// this problem is relatively straightforward. We can implement a basic DFS and keep track of the maximum value in the given path.
// if the current value is greater than the max in our route, we update the good count and update the max value to be the current nodes value.

var goodNodes = function (root) {
  let good = 0;
  function dfs(node, max) {
    if (!node) {
      return;
    }
    if (node.val >= max) {
      good++;
      max = node.val;
    }

    dfs(node.left, max);
    dfs(node.right, max);
  }
  dfs(root, -Infinity);
  return good;
};
