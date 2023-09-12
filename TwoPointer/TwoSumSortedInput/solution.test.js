const solution = require("./solution");

describe("test for two sum with sorted input", () => {
  test("for numbers = [2,7,11,15], target = 9", () => {
    const numbers = [2, 7, 11, 15],
      target = 9;
    expect(solution(numbers, target)).toEqual([1, 2]);
  });

  test("for numbers = [2,3,4], target = 6", () => {
    const numbers = [2, 3, 4],
      target = 6;
    expect(solution(numbers, target)).toEqual([1, 3]);
  });

  test("for numbers = [-1,0], target = -1", () => {
    const numbers = [-1, 0],
      target = -1;
    expect(solution(numbers, target)).toEqual([1, 2]);
  });

  test("for numbers = [-5, -3, 0, 2, 7], target = -1", () => {
    const numbers = [-5, -3, 0, 2, 7],
      target = -1;
    expect(solution(numbers, target)).toEqual([2, 4]);
  });
});
