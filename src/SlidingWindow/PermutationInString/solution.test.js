const sol = require("./solution");

describe("Permutation in String test", () => {
  test('s1 = "ab", s2 = "eidbaooo"', () => {
    const s1 = "ab",
      s2 = "eidbaooo";
    expect(sol(s1, s2)).toBe(true);
  });

  test('s1 = "ab", s2 = "eidboaoo"', () => {
    const s1 = "ab",
      s2 = "eidboaoo";
    expect(sol(s1, s2)).toBe(false);
  });

  test('s1 = "adc", s2 = "dcda"', () => {
    const s1 = "adc",
      s2 = "dcda";
    expect(sol(s1, s2)).toBe(true);
  });

  test('s1 = "adc", s2 = "dcba"', () => {
    const s1 = "adc",
      s2 = "dcba";
    expect(sol(s1, s2)).toBe(false);
  });
});
