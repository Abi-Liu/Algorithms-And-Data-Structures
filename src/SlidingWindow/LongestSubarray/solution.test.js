const longestSubarray = require("./solution");

describe("longestSubarray", () => {
  it("Should return 4 for [1,1,0,0,1,1,1,0,1]", () => {
    const result = longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1]);
    expect(result).toBe(4);
  });

  it("Should return 5 for [0,1,1,0,1,1,1,0,1]", () => {
    const result = longestSubarray([0, 1, 1, 0, 1, 1, 1, 0, 1]);
    expect(result).toBe(5);
  });

  it("Should return 3 for [1,1,1,1]", () => {
    const result = longestSubarray([1, 1, 1, 1]);
    expect(result).toBe(3);
  });

  it("Should return 0 for [0,0,0,0]", () => {
    const result = longestSubarray([0, 0, 0, 0]);
    expect(result).toBe(0);
  });
});
