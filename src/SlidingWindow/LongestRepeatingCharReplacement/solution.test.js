const sol = require("./solution");

describe("Longest Repeating Character Replacement test", () => {
  test('s = "ABAB", k = 2', () => {
    const s = "ABAB",
      k = 2;
    expect(sol(s, k)).toBe(4);
  });

  test('s = "AABABBBA", k = 1', () => {
    const s = "AABABBA",
      k = 1;
    expect(sol(s, k)).toBe(4);
  });

  test('s = "ABAB", k = 2', () => {
    const s = "ABBB",
      k = 2;
    expect(sol(s, k)).toBe(4);
  });
});
