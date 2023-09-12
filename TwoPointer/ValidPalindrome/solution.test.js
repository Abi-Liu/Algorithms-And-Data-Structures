const solution = require("./solution");

describe("tests for is valid palindrome", () => {
  test('for s = "A man, a plan, a canal: Panama"', () => {
    const s = "A man, a plan, a canal: Panama";
    expect(solution(s)).toBe(true);
  });

  test('for s = "race a car"', () => {
    const s = "race a car";
    expect(solution(s)).toBe(false);
  });

  test('for s = " "', () => {
    const s = " ";
    expect(solution(s)).toBe(true);
  });
});
