// link: https://leetcode.com/problems/binary-tree-right-side-view/description/

// For this problem, it's easy to just think we traverse down the right side of the tree until we reach the bottom. But it's actually a bit more tricky than that.

// for example, what if we had a tree like this?

/* 
            1
           / \
          2   3   
         /
        4  
*/

// if we just traversed the right side, we would get the answer [1,3]. But is that correct?

// looking at this tree from the right side, we can clearly see the node 4 because there is no other node on the same level blocking it. so the solution should be [1,3,4]

// how do we tackle this problem? We use BFS and push the right most node in each level to the results array.
// if you're having difficulty with BFS make sure to check out the problem Level Order Traversal before attempting this problem.

var rightSideView = function (root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const result = [];

  while (queue.length) {
    let values = [];
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      values.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(values[values.length - 1]);
  }

  return result;
};
