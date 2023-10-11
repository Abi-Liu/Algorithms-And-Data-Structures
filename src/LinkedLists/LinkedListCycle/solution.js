// link: https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function (head) {
  // create a set to store the nodes we pass
  const set = new Set();

  // loop through the linked list and add all nodes to the set.
  // if the set contains a node, that means the list is a cycle and we can return true
  while (head) {
    if (set.has(head)) {
      return true;
    } else {
      set.add(head);
    }
    head = head.next;
  }
  // return false otherwise.
  return false;
};

module.exports = hasCycle;
