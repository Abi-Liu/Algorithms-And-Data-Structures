const solution = require("./solution");

describe("Properly determines if two sum works correctly", () => {
  test("Given nums = [2,7,11,15], target = 9 ", () => {
    const nums = [2, 7, 11, 15],
      target = 9;
    expect(solution(nums, target)).toEqual([0, 1] || [1, 0]);
  });

  test("Given nums = [3,2,4], target = 6", () => {
    const nums = [3, 2, 4],
      target = 6;
    expect(solution(nums, target)).toEqual([1, 2] || [2, 1]);
  });

  test("Given nums = [3,2,5,7,6,5,9,3], target = 6", () => {
    const nums = [3, 2, 5, 7, 6, 5, 9, 3],
      target = 6;
    expect(solution(nums, target)).toEqual([0, 7] || [7, 0]);
  });
});
