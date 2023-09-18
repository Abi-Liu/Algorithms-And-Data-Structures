const solution = require("./solution");

describe("Test for koko eats bannanas", () => {
  test("piles = [3,6,7,11], h = 8", () => {
    const piles = [3, 6, 7, 11],
      h = 8;
    expect(solution(piles, h)).toBe(4);
  });

  test("piles = [30,11,23,4,20], h = 5", () => {
    const piles = [30, 11, 23, 4, 20],
      h = 5;
    expect(solution(piles, h)).toBe(30);
  });

  test("piles = [30,11,23,4,20], h = 6", () => {
    const piles = [30, 11, 23, 4, 20],
      h = 6;
    expect(solution(piles, h)).toBe(23);
  });
});
