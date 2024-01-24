const searchRange = require("./solution");
describe("searchRange", () => {
  // Returns the correct range of indices for a target that appears multiple times in the input array
  it("should return the correct range of indices when the target appears multiple times", () => {
    const nums = [1, 2, 2, 3, 4, 4, 4, 5];
    const target = 4;
    const result = searchRange(nums, target);
    expect(result).toEqual([4, 6]);
  });

  // Returns the correct range of indices for a target that appears only once in the input array
  it("should return the correct range of indices when the target appears only once", () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 3;
    const result = searchRange(nums, target);
    expect(result).toEqual([2, 2]);
  });

  // Returns [-1, -1] if the target is not found in the input array
  it("should return [-1, -1] when the target is not found", () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 6;
    const result = searchRange(nums, target);
    expect(result).toEqual([-1, -1]);
  });

  // Returns [0, 0] if the input array has length 1 and the target is found
  it("should return [0, 0] when the input array has length 1 and the target is found", () => {
    const nums = [5];
    const target = 5;
    const result = searchRange(nums, target);
    expect(result).toEqual([0, 0]);
  });

  // Returns [-1, -1] if the input array has length 1 and the target is not found
  it("should return [-1, -1] when the input array has length 1 and the target is not found", () => {
    const nums = [5];
    const target = 6;
    const result = searchRange(nums, target);
    expect(result).toEqual([-1, -1]);
  });

  // Returns [-1, -1] if the target is less than the first element in the input array
  it("should return [-1, -1] when the target is less than the first element in the input array", () => {
    const nums = [2, 3, 4, 5];
    const target = 1;
    const result = searchRange(nums, target);
    expect(result).toEqual([-1, -1]);
  });

  // Returns [-1, -1] if the target is greater than the last element in the input array
  it("should return [-1, -1] when the target is greater than the last element in the input array", () => {
    const nums = [2, 3, 4, 5];
    const target = 6;
    const result = searchRange(nums, target);
    expect(result).toEqual([-1, -1]);
  });
});
