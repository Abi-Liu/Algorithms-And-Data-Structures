const isBalanced = require("./solution");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

describe("isBalanced", () => {
  it("should return true for a balanced binary tree (scenario 1)", () => {
    // Create a balanced binary tree (scenario 1)
    // Tree structure:
    //     1
    //    / \
    //   2   3
    const rootNode1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    const result1 = isBalanced(rootNode1);

    // The binary tree is balanced.
    expect(result1).toBe(true);
  });

  it("should return true for a balanced binary tree (scenario 2)", () => {
    // Create a balanced binary tree (scenario 2)
    // Tree structure:
    //     1
    //    / \
    //   2   3
    //  / \
    // 4   5
    const rootNode2 = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3)
    );

    const result2 = isBalanced(rootNode2);

    // The binary tree is balanced.
    expect(result2).toBe(true);
  });

  it("should return false for an unbalanced binary tree", () => {
    // Create an unbalanced binary tree
    // Tree structure:
    //     1
    //      \
    //       2
    //        \
    //         3
    //          \
    //           4
    const rootNode3 = new TreeNode(
      1,
      null,
      new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4)))
    );

    const result3 = isBalanced(rootNode3);

    // The binary tree is unbalanced.
    expect(result3).toBe(false);
  });

  it("should handle an empty tree", () => {
    // Test with an empty tree
    const result = isBalanced(null);
    expect(result).toBe(true); // An empty tree is considered balanced.
  });
});
