// link: https://leetcode.com/problems/copy-list-with-random-pointer/description/

class Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

var copyRandomList = function (head) {
  // map to store the values of the old list
  const map = new Map();
  // loop over the list and populate the map with the values in a NEW node
  let curr = head;
  while (curr) {
    const copy = new Node(curr.val);
    map.set(curr, copy);
    curr = curr.next;
  }

  // reinitialize the curr pointer to the head of the list
  // now we can begin to loop through and create the links between the nodes
  curr = head;
  while (curr) {
    const copy = map.get(curr);
    copy.next = map.get(curr.next) || null;
    copy.random = map.get(curr.random) || null;
    curr = curr.next;
  }

  return map.get(head);
};

module.exports = copyRandomList;
