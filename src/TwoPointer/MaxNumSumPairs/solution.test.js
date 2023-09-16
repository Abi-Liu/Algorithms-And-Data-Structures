const solution = require("./solution");

describe("Test for max num of k sum pairs", () => {
  test("for nums = [1,2,3,4], k = 5", () => {
    const nums = [1, 2, 3, 4],
      k = 5;
    expect(solution(nums, k)).toBe(2);
  });

  test("for nums = [3,1,3,4,3], k = 6", () => {
    const nums = [3, 1, 3, 4, 3],
      k = 6;
    expect(solution(nums, k)).toBe(1);
  });

  test("For nums = [1,2,3,4,5,6], k = 7", () => {
    const nums = [1, 2, 3, 4, 5, 6],
      k = 7;
    expect(solution(nums, k)).toBe(3);
  });

  test("for nums = [], k = 2", () => {
    const nums = [],
      k = 2;
    expect(solution(nums, k)).toBe(0);
  });
});
