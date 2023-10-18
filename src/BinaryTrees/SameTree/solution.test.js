const isSameTree = require("./solution");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

describe("isSameTree", () => {
  it("should return true for two identical binary trees (scenario 1)", () => {
    // Create two identical binary trees (scenario 1)
    // Tree structure:
    // Tree 1:
    //     1
    //    / \
    //   2   3
    // Tree 2:
    //     1
    //    / \
    //   2   3
    const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    const result = isSameTree(tree1, tree2);

    // The two trees are identical.
    expect(result).toBe(true);
  });

  it("should return true for two identical binary trees (scenario 2)", () => {
    // Create two identical binary trees (scenario 2)
    // Tree structure:
    // Tree 1:
    //     1
    //    / \
    //   2   3
    // Tree 2:
    //     1
    //    / \
    //   2   3
    const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    const result = isSameTree(tree1, tree2);

    // The two trees are identical.
    expect(result).toBe(true);
  });

  it("should return false for two different binary trees", () => {
    // Create two different binary trees
    // Tree 1:
    //     1
    //    / \
    //   2   3
    // Tree 2:
    //     1
    //    / \
    //   2   4
    const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(4));

    const result = isSameTree(tree1, tree2);

    // The two trees are different.
    expect(result).toBe(false);
  });

  it("should return true for two empty trees", () => {
    // Test with two empty trees
    const result = isSameTree(null, null);

    // Two empty trees are considered identical.
    expect(result).toBe(true);
  });

  it("should return false for one empty tree and one non-empty tree", () => {
    // Test with one empty tree and one non-empty tree
    const tree = new TreeNode(1);
    const result1 = isSameTree(tree, null);
    const result2 = isSameTree(null, tree);

    // An empty tree and a non-empty tree are different.
    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });
});
