const solution = require("./solution");

describe("test for container with the most water", () => {
  test("for height = [1,8,6,2,5,4,8,3,7]", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(solution(height)).toBe(49);
  });

  test("for height = [1,1]", () => {
    const height = [1, 1];
    expect(solution(height)).toBe(1);
  });

  test("for height = [10,16,3,3,7,9,4,20,15,9,7]", () => {
    const height = [10, 16, 3, 3, 7, 9, 4, 20, 15, 9, 7];
    expect(solution(height)).toBe(105);
  });
});
