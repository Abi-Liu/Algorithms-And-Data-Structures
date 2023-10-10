// link: https://leetcode.com/problems/reorder-list/description/

// We need to first split the lists in half. We can then reverse the second half and merge the two lists together, alternating between the two.

var reorderList = function (head) {
  // splits the list in half.
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // now we have essentially two lists, the second list begins at the next node of the slow pointer
  // because we want to keep these lists separate, we want to have first create a pointer variable to store the second half and make the end of the first list point to null
  // we now can begin to reverse the second list
  let curr = slow.next;
  let prev = null;
  slow.next = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // here we begin the merging process
  // we merge the two lists alternating back and forth until we reach the end.
  let h1 = head;
  let h2 = prev;
  while (h2) {
    let temp = h1.next;
    h1.next = h2;
    h1 = h2;
    h2 = temp;
  }
};

module.exports = reorderList;
