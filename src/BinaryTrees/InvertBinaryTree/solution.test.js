const invertTree = require("./solution");

describe("invertTree", function () {
  it("should invert a binary tree correctly", function () {
    // Create a sample binary tree
    // Before inverting:
    //        1
    //       / \
    //      2   3
    //     / \
    //    4   5
    const rootNode = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };

    // Invert the tree
    const invertedRoot = invertTree(rootNode);

    // After inverting:
    //        1
    //       / \
    //      3   2
    //           / \
    //          5   4

    // Check if the inverted tree is correct
    expect(invertedRoot.val).toBe(1);
    expect(invertedRoot.left.val).toBe(3);
    expect(invertedRoot.right.val).toBe(2);
    expect(invertedRoot.right.left.val).toBe(5);
    expect(invertedRoot.right.right.val).toBe(4);
  });

  it("should handle an empty tree", function () {
    // Test with an empty tree
    const invertedRoot = invertTree(null);
    expect(invertedRoot).toBe(null);
  });
});
