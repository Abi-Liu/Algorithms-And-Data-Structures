const solution = require("./solution");

describe("test for Find Minimum in Rotated Sorted Array", () => {
  test("nums = [3,4,5,1,2]", () => {
    const nums = [3, 4, 5, 1, 2];
    expect(solution(nums)).toBe(1);
  });
  test("nums = [1,2,3,4,5,6,7]", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    expect(solution(nums)).toBe(1);
  });
  test("nums = [4,5,6,7,0,1,2]", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    expect(solution(nums)).toBe(0);
  });
});
