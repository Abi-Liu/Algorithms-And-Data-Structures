// link: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/?envType=study-plan-v2&envId=leetcode-75

// this is going to be a BFS solution because we want to go down level by level and calculate the sum for that level.
// to implement a BFS we need to utilize a queue.
// inside the queue we will have the root node. we will then shift all of the nodes in the queue one by one until we have done the entire level.
// for each node we shift, we then push the left and right children nodes back into the queue for the next iteration.

var maxLevelSum = function (root) {
  // setting up our queue, variable to hold the max sum, the current level, and the variable to hold the level the max sum is on.
  const queue = [root];
  let max = -Infinity;
  let level = 1;
  let maxLevel;

  while (queue.length) {
    let sum = 0;
    // we need to set length as a new variable because we will be shifting the queue, thus changing the length.
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (sum > max) {
      max = sum;
      maxLevel = level;
    }
    level++;
  }
  return maxLevel;
};
