const solution = require("../ContainsDuplicate");

describe("Properly determines if there is a duplicate in the array", () => {
  test("for array [1,2,3,1]", () => {
    const arr = [1, 2, 3, 1];
    expect(solution(arr)).toBe(true);
  });

  test("for array [1,2,3,4]", () => {
    const arr = [1, 2, 3, 4];
    expect(solution(arr)).toBe(false);
  });

  test("for array [1,1,1,3,3,4,3,2,4,2]", () => {
    const arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(solution(arr)).toBe(true);
  });
});
