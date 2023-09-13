const MinStack = require("./solution");

describe("Test for min stack", () => {
  test("test number 1", () => {
    const res = [];
    const stack = new MinStack();
    res.push(null);
    res.push(stack.push(-2));
    res.push(stack.push(0));
    res.push(stack.push(-3));
    res.push(stack.getMin());
    res.push(stack.pop());
    res.push(stack.top());
    res.push(stack.getMin());
    expect(res).toEqual([null, null, null, null, -3, null, 0, -2]);
  });
});
