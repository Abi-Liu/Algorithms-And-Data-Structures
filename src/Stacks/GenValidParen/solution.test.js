const sol = require("./solution");

describe("Test for generate valid parentheses", () => {
  test("n = 3", () => {
    expect(sol(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
  });
  test("n = 2", () => {
    expect(sol(2)).toEqual(["(())", "()()"]);
  });
  test("n = 1", () => {
    expect(sol(1)).toEqual(["()"]);
  });
  test("n = 4", () => {
    expect(sol(4)).toEqual([
      "(((())))",
      "((()()))",
      "((())())",
      "((()))()",
      "(()(()))",
      "(()()())",
      "(()())()",
      "(())(())",
      "(())()()",
      "()((()))",
      "()(()())",
      "()(())()",
      "()()(())",
      "()()()()",
    ]);
  });
});
