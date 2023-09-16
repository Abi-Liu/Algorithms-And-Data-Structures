const solution = require("./solution");

describe("Test for Group Anagram solution", () => {
  test('strs = ["eat","tea","tan","ate","nat","bat"]', () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    expect(solution(strs)).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ]);
  });

  test('strs = [""]', () => {
    const strs = [""];
    expect(solution(strs)).toEqual([[""]]);
  });
});
