const addTwoNumbers = require("./solution");
const { createLinkedList, linkedListToArray } = require("../List");

describe("addTwoNumbers", () => {
  it("should add two numbers represented as linked lists", () => {
    const list1 = createLinkedList([2, 4, 3]);
    const list2 = createLinkedList([5, 6, 4]);

    const result = addTwoNumbers(list1, list2);

    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([7, 0, 8]);
  });

  it("should handle lists with different lengths", () => {
    const list1 = createLinkedList([5]);
    const list2 = createLinkedList([7, 2, 1]);

    const result = addTwoNumbers(list1, list2);

    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([2, 3, 1]);
  });

  it("should handle lists with carry in the highest digit", () => {
    const list1 = createLinkedList([9, 9, 9, 9]);
    const list2 = createLinkedList([1]);

    const result = addTwoNumbers(list1, list2);

    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([0, 0, 0, 0, 1]);
  });
});
