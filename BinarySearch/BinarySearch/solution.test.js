const sol = require("./solution");

describe("Test for binary search", () => {
  test("for nums = [-1,0,3,5,9,12], target = 9", () => {
    const nums = [-1, 0, 3, 5, 9, 12],
      target = 9;
    expect(sol(nums, target)).toBe(4);
  });

  test("for nums = [-1,0,3,5,9,12], target = 2", () => {
    const nums = [-1, 0, 3, 5, 9, 12],
      target = 2;
    expect(sol(nums, target)).toBe(-1);
  });

  test("for nums = [-1,0,3,5,9,12,13,14,16,18,20,22,25,37], target = 22", () => {
    const nums = [-1, 0, 3, 5, 9, 12, 13, 14, 16, 18, 20, 22, 25, 37],
      target = 22;
    expect(sol(nums, target)).toBe(11);
  });
});
