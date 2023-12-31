const { reverseListIterative, reverseListRecursive } = require("./solution");
const { ListNode } = require("../List");

describe("Reverse a linked list", () => {
  test("iterative solution: should reverse a linked list", () => {
    // Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );

    // Reverse the linked list
    const reversed = reverseListIterative(head);

    // Check if the reversed list is correct: 5 -> 4 -> 3 -> 2 -> 1
    expect(reversed.val).toBe(5);
    expect(reversed.next.val).toBe(4);
    expect(reversed.next.next.val).toBe(3);
    expect(reversed.next.next.next.val).toBe(2);
    expect(reversed.next.next.next.next.val).toBe(1);
    expect(reversed.next.next.next.next.next).toBeNull();
  });

  test("iterative solution: Handle empty list", () => {
    const reversed = reverseListIterative(null);
    expect(reversed).toBeNull();
  });

  test("Recursive solution: should reverse a linked list", () => {
    // Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );

    // Reverse the linked list
    const reversed = reverseListRecursive(head);

    // Check if the reversed list is correct: 5 -> 4 -> 3 -> 2 -> 1
    expect(reversed.val).toBe(5);
    expect(reversed.next.val).toBe(4);
    expect(reversed.next.next.val).toBe(3);
    expect(reversed.next.next.next.val).toBe(2);
    expect(reversed.next.next.next.next.val).toBe(1);
    expect(reversed.next.next.next.next.next).toBeNull();
  });

  test("Recursive solution: Handle empty list", () => {
    const reversed = reverseListRecursive(null);
    expect(reversed).toBeNull();
  });
});
