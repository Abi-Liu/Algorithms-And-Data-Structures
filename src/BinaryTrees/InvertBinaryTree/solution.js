// link: https://leetcode.com/problems/invert-binary-tree/

var invertTree = function (root) {
  // base case to exit recursion.
  if (!root) {
    return null;
  }
  // swap the left and right nodes
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // call the function recursively on the left and right nodes
  invertTree(root.left);
  invertTree(root.right);

  return root;
};

module.exports = invertTree;
