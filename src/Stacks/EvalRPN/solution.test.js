const solution = require("./solution");

describe("Test for eval RPN", () => {
  test('for tokens = ["2","1","+","3","*"]', () => {
    const tokens = ["2", "1", "+", "3", "*"];
    expect(solution(tokens)).toBe(9);
  });

  test('for tokens = ["4","13","5","/","+"]', () => {
    const tokens = ["4", "13", "5", "/", "+"];
    expect(solution(tokens)).toBe(6);
  });

  test('for tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', () => {
    const tokens = [
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ];
    expect(solution(tokens)).toBe(22);
  });
});
