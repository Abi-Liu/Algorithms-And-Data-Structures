const dailyTemperatures = require("./solution");

describe("dailyTemperatures", () => {
  it("should return the correct result for a simple input", () => {
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
    const expected = [1, 1, 4, 2, 1, 1, 0, 0];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });

  it("should handle an empty input array", () => {
    const temperatures = [];
    const expected = [];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });

  it("should handle an input array with only one element", () => {
    const temperatures = [100];
    const expected = [0];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });

  it("should handle an input array with decreasing temperatures", () => {
    const temperatures = [80, 70, 60, 50, 40];
    const expected = [0, 0, 0, 0, 0];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });

  it("should handle an input array with increasing temperatures", () => {
    const temperatures = [40, 50, 60, 70, 80];
    const expected = [1, 1, 1, 1, 0];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });
});
