const solution = require("./solution");

describe("Properly determines if they are valid anagrams", () => {
  test('for s = "anagram", t = "nagaram"', () => {
    expect(solution("anagram", "nagaram")).toBe(true);
  });

  test('for s = "rat", t = "car"', () => {
    const s = "rat",
      t = "car";
    expect(solution(s, t)).toBe(false);
  });

  test('for s = "acclimatiser", t = "cameralistic"', () => {
    const s = "acclimatiser",
      t = "cameralistic";
    expect(solution(s, t)).toBe(true);
  });

  test('for s = "acclimatiserw", t = "cameralistics"', () => {
    const s = "acclimatiserw",
      t = "cameralistics";
    expect(solution(s, t)).toBe(false);
  });
});
