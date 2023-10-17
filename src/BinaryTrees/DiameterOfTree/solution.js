// link: https://leetcode.com/problems/diameter-of-binary-tree/

var diameterOfBinaryTree = function (root) {
  // variable to track the max diameter
  let max = 0;
  findDepth(root);

  // recursive function
  function findDepth(root) {
    // base case, if we reach the bottom of the tree return 0
    if (!root) {
      return 0;
    }
    // we want to find the diameter of any given subtree.
    // to do this we find the left and right length and we can add them together to get the diameter
    const left = findDepth(root.left);
    const right = findDepth(root.right);

    max = Math.max(max, left + right);

    // this return is to increment the depth count
    return Math.max(left, right) + 1;
  }

  return max;
};

module.exports = diameterOfBinaryTree;
