const numIslands = require("./solution");

describe("numIslands", () => {
  it("should return 1 for the first example", () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numIslands(grid)).toBe(1);
  });

  it("should return 3 for the second example", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(grid)).toBe(3);
  });

  it("should handle a grid with no islands", () => {
    const grid = [
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"],
    ];
    expect(numIslands(grid)).toBe(0);
  });
});
