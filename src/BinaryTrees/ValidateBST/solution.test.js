const isValidBST = require("./solution");

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

describe("isValidBST", () => {
  it("should return true for an empty tree", () => {
    const root = null;
    expect(isValidBST(root)).toBe(true);
  });

  it("should return true for a single-node tree", () => {
    const root = new TreeNode(5);
    expect(isValidBST(root)).toBe(true);
  });

  it("should return true for a valid BST with balanced structure", () => {
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    expect(isValidBST(root)).toBe(true);
  });

  it("should return true for a valid BST with skewed left structure", () => {
    const root = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(3, new TreeNode(2, new TreeNode(1))))
    );
    expect(isValidBST(root)).toBe(true);
  });

  it("should return true for a valid BST with skewed right structure", () => {
    const root = new TreeNode(
      1,
      null,
      new TreeNode(
        2,
        null,
        new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))
      )
    );
    expect(isValidBST(root)).toBe(true);
  });

  it("should return false for an invalid BST with a left child greater than the root", () => {
    const root = new TreeNode(5, new TreeNode(6), new TreeNode(3));
    expect(isValidBST(root)).toBe(false);
  });

  it("should return false for an invalid BST with a right child less than the root", () => {
    const root = new TreeNode(5, new TreeNode(2), new TreeNode(4));
    expect(isValidBST(root)).toBe(false);
  });

  it("should return false for an invalid BST with duplicate values", () => {
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(2));
    expect(isValidBST(root)).toBe(false);
  });
});
