// link: https://leetcode.com/problems/balanced-binary-tree/

var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  // get the depth of the left and right branches
  // we can use this to determine if they are no more than 1 length difference
  let left = dfs(root.left);
  let right = dfs(root.right);

  // we return true only if all the conditions pass. if the left-right is within one branch and if that is the case for all sub trees.
  return (
    Math.abs(left - right) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );

  // recursive function call to get the length of the left and right branches. Basic DFS
  function dfs(node) {
    if (!node) {
      return 0;
    }
    let left = dfs(node.left);
    let right = dfs(node.right);

    return Math.max(left, right) + 1;
  }
};

module.exports = isBalanced;
