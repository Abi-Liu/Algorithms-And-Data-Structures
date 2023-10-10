// link: https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function (list1, list2) {
  // create a new list
  let merge = new ListNode(null);
  // creater a pointer variable to point at the first element of the list.
  let pointer = merge;
  // now we go through until we reach the end of a list
  while (list1 && list2) {
    // we check to see which value is lower, and we add the lower value to the next point in our list
    // we also have to move onto the next node for both our merge list and the list with the lower value
    if (list2.val < list1.val) {
      merge.next = list2;
      list2 = list2.next;
    } else {
      merge.next = list1;
      list1 = list1.next;
    }
    merge = merge.next;
  }
  // get the remaining elements in a list if they are of uneven size
  const remaining = list1 || list2;
  merge.next = remaining;
  // return pointer.next because pointer is null
  return pointer.next;
};

module.exports = {
  mergeTwoLists,
};
