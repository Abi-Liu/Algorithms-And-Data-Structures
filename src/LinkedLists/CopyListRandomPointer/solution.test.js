const copyRandomList = require("./solution");

class Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new Node();
  let current = dummy;
  for (let val of arr) {
    current.next = new Node(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to compare two linked lists
function compareLinkedLists(list1, list2) {
  while (list1) {
    if (list1.val !== list2.val) {
      return false;
    }
    if ((list1.random && !list2.random) || (!list1.random && list2.random)) {
      return false;
    }
    if (list1.random && list2.random && list1.random.val !== list2.random.val) {
      return false;
    }
    list1 = list1.next;
    list2 = list2.next;
  }
  return !list1 && !list2;
}
describe("copyRandomList", () => {
  it("should create a deep copy of the linked list with random pointers", () => {
    // Create a sample linked list with random pointers: 1 -> 2 -> 3
    const originalList = createLinkedList([1, 2, 3]);
    originalList.random = originalList.next.next; // Random pointer from 1 to 3
    originalList.next.random = originalList; // Random pointer from 2 to 1

    // Create a deep copy of the linked list
    const copiedList = copyRandomList(originalList);

    // Compare the copied list with the original list
    const areEqual = compareLinkedLists(originalList, copiedList);

    // The copied list should be deep equal to the original list
    expect(areEqual).toBe(true);
  });

  it("should handle an empty list", () => {
    // Create an empty linked list
    const originalList = null;

    // Create a deep copy of the empty list
    const copiedList = copyRandomList(originalList);

    // The copied list should be null (empty list)
    expect(copiedList).toEqual(undefined);
  });

  it("should handle a list with a single element", () => {
    // Create a list with a single element: 1
    const originalList = createLinkedList([1]);

    // Create a deep copy of the single-element list
    const copiedList = copyRandomList(originalList);

    // Compare the copied list with the original list
    const areEqual = compareLinkedLists(originalList, copiedList);

    // The copied list should be deep equal to the original list
    expect(areEqual).toBe(true);
  });
});
