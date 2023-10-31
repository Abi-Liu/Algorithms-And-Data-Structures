const permute = require("./solution");

describe("permute", () => {
  it("should return the input array itself for a single-element array", () => {
    expect(permute([1])).toEqual([[1]]);
  });

  it("should return all permutations of a small array", () => {
    expect(permute([1, 2])).toEqual(
      expect.arrayContaining([
        [1, 2],
        [2, 1],
      ])
    );
  });

  it("should return all permutations of a larger array", () => {
    expect(permute([1, 2, 3])).toEqual(
      expect.arrayContaining([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ])
    );
  });

  it("should handle arrays with duplicate elements", () => {
    expect(permute([1, 1, 2])).toEqual(
      expect.arrayContaining([
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
      ])
    );
  });

  it("should not modify the input array", () => {
    const input = [1, 2, 3];
    permute(input);
    expect(input).toEqual([1, 2, 3]);
  });
});
