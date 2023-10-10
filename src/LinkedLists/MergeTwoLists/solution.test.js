const { mergeTwoLists } = require("./solution");
const { createLinkedList, linkedListToArray } = require("../List");

describe("test for merge two lists", () => {
  test("should merge two sorted linked lists correctly", () => {
    // Create two sorted linked lists
    const list1 = createLinkedList([1, 3, 5]);
    const list2 = createLinkedList([2, 4, 6]);

    // Merge the two lists
    const mergedList = mergeTwoLists(list1, list2);

    // Convert the merged list to an array for comparison
    const resultArray = linkedListToArray(mergedList);

    // The merged list should be [1, 2, 3, 4, 5, 6]
    expect(resultArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should handle empty lists correctly", () => {
    // Create an empty list and a sorted list
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([1, 2, 3]);

    // Merge the two lists
    const mergedList = mergeTwoLists(list1, list2);

    // Convert the merged list to an array for comparison
    const resultArray = linkedListToArray(mergedList);

    // The merged list should be [1, 2, 3]
    expect(resultArray).toEqual([1, 2, 3]);
  });

  test("should handle lists of different lengths correctly", () => {
    // Create two sorted linked lists of different lengths
    const list1 = createLinkedList([1, 3, 5]);
    const list2 = createLinkedList([2, 4]);

    // Merge the two lists
    const mergedList = mergeTwoLists(list1, list2);

    // Convert the merged list to an array for comparison
    const resultArray = linkedListToArray(mergedList);

    // The merged list should be [1, 2, 3, 4, 5]
    expect(resultArray).toEqual([1, 2, 3, 4, 5]);
  });
});
