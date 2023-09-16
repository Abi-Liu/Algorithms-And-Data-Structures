const sol = require("./solution");

describe("Test for next greater element", () => {
  test("for nums1 = [4,1,2], nums2 = [1,3,4,2]", () => {
    const nums1 = [4, 1, 2],
      nums2 = [1, 3, 4, 2];
    expect(sol(nums1, nums2)).toEqual([-1, 3, -1]);
  });

  test("for nums1 = [2,4], nums2 = [1,2,3,4]", () => {
    const nums1 = [2, 4],
      nums2 = [1, 2, 3, 4];
    expect(sol(nums1, nums2)).toEqual([3, -1]);
  });

  test("for nums1 = [4,1,2, 7], nums2 = [10, 3, 2, 1, 5, 4, 7, 6, 9]", () => {
    const nums1 = [4, 1, 2, 7],
      nums2 = [10, 3, 2, 1, 5, 4, 7, 6, 9];
    expect(sol(nums1, nums2)).toEqual([7, 5, 5, 9]);
  });
});
