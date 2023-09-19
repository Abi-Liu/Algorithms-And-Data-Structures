// link: //leetcode.com/problems/successful-pairs-of-spells-and-potions/description/?envType=study-plan-v2&envId=leetcode-75

https: var successfulPairs = function (spells, potions, success) {
  const pairs = [];
  // sort the potions array so we can utilize binary search
  potions.sort((a, b) => a - b);
  // loop through the spells array, and for each spell
  // we need to find the minimum index where potions[i] * spells[i] >= success
  // once we find that index, we know all elements to the right will also be successful since it is sorted lowest to highest
  // then to get the total num => potions.length - minIndex
  for (let i = 0; i < spells.length; i++) {
    let left = 0,
      right = potions.length - 1;
    let minIndex = Infinity;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (spells[i] * potions[mid] >= success) {
        minIndex = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (minIndex !== Infinity) {
      pairs.push(potions.length - minIndex);
    } else {
      pairs.push(0);
    }
  }
  return pairs;
};
