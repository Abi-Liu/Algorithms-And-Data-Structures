const sol = require("./solution");

describe("Search in Rotated Sorted Arr", () => {
  test("nums = [4,5,6,7,0,1,2], target = 0", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2],
      target = 0;
    expect(sol(nums, target)).toBe(4);
  });
  test("nums = [4,5,6,7,0,1,2], target = 0", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2],
      target = 3;
    expect(sol(nums, target)).toBe(-1);
  });
  test("nums = [1], target = 0", () => {
    const nums = [1],
      target = 0;
    expect(sol(nums, target)).toBe(-1);
  });
  test("nums = [1,3], target = 3", () => {
    const nums = [1, 3],
      target = 3;
    expect(sol(nums, target)).toBe(1);
  });
});
