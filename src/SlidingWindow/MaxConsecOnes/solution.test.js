const longestOnes = require("./solution");

describe("longestOnes", () => {
  it("should return the maximum consecutive ones after flipping at most K zeros", () => {
    // Basic test cases
    expect(longestOnes([1, 1, 0, 0, 1, 1, 1, 0, 1, 1], 2)).toBe(7);
    expect(longestOnes([1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1], 2)).toBe(7);
    expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 0)).toBe(4);

    // Test with a large number of ones and zeros
    expect(longestOnes(Array(10000).fill(1), 0)).toBe(10000);
    expect(longestOnes(Array(10000).fill(0), 1)).toBe(1);

    // Test with K set to zero, no flipping allowed
    expect(longestOnes([1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1], 0)).toBe(3);

    // Test with K greater than the number of zeros in the array
    expect(longestOnes([1, 1, 0, 0, 1, 1, 1, 0, 1, 1], 5)).toBe(10);

    // Test with K equal to the number of zeros in the array
    expect(longestOnes([1, 1, 0, 0, 1, 1, 1, 0, 1, 1], 3)).toBe(10);

    // Test with an empty array
    expect(longestOnes([], 2)).toBe(0);

    // Test with all ones
    expect(longestOnes([1, 1, 1, 1, 1, 1], 2)).toBe(6);

    // Test with all zeros
    expect(longestOnes([0, 0, 0, 0, 0], 3)).toBe(3);
  });
});
