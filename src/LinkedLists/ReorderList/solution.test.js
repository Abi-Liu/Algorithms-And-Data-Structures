const reorderList = require("./solution");
const { linkedListToArray, ListNode, createLinkedList } = require("../List");

describe("reorderList", () => {
  it("should reorder the linked list correctly", () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);

    reorderList(head);

    const resultArray = linkedListToArray(head);

    expect(resultArray).toEqual([1, 5, 2, 4, 3]);
  });

  it("should handle lists with a single element", () => {
    const head = createLinkedList([1]);

    reorderList(head);

    const resultArray = linkedListToArray(head);
    expect(resultArray).toEqual([1]);
  });
});
