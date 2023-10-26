const combinationSum = require("./solution");

describe("combinationSum", () => {
  it("should return the correct combinations for a simple example", () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    const expected = [[2, 2, 3], [7]];
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it("should handle the case when no combinations are possible", () => {
    const candidates = [3, 4, 5];
    const target = 7;
    const expected = [];
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it("should work with an empty candidates array", () => {
    const candidates = [];
    const target = 10;
    const expected = [];
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it("should return a single combination for a simple case", () => {
    const candidates = [1];
    const target = 1;
    const expected = [[1]];
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
