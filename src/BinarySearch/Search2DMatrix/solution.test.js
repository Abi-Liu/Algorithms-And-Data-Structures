const solution = require("./solution");

describe("test for search 2d array", () => {
  test("matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", () => {
    const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      target = 3;
    expect(solution(matrix, target)).toBe(true);
  });

  test("matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13", () => {
    const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      target = 13;
    expect(solution(matrix, target)).toBe(false);
  });

  test("matrix = [[1]], target = 0", () => {
    const matrix = [[1]],
      target = 0;
    expect(solution(matrix, target)).toBe(false);
  });
});
