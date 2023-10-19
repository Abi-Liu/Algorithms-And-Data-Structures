const maxVowels = require("./solution");

describe("maxVowels", () => {
  it("should return 0 for an empty string", () => {
    const s = "";
    const k = 2;
    expect(maxVowels(s, k)).toBe(0);
  });

  it("should return the correct result for a string without vowels", () => {
    const s = "xyz";
    const k = 2;
    expect(maxVowels(s, k)).toBe(0);
  });

  it("should return the correct result for a string with all vowels", () => {
    const s = "aeiou";
    const k = 3;
    expect(maxVowels(s, k)).toBe(3);
  });

  it("should return the correct result for a string with some vowels", () => {
    const s = "hellothere";
    const k = 5;
    expect(maxVowels(s, k)).toBe(2);
  });

  it("should handle leading and trailing consonants", () => {
    const s = "thistextcontainsvowels";
    const k = 6;
    expect(maxVowels(s, k)).toBe(3);
  });
});
