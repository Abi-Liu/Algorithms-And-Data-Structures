const sol = require("./solution");

describe("Test for top k frequent words", () => {
  test('words = ["i","love","leetcode","i","love","coding"], k = 2', () => {
    const words = ["i", "love", "leetcode", "i", "love", "coding"],
      k = 2;
    expect(sol(words, k)).toEqual(["i", "love"]);
  });
  test('words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4', () => {
    const words = [
        "the",
        "day",
        "is",
        "sunny",
        "the",
        "the",
        "the",
        "sunny",
        "is",
        "is",
      ],
      k = 4;
    expect(sol(words, k)).toEqual(["the", "is", "sunny", "day"]);
  });
  test('words = ["i","love","leetcode","i","love","coding"], k = 3', () => {
    const words = ["i", "love", "leetcode", "i", "love", "coding"],
      k = 3;
    expect(sol(words, k)).toEqual(["i", "love", "coding"]);
  });
});
