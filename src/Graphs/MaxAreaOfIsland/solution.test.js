const maxAreaOfIsland = require("./solution");

describe("maxAreaOfIsland", () => {
  it("should return 6 for the first example", () => {
    const grid = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ];
    expect(maxAreaOfIsland(grid)).toBe(6);
  });

  it("should return 0 for the second example", () => {
    const grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
    expect(maxAreaOfIsland(grid)).toBe(0);
  });

  it("should handle a grid with no islands", () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(maxAreaOfIsland(grid)).toBe(0);
  });
});
