const pairSum = require("./solution");
const { createLinkedList } = require("../List");

describe("pairSum", () => {
  it("should return 0 for a two-node linked list", () => {
    const head = createLinkedList([3, 2]);
    expect(pairSum(head)).toBe(5);
  });

  it("should return the maximum pair sum for a large linked list", () => {
    const linkedListArray = [1, 4, 3, 2, 5, 6, 7, 8, 9, 10];
    const head = createLinkedList(linkedListArray);

    expect(pairSum(head)).toBe(13);
  });

  it("should handle negative values in the linked list", () => {
    const linkedListArray = [-2, 5, -3, 1, -6];
    const head = createLinkedList(linkedListArray);

    expect(pairSum(head)).toBe(6);
  });
});
