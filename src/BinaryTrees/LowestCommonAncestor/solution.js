// link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// to find the least common ancestor in a binary search tree we can start at the root, since that is going to be a common ancestor of every node in the tree.

// if the values of p and q are on opposite sides of the tree, we know that the current root value is the LCA because they are diverging and will never have another common ancestor.

// otherwise we go to the next node depending on if the values are greater or less than root.

var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (
      (p.val < root.val && q.val > root.val) ||
      (p.val > root.val && q.val < root.val) ||
      root.val === q.val ||
      root.val === p.val
    ) {
      return root;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
};

module.exports = lowestCommonAncestor;
