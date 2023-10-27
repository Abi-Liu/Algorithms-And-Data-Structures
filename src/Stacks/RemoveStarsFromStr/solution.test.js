const removeStars = require("./solution");

describe("remove stars", () => {
  it("should handle equal number of stars and letters", () => {
    s = "erase*****";
    expect(removeStars(s)).toBe("");
  });

  it("Should handle more the case where there are more letters than stars", () => {
    s = "leet**cod*e";
    expect(removeStars(s)).toBe("lecoe");
  });

  it("should handle the case where there are no stars", () => {
    s = "hello";
    expect(removeStars(s)).toBe("hello");
  });
});
