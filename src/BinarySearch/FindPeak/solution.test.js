const solution = require("./solution");

describe("Test for find peak element", () => {
  test("nums = [1,2,3,1]", () => {
    const nums = [1, 2, 3, 1];
    expect(solution(nums)).toBe(2);
  });

  test("nums = [1,2,1,3,5,6,4]", () => {
    const nums = [1, 2, 1, 3, 5, 6, 4];
    const result = solution(nums);
    expect([1, 5]).toContain(result);
  });

  test("nums = [1]", () => {
    const nums = [1];
    expect(solution(nums)).toBe(0);
  });

  test("nums = [1, 2]", () => {
    const nums = [1, 2];
    expect(solution(nums)).toBe(1);
  });
});
