// link: https://leetcode.com/problems/find-the-duplicate-number/

var findDuplicate = function (nums) {
  let slow = 0,
    fast = 0;
  while (true) {
    // traverse through the array as if it were a linked list, with the value at an index is the pointer to another index in the array
    // move fast at twice the speed of slow
    // when fast and slow intersect, break
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  // create a second slow variable starting at the head
  // increment both slow variables until they intersect and return the value of slow.
  let slow2 = 0;
  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];
    if (slow === slow2) {
      return slow;
    }
  }
};

module.exports = findDuplicate;
