const letterCombinations = require("./solution");

describe("Letter Combinations of a Phone Number", () => {
  it('Test Case 1: Should return all possible letter combinations for "23"', () => {
    const result = letterCombinations("23");
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    expect(result.sort()).toEqual(expected.sort()); // Sort and compare
  });

  it("Test Case 2: Should return an empty array for an empty input string", () => {
    const result = letterCombinations("");
    const expected = [];
    expect(result).toEqual(expected);
  });

  it('Test Case 3: Should return letter combinations for a single digit "2"', () => {
    const result = letterCombinations("2");
    const expected = ["a", "b", "c"];
    expect(result.sort()).toEqual(expected.sort());
  });

  it('Test Case 4: Should handle multiple digits "234"', () => {
    const result = letterCombinations("234");
    const expected = [
      "adg",
      "adh",
      "adi",
      "aeg",
      "aeh",
      "aei",
      "afg",
      "afh",
      "afi",
      "bdg",
      "bdh",
      "bdi",
      "beg",
      "beh",
      "bei",
      "bfg",
      "bfh",
      "bfi",
      "cdg",
      "cdh",
      "cdi",
      "ceg",
      "ceh",
      "cei",
      "cfg",
      "cfh",
      "cfi",
    ];
    expect(result.sort()).toEqual(expected.sort());
  });
});
