const hasCycle = require("./solution");
const { linkedListToArray, createLinkedList } = require("../List");

describe("hasCycle", () => {
  it("should detect a cycle in a linked list", () => {
    // Create a sample linked list with a cycle: 1 -> 2 -> 3 -> 2 (cyclic)
    const arr = [1, 2, 3];
    const head = createLinkedList(arr);
    const node2 = head.next;
    const node3 = node2.next;
    node3.next = node2; // Creates a cycle

    const result = hasCycle(head);

    // The result should be true because the linked list has a cycle
    expect(result).toBe(true);
  });

  it("should handle a linked list without a cycle", () => {
    // Create a sample linked list without a cycle: 1 -> 2 -> 3 -> null (no cycle)
    const arr = [1, 2, 3];
    const head = createLinkedList(arr);

    const result = hasCycle(head);

    expect(result).toBe(false);
  });

  it("should handle an empty linked list", () => {
    // Create an empty linked list (null)
    const head = null;

    const result = hasCycle(head);

    expect(result).toBe(false);
  });

  it("should handle a linked list with a single element (no cycle)", () => {
    const arr = [1];
    const head = createLinkedList(arr);

    const result = hasCycle(head);

    expect(result).toBe(false);
  });
});
