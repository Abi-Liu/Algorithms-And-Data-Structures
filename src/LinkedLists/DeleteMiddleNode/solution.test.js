const deleteMiddle = require("./solution");
const { createLinkedList, linkedListToArray } = require("../List");

describe("deleteMiddle", () => {
  it("should delete the middle element from a linked list", () => {
    const arr = [1, 2, 3, 4, 5];
    const linkedList = createLinkedList(arr);
    const result = deleteMiddle(linkedList);
    const modifiedArray = linkedListToArray(result);
    expect(modifiedArray).toEqual([1, 2, 4, 5]);
  });

  it("should handle an empty list", () => {
    const linkedList = null;
    const result = deleteMiddle(linkedList);
    expect(result).toBeNull();
  });

  it("should handle a single-element list", () => {
    const linkedList = createLinkedList([42]);
    const result = deleteMiddle(linkedList);
    expect(result).toBeNull();
  });
});
