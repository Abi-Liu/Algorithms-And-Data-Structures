const solution = require("./solution");

describe("Test for product of array except self", () => {
  test("for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    expect(solution(nums)).toEqual([24, 12, 8, 6]);
  });

  test("for nums = [-1,1,0,-3,3]", () => {
    const nums = [1, 1, 0, 3, 3];
    const result = solution(nums);
    expect(result).toEqual([0, 0, 9, 0, 0]);
  });

  test("for nums = [1, 5,8,4,2,9,10]", () => {
    const nums = [1, 5, 8, 4, 2, 9, 10];
    const result = solution(nums);
    const expectedRes = [28800, 5760, 3600, 7200, 14400, 3200, 2880];
    expect(result).toEqual(expectedRes);
  });
});
