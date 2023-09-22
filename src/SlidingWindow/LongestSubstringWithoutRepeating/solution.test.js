const solution = require("./solution");

describe("Test for longest substring without repeating chars", () => {
  test('s = "abcabcbb"', () => {
    const s = "abcabcbb";
    expect(solution(s)).toBe(3);
  });

  test('s = "bbbbb"', () => {
    const s = "bbbbb";
    expect(solution(s)).toBe(1);
  });

  test('s = "a"', () => {
    const s = "a";
    expect(solution(s)).toBe(1);
  });

  test('s = "pwwkew"', () => {
    const s = "pwwkew";
    expect(solution(s)).toBe(3);
  });
});
