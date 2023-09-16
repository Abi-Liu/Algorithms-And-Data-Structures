const solution = require("./solution");

describe("test for trapping rain water solution", () => {
  test("for height = [0,1,0,2,1,0,1,3,2,1,2,1]", () => {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    expect(solution(height)).toBe(6);
  });

  test("for height = [4,2,0,3,2,5]", () => {
    const height = [4, 2, 0, 3, 2, 5];
    expect(solution(height)).toBe(9);
  });

  test("for height = [11,1,0,2,1,0,1,3,2,1,2,11]", () => {
    const height = [11, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 11];
    expect(solution(height)).toBe(97);
  });
});
