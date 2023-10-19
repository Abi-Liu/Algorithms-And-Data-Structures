const goodNodes = require("./solution");

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

describe("goodNodes", () => {
  it("should return 0 for an empty tree", () => {
    const root = null;
    expect(goodNodes(root)).toBe(0);
  });

  it("should return 1 for a single-node tree", () => {
    const root = new TreeNode(5);
    expect(goodNodes(root)).toBe(1);
  });

  it("should return the number of good nodes for a tree with a single path", () => {
    const root = new TreeNode(
      3,
      new TreeNode(1, new TreeNode(3)),
      new TreeNode(5)
    );
    expect(goodNodes(root)).toBe(3);
  });

  it("should return the number of good nodes for a balanced binary tree", () => {
    const root = new TreeNode(
      3,
      new TreeNode(1, new TreeNode(3), new TreeNode(2)),
      new TreeNode(5, new TreeNode(4), new TreeNode(6))
    );
    expect(goodNodes(root)).toBe(4);
  });

  it("should return the number of good nodes for a skewed binary tree (left-skewed)", () => {
    const root = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(3, new TreeNode(2, new TreeNode(1))))
    );
    expect(goodNodes(root)).toBe(1);
  });

  it("should return the number of good nodes for a skewed binary tree (right-skewed)", () => {
    const root = new TreeNode(
      1,
      null,
      new TreeNode(
        2,
        null,
        new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))
      )
    );
    expect(goodNodes(root)).toBe(5);
  });

  it("should return the number of good nodes for a tree with all nodes having the same value", () => {
    const root = new TreeNode(
      5,
      new TreeNode(5),
      new TreeNode(5, new TreeNode(5), new TreeNode(5))
    );
    expect(goodNodes(root)).toBe(5);
  });

  // Add more test cases as needed

  // ...
});
