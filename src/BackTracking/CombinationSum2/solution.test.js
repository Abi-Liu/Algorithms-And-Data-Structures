const combinationSum2 = require("./solution");

describe("Combination sum 2", () => {
  it("should work for inputs candidates = [10,1,2,7,6,1,5], target = 8", () => {
    const candidates = [10, 1, 2, 7, 6, 1, 5],
      target = 8;
    const expectedResult = [
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ];
    const result = combinationSum2(candidates, target);
    result.sort();
    expectedResult.sort();
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  it("should work for inputs candidates = [2,5,2,1,2], target = 5", () => {
    const candidates = [2, 5, 2, 1, 2],
      target = 5;
    const expectedResult = [[1, 2, 2], [5]];
    const result = combinationSum2(candidates, target);
    result.sort();
    expectedResult.sort();
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
