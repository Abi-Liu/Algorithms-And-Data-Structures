const solution = require("./solution");

describe("Find duplicate number", () => {
  test("nums = [1,3,4,2,2]", () => {
    const nums = [1, 3, 4, 2, 2];
    expect(solution(nums)).toBe(2);
  });

  test("nums = [3,1,3,4,2]", () => {
    const nums = [3, 1, 3, 4, 2];
    expect(solution(nums)).toBe(3);
  });

  test("nums = [1, 1]", () => {
    const nums = [1, 3, 4, 2, 2];
    expect(solution(nums)).toBe(2);
  });
});
