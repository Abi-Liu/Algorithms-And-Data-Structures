const { ListNode } = require("../List");

// link: https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function (l1, l2) {
  // create variables to store the carry value if there is one, and a new linked list and pointer to store our new list
  let left = 0;
  let head = new ListNode();
  let pointer = head;

  // loop through both lists until one or both reach the end.
  while (l1 && l2) {
    // the sum will be the values of the two nodes plus whatever is left over from the previous operation
    let sum = l1.val + l2.val + left;
    // if sum is greater or equal to ten then left will equal 1 if not, it will equal 0.
    left = sum >= 10 ? 1 : 0;
    // create the next node to store the mod of sum
    head.next = new ListNode(sum % 10);
    // shift all lists one node.
    l1 = l1.next;
    l2 = l2.next;
    head = head.next;
  }

  // if one list is bigger than the other, rest will now carry that list.
  let rest = l1 || l2;
  // loop through list and add the value and remainder from the last operation and append to the result list
  // repeat until we have gone through every node left
  while (rest) {
    let sum = rest.val + left;
    left = sum >= 10 ? 1 : 0;
    head.next = new ListNode(sum % 10);
    rest = rest.next;
    head = head.next;
  }
  // if by the end we still have a leftover, we append it to a new node
  if (left === 1) {
    head.next = new ListNode(1);
  }
  return pointer.next;
};

module.exports = addTwoNumbers;
