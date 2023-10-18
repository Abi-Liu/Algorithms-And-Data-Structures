const lowestCommonAncestor = require("./solution");

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

describe("lowestCommonAncestor", () => {
  it("should return the lowest common ancestor of two nodes in a binary search tree", () => {
    // Create a binary search tree
    const root = new TreeNode(20);
    root.left = new TreeNode(10);
    root.right = new TreeNode(30);
    root.left.left = new TreeNode(5);
    root.left.right = new TreeNode(15);
    root.right.left = new TreeNode(25);
    root.right.right = new TreeNode(35);

    // Test case 1: Lowest common ancestor of nodes 5 and 15 is the node with value 10
    expect(lowestCommonAncestor(root, root.left.left, root.left.right)).toBe(
      root.left
    );

    // Test case 2: Lowest common ancestor of nodes 5 and 35 is the root node with value 20
    expect(lowestCommonAncestor(root, root.left.left, root.right.right)).toBe(
      root
    );

    // Test case 3: Lowest common ancestor of nodes 25 and 35 is the root.right node with value 30
    expect(lowestCommonAncestor(root, root.right.left, root.right.right)).toBe(
      root.right
    );

    // Test case 4: Lowest common ancestor of nodes 10 and 30 is the root node with value 20
    expect(lowestCommonAncestor(root, root.left, root.right)).toBe(root);

    // Test case 5: Lowest common ancestor of nodes 10 and 5 is the root node 10
    expect(lowestCommonAncestor(root, root.left, root.left.left)).toBe(
      root.left
    );
  });
});
