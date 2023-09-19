const solution = require("./solution");

describe("Test for successful pairs", () => {
  test("spells = [5,1,3], potions = [1,2,3,4,5], success = 7", () => {
    const spells = [5, 1, 3],
      potions = [1, 2, 3, 4, 5],
      success = 7;
    expect(solution(spells, potions, success)).toEqual([4, 0, 3]);
  });

  test("spells = [3,1,2], potions = [8,5,8], success = 16", () => {
    const spells = [3, 1, 2],
      potions = [8, 5, 8],
      success = 16;
    expect(solution(spells, potions, success)).toEqual([2, 0, 2]);
  });

  test("spells = [4, 1, 5, 9, 10, 3], potions = [2, 5, 3, 8, 4, 7, 5, 9, 12, 10, 25], success = 16", () => {
    const spells = [4, 1, 5, 9, 10, 3],
      potions = [2, 5, 3, 8, 4, 7, 5, 9, 12, 10, 25],
      success = 16;
    expect(solution(spells, potions, success)).toEqual([9, 1, 9, 11, 11, 6]);
  });
});
