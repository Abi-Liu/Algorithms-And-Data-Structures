// link: https://leetcode.com/problems/permutation-in-string/

var checkInclusion = function (s1, s2) {
  const map = new Map();
  //go through and count the frequency of each char in s1
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], map.get(s1[i]) + 1 || 1);
  }
  // initialize left and right pointer to create a window
  let left = 0,
    right = 0;
  // loop while right is less than s2.length
  while (right < s2.length) {
    // if map has the character and the current right index, decrement the frequency count or delete it entirely if it is at 1
    if (map.has(s2[right])) {
      if (map.get(s2[right]) === 1) {
        map.delete(s2[right]);
      } else {
        map.set(s2[right], map.get(s2[right]) - 1);
      }
      //   if the size of the map is 0, we know we have found a permuatation
      if (map.size === 0) {
        return true;
      }
    } else {
      // else we want to keep the right pointer at the same spot, because we will be incrementing at the end, we want to decrement it so it stays in the same spot for the next iteration of the loop.
      // we then want to add back the characters from the left pointer to the set and then increment the left pointer.
      // this part is a bit confusing so I would recommend working through the example s1 = 'adc' s2 = 'dcda' and s1 = 'adc', s2 = 'dcba'
      // console.log the left and right pointers and see how it works.
      right--;
      map.set(s2[left], map.get(s2[left]) + 1 || 1);
      left++;
    }
    right++;
  }
  return false;
};

module.exports = checkInclusion;
