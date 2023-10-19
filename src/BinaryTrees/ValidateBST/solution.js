// link: https://leetcode.com/problems/validate-binary-search-tree/

// The first key point is to be very clear on what a valid binary search tree is. the left value must be less than the current nodes values and the right value is greater. But all values on the left of a binary search tree must be less than the root node, and all the values on the right side need to be greater than the root node.

// Because that is the case, we can't just recurse through the tree checking if root.left.val < root.val && root.right.val > root.val

// It would fail on this test case:

/* 
        5
       / \
      4   6 
         / \
        3   7  
*/

// we have to keep track of the minimum and maximum value a node can have at a given point.

// look at the following code and work through the above test case if you are struggling with understanding.

var isValidBST = function (root) {
  function dfs(root, min, max) {
    if (!root) {
      return true;
    }

    if (min !== null && root.val <= min) {
      return false;
    }

    if (max !== null && root.val >= max) {
      return false;
    }

    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }

  return dfs(root, null, null);
};

module.exports = isValidBST;
