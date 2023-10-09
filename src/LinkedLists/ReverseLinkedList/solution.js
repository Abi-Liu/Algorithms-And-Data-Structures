// link: https://leetcode.com/problems/reverse-linked-list/

// iterative solution
var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

module.exports = reverseList;
