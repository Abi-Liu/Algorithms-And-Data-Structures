const solution = require("./solution");

describe("test for longest consecutive sequence", () => {
  test("for nums = [100,4,200,1,3,2]", () => {
    const nums = [100, 4, 200, 1, 3, 2];
    const res = solution(nums);
    const expected = 4;
    expect(res).toBe(expected);
  });

  test("for nums = [0,3,7,2,5,8,4,6,0,1]", () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    const res = solution(nums);
    expect(res).toBe(9);
  });

  test("for nums = [9,1,4,7,3,-1,0,5,8,-1,6]", () => {
    const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
    const res = solution(nums);
    expect(res).toBe(7);
  });

  test("for nums = []", () => {
    const nums = [];
    const res = solution(nums);
    expect(res).toBe(0);
  });
});
