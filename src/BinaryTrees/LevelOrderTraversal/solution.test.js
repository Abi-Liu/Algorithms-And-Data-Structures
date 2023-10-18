const levelOrder = require("./solution");

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

describe("levelOrder", () => {
  it("should return an empty array for an empty tree", () => {
    const root = null;
    expect(levelOrder(root)).toEqual([]);
  });

  it("should perform a level-order traversal for a single-node tree", () => {
    const root = new TreeNode(5);
    expect(levelOrder(root)).toEqual([[5]]);
  });

  it("should handle a tree with left children only", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(5)
    );
    const expected = [[1], [2, 5], [3, 4]];
    expect(levelOrder(root)).toEqual(expected);
  });

  it("should handle a tree with right children only", () => {
    const root = new TreeNode(
      1,
      null,
      new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4)))
    );
    const expected = [[1], [2], [3], [4]];
    expect(levelOrder(root)).toEqual(expected);
  });

  it("should handle a balanced binary tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7))
    );
    const expected = [[1], [2, 3], [4, 5, 6, 7]];
    expect(levelOrder(root)).toEqual(expected);
  });

  it("should handle a skewed binary tree (left-skewed)", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5))))
    );
    const expected = [[1], [2], [3], [4], [5]];
    expect(levelOrder(root)).toEqual(expected);
  });

  it("should handle a skewed binary tree (right-skewed)", () => {
    const root = new TreeNode(
      1,
      null,
      new TreeNode(
        2,
        null,
        new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))
      )
    );
    const expected = [[1], [2], [3], [4], [5]];
    expect(levelOrder(root)).toEqual(expected);
  });
});
