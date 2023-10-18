// link: https://leetcode.com/problems/subtree-of-another-tree/

var isSubtree = function (root, subRoot) {
  function isSame(root, subroot) {
    if (!root && !subroot) {
      return true;
    } else if (!root || !subroot || root.val !== subroot.val) {
      return false;
    }
    return isSame(root.left, subroot.left) && isSame(root.right, subroot.right);
  }

  if (!root) {
    return false;
  }
  if (isSame(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

module.exports = isSubtree;
