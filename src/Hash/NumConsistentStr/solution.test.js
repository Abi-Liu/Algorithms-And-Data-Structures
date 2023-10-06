const sol = require("./solution");

describe("test for num consistent strings", () => {
  test('allowed = "ab", words = ["ad","bd","aaab","baa","badab"]', () => {
    const allowed = "ab",
      words = ["ad", "bd", "aaab", "baa", "badab"];
    expect(sol(allowed, words)).toBe(2);
  });

  test('allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]', () => {
    const allowed = "abc",
      words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
    expect(sol(allowed, words)).toBe(7);
  });

  test('allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]', () => {
    const allowed = "cad",
      words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
    expect(sol(allowed, words)).toBe(4);
  });
});
