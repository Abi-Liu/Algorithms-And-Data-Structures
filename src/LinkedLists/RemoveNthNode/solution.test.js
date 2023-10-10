const removeNthFromEnd = require("./solution");
const { ListNode, createLinkedList, linkedListToArray } = require("../List");

describe("removeNthFromEnd", () => {
  it("should remove the nth node from the end correctly", () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const modifiedList = removeNthFromEnd(head, 2);
    const resultArray = linkedListToArray(modifiedList);
    expect(resultArray).toEqual([1, 2, 3, 5]);
  });

  it("should handle removing the first node from the list (n equals list length)", () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const modifiedList = removeNthFromEnd(head, 5);
    const resultArray = linkedListToArray(modifiedList);
    expect(resultArray).toEqual([2, 3, 4, 5]);
  });

  it("should handle lists with a single element (n = 1)", () => {
    const head = createLinkedList([1]);
    const modifiedList = removeNthFromEnd(head, 1);
    expect(modifiedList).toBeNull();
  });
});
