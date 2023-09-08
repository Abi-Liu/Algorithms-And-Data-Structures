const solution = require("./solution-slow-refactor-later");

describe("Top Frequent K Elements Test", () => {
  test("for nums = [1,1,1,2,2,3], k = 2", () => {
    const nums = [1, 1, 1, 2, 2, 3],
      k = 2;
    expect(solution(nums, k)).toEqual(["1", "2"] || ["2", "1"]);
  });

  test("for nums = [1], k = 1", () => {
    const nums = [1],
      k = 1;
    expect(solution(nums, k)).toEqual(["1"]);
  });

  test("for nums = [1,2], k = 2", () => {
    const nums = [1, 2],
      k = 2;
    expect(solution(nums, k)).toEqual(["1", "2"] || ["2", "1"]);
  });
});
