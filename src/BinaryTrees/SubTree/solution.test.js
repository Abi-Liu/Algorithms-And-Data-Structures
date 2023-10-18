const isSubtree = require("./solution");

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

describe("isSubtree", () => {
  it("should return true when subRoot is identical to root", () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const subRoot = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it("should return true when subRoot is a subtree of root", () => {
    const root = new TreeNode(3, new TreeNode(4), new TreeNode(5));
    const subRoot = new TreeNode(3, new TreeNode(4), new TreeNode(5));
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it("should return false when subRoot is not a subtree of root", () => {
    const root = new TreeNode(3, new TreeNode(4), new TreeNode(5));
    const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
    expect(isSubtree(root, subRoot)).toBe(false);
  });
});
