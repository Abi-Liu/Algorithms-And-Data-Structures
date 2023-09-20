const solution = require("./solution");

describe("Test for best time to buy/sell stocks", () => {
  test("prices = [7,1,5,3,6,4]", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(solution(prices)).toBe(5);
  });

  test("prices = [7,6,4,3,1]", () => {
    const prices = [7, 6, 4, 3, 1];
    expect(solution(prices)).toBe(0);
  });

  test("prices = [1,2,4,2,5,7,2,4,9,0,9]", () => {
    const prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9];
    expect(solution(prices)).toBe(9);
  });
});
