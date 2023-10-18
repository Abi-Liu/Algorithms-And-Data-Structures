// link: https://leetcode.com/problems/binary-tree-level-order-traversal/description/

// most of the other binary tree problems we have been implementing Depth First Search (DFS)
// for this problem, we will need to implement Breadth First Search (BFS)

var levelOrder = function (root) {
  // handle edge case of an empty tree
  if (!root) return [];

  // arr is our queue. We will use this queue to traverse the tree level by level. Initialize it with the root node first
  const arr = [root];
  const result = [];
  // loop while arr has values, aka until we visit all the nodes in the tree
  while (arr.length) {
    // variable to hold the values of the nodes for each level
    const values = [];
    // this is important. At this point in code execution, the nodes that are in arr represent the entire level of the tree from left to right
    // because we want to traverse the level order, we only want to loop through arr.length amount of elements to get traverse through that level.
    // but in order to add the children of these nodes, we cannot use arr.length or it will not behave as expected due to the fact we are changing arr
    // we need to use a dummy variable to hold the length at this specific point in time so we can only traverse through the nodes in this specific level
    const length = arr.length;

    // loop through the queue and shift the first element. Push the value of the shifted node to the values arr
    // and add the children of the node to the queue
    for (let i = 0; i < length; i++) {
      const node = arr.shift();
      values.push(node.val);
      if (node.left) {
        arr.push(node.left);
      }
      if (node.right) {
        arr.push(node.right);
      }
    }
    result.push(values);
  }
  return result;
};

module.exports = levelOrder;
