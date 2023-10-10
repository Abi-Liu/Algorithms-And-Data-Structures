// link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function (head, n) {
  // in order to find the node that is n away from the end, we can initialize a counter and two pointers to the list
  // the fast pointer will go through the list until count === n
  // then we can start incrementing the lists together until we reach the end
  let count = 0;
  let slow = head;
  let fast = head;
  while (fast.next) {
    if (count !== n) {
      fast = fast.next;
      count++;
    } else {
      fast = fast.next;
      slow = slow.next;
    }
  }
  // if count is not yet equal to n, we know that n is equal to the size of the list
  // we can then just return head.next since we want to remove the first element
  if (count !== n) {
    return head.next;
  }
  // if not, we change the next node to the next next node and we can return the solution
  slow.next = slow.next.next;
  return head;
};

module.exports = removeNthFromEnd;
