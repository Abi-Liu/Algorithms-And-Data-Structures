// link: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

var deleteMiddle = function (head) {
  // if head is null we can return null, and if the linked list is only 1 node long, we will end up deleting that node, so we can still return null
  if (!head || !head.next) {
    return null;
  }
  // to find the middle we can use the slow and fast pointer approach.
  // the fast pointer will move ahead 2 paces while the slow moves only one
  // lets take a look at a few examples
  //  1 -> 2 -> 3 -> 4 -> 5
  //  1 -> 2 -> 3 -> 4
  // in both examples, when the fast pointer reaches the end of the list, we are currently at the node we are trying to delete
  // to solve this, we can set a prev pointer that will hold the node before the slow pointer so we can correctly remove the desired node.
  let fast = head;
  let slow = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    fast = fast.next.next;
    slow = slow.next;
  }

  prev.next = prev.next.next;
  return head;
};

module.exports = deleteMiddle;
