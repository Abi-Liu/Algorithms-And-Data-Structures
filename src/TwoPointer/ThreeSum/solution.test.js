const solution = require("./solution");

describe("test for three sum", () => {
  test("for [-1,0,1,2,-1,-4]", () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    expect(solution(nums)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test("for nums = [0,1,1]", () => {
    const nums = [0, 1, 1];
    expect(solution(nums)).toEqual([]);
  });

  test("for nums = [-2,0,0,2,2]", () => {
    const nums = [-2, 0, 0, 2, 2];
    expect(solution(nums)).toEqual([[-2, 0, 2]]);
  });
});
