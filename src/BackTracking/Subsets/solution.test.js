const subsets = require("./solution");

function arrayToSet(arr) {
  return new Set(arr.map((subset) => new Set(subset)));
}

describe("subsets", () => {
  it("should return an empty array for an empty input array", () => {
    const expected = [[]];
    const result = subsets([]);
    expect(arrayToSet(result)).toEqual(arrayToSet(expected));
  });

  it("should return all subsets for a small input array", () => {
    const expected = [[], [1]];
    const result = subsets([1]);
    expect(arrayToSet(result)).toEqual(arrayToSet(expected));
  });

  it("should return all subsets for a larger input array", () => {
    const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
    const result = subsets([1, 2, 3]);
    expect(arrayToSet(result)).toEqual(arrayToSet(expected));
  });
});
