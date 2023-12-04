const minRemoveToMakeValid = require("./solution");

describe("minRemoveToMakeValid", () => {
  it("should remove minimum parentheses to make the string valid (scenario 1)", () => {
    const s = "lee(t(c)o)de)";
    const result = minRemoveToMakeValid(s);

    // Valid output possibilities: "lee(t(co)de)", "lee(t(c)ode)", or "lee(t(c)o)de"
    expect(
      result === "lee(t(co)de)" ||
        result === "lee(t(c)ode)" ||
        result === "lee(t(c)o)de"
    ).toBe(true);
  });

  it("should remove minimum parentheses to make the string valid (scenario 2)", () => {
    const s = "a)b(c)d";
    const result = minRemoveToMakeValid(s);

    // Valid output possibilities: "ab(c)d"
    expect(result).toBe("ab(c)d");
  });

  it("should remove minimum parentheses to make the string valid (scenario 3)", () => {
    const s = "))((";
    const result = minRemoveToMakeValid(s);

    // Valid output: ""
    expect(result).toBe("");
  });
});
