const maxLevelSum = require("./solution");

const tree1 = {
  val: 1,
  left: {
    val: 7,
    left: { val: 7 },
    right: { val: -8 },
  },
  right: {
    val: 0,
  },
};

const tree2 = {
  val: 989,
  right: {
    val: 10250,
    left: { val: 98693 },
    right: {
      val: -89388,
      right: { val: -32127 },
    },
  },
};

const tree3 = {
  val: 3,
  left: {
    val: 2,
    left: { val: 15 },
    right: { val: 7 },
  },
  right: {
    val: 12,
  },
};

it("should return 2 for the given tree", () => {
  expect(maxLevelSum(tree1)).toBe(2);
});

it("should return 2 for another example tree", () => {
  expect(maxLevelSum(tree2)).toBe(2);
});

it("should return 3 for the third tree", () => {
  expect(maxLevelSum(tree3)).toBe(3);
});
