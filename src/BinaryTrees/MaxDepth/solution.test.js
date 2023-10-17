const maxDepth = require("./solution");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

describe("maxDepth", () => {
  it("should calculate the maximum depth of a binary tree correctly", () => {
    // Create a sample binary tree
    // Tree structure:
    //     1
    //    / \
    //   2   3
    //  / \
    // 4   5
    const rootNode = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3)
    );

    const depth = maxDepth(rootNode);

    // The maximum depth of the tree is 3 (root to node 1 to node 3).
    expect(depth).toBe(3);
  });

  it("should handle an empty tree", () => {
    // Test with an empty tree
    const depth = maxDepth(null);
    expect(depth).toBe(0);
  });
});
