const combinationSum3 = require("./solution");

describe("combination sum 3", () => {
  it("should work for the inputs k = 3, n = 7", () => {
    const k = 3,
      n = 7;
    expect(combinationSum3(k, n)).toEqual([[1, 2, 4]]);
  });

  it("should work for the inputs k = 3, n = 9", () => {
    const k = 3,
      n = 9;
    const expectedResult = [
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ];
    const result = combinationSum3(k, n);
    result.sort();
    expectedResult.sort();
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
