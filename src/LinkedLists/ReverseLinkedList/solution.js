// link: https://leetcode.com/problems/reverse-linked-list/

// iterative solution
var reverseListIterative = function (head) {
  // pointers for the previous and current node
  let prev = null;
  let current = head;

  // now we go loop through the linked list, if current exists, that means we aren't at the end
  while (current) {
    // create a new variable to contain the next value in the list
    const next = current.next;
    // set the next node to point to the previous node
    current.next = prev;
    // update the previous and current pointers
    prev = current;
    current = next;
  }

  return prev;
};

const reverseListRecursive = function (head) {
  // this is our base case
  if (head === null || head.next === null) {
    return head;
  }
  // we recursively go down the list until we reach the final node. This will be the pointer to the new head of the list
  const newHead = reverseList(head.next);
  // now we set the next next value to equal the current node are in. this is essentially what is doing the reversing.
  // we are just switching the pointers around
  head.next.next = head;
  // set head.next to null because we dont know if we are the last node to be reversed.
  head.next = null;
  // now we return the new head of the reversed list
  return newHead;
};

module.exports = {
  reverseListIterative,
  reverseListRecursive,
};
