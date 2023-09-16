const solution = require("./solution");

describe("Test for is valid parentheses", () => {
  test('for s = "()[]{}"', () => {
    const s = "()[]{}";
    expect(solution(s)).toBe(true);
  });

  test('for s="["', () => {
    const s = "[";
    expect(solution(s)).toBe(false);
  });

  test('for s = "{[()]}[]"', () => {
    const s = "{[()]}[]";
    expect(solution(s)).toBe(true);
  });

  test('for s = "[[()]]]"', () => {
    const s = "[[()]]]";
    expect(solution(s)).toBe(false);
  });
});
