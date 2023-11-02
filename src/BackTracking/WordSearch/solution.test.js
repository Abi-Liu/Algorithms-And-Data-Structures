const exist = require("./solution");

describe("exist", () => {
  it("should return true if the word exists in a 1x1 grid with a one-letter word", () => {
    const board = [["A"]];
    const word = "A";
    expect(exist(board, word)).toBe(true);
  });

  it("should return false if the word does not exist in a 1x1 grid with a different letter", () => {
    const board = [["A"]];
    const word = "B";
    expect(exist(board, word)).toBe(false);
  });

  it("should return false for a 1x1 grid with an empty word", () => {
    const board = [["A"]];
    const word = "";
    expect(exist(board, word)).toBe(false);
  });

  it("should return false if the word cannot be constructed with adjacent cells in a 2x2 grid", () => {
    const board = [
      ["A", "B"],
      ["C", "D"],
    ];
    const word = "ACBD";
    expect(exist(board, word)).toBe(false);
  });

  it("should return false if the word cannot be constructed with non-adjacent cells in a 2x2 grid", () => {
    const board = [
      ["A", "B"],
      ["C", "D"],
    ];
    const word = "AD";
    expect(exist(board, word)).toBe(false);
  });

  it("should return true if the word exists in a 2x3 grid with multiple occurrences of the same letter", () => {
    const board = [
      ["A", "B", "C"],
      ["D", "E", "A"],
    ];
    const word = "ABCA";
    expect(exist(board, word)).toBe(true);
  });
});
