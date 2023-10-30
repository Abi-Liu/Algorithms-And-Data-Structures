// link: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

var pairSum = function (head) {
  let slow = head;
  let fast = head;
  let prev = null;
  //find the mid point of the linked list
  // we need this in order to find the twin of each node.
  // once we find the center, we can reverse the second half of the linked list in order to easily work with each nodes twin
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // now we reverse the second half of the linked list
  // prev.next is to essentially split the linked list into two separate linked lists
  prev.next = null;
  let reversePrev = null;
  while (slow) {
    const next = slow.next;
    slow.next = reversePrev;
    reversePrev = slow;
    slow = next;
  }

  // now we can go through both linked list and find their twin sum for each node.
  let max = 0;
  while (reversePrev && head) {
    max = Math.max(reversePrev.val + head.val, max);
    reversePrev = reversePrev.next;
    head = head.next;
  }

  return max;
};
module.exports = pairSum;
