const rightSideView = require("./solution");

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

describe("rightSideView", () => {
  it("should return an empty array for an empty tree", () => {
    const root = null;
    expect(rightSideView(root)).toEqual([]);
  });

  it("should return an array with a single node value for a tree with only one node", () => {
    const root = new TreeNode(5);
    expect(rightSideView(root)).toEqual([5]);
  });

  it("should return an array with the rightmost values for a balanced binary tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7))
    );
    expect(rightSideView(root)).toEqual([1, 3, 7]);
  });

  it("should return an array with the rightmost values for a skewed binary tree (left-skewed)", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5))))
    );
    expect(rightSideView(root)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an array with the rightmost values for a skewed binary tree (right-skewed)", () => {
    const root = new TreeNode(
      1,
      null,
      new TreeNode(
        2,
        null,
        new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))
      )
    );
    expect(rightSideView(root)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the rightmost values for a binary tree with multiple levels", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, null, new TreeNode(6, new TreeNode(7)))
    );
    expect(rightSideView(root)).toEqual([1, 3, 6, 7]);
  });
});
