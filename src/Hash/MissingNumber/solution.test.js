const missingNumber = require("./solution");

describe("missingNumber", () => {
  // returns the missing number in an array of consecutive integers
  it("should return the missing number when given an array of consecutive integers", () => {
    expect(missingNumber([0, 1, 3])).toBe(2);
    expect(missingNumber([0, 1, 2, 4])).toBe(3);
    expect(missingNumber([1, 2, 3, 4, 5])).toBe(0);
  });

  // returns 0 when given an array with only one element, 1
  it("should return 0 when given an array with only one element, 1", () => {
    expect(missingNumber([1])).toBe(0);
  });

  // returns the last element + 1 when given an array of consecutive integers without a missing number
  it("should return the last element + 1 when given an array of consecutive integers without a missing number", () => {
    expect(missingNumber([0, 1, 2, 3])).toBe(4);
    expect(missingNumber([0, 1, 2, 3, 4, 5])).toBe(6);
  });
});
