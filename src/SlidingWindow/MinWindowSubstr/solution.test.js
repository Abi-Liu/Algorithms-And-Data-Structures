const minWindow = require("./solution");

describe("minWindow", () => {
  it("should find the minimum window substring", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
    expect(minWindow("AA", "AA")).toBe("AA");
    expect(minWindow("a", "aa")).toBe("");
    expect(minWindow("ADOBECODEBANC", "XYZ")).toBe("");
  });

  it("should handle edge cases", () => {
    expect(minWindow("", "ABC")).toBe("");
    expect(minWindow("ADOBECODEBANC", "")).toBe("");
    expect(minWindow("", "")).toBe("");
  });
});
