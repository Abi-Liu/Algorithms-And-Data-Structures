// link: https://leetcode.com/problems/minimum-window-substring/description/

var minWindow = function (s, t) {
  // create a map to store all the the characters and their respective count in t
  const map = new Map();
  // loop through t and add all the characters to map
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], map.get(t[i]) + 1 || 1);
  }

  // we will be using the sliding window method for this problem, so we need to initialize our left and right pointers
  // str will hold the substrings we find, and neededLen is how many unique characters there are in our map
  let left = 0,
    right = 0,
    str = "",
    neededLen = Array.from(map.keys()).length;

  // loop until right hits the end of string s
  while (right < s.length) {
    // inside the loop we build our window. when a specific character in our map reaches 0, we can decrement neededLen
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) - 1);
      if (map.get(s[right]) == 0) {
        neededLen--;
      }
    }

    // if neededLen hits 0, we know that we have built a valid substring for our problem.
    // we can then slice the string if it is smaller than our current string.
    while (neededLen === 0) {
      if (!str || str.length > right - left + 1) {
        str = s.slice(left, right + 1);
      }

      // now that we have found one possible substring, we need to continue checking to see if there could be a smaller substring.
      // we can do that by incrementing the left counter until it reaches a character in string t
      // if the count in the map is 0, we know we can begin icrementing the right counter again to continue looking
      // we need the count to be exactly 0, because if there were many counts of the letter in the substring, the count in the map would be negative until left reaches the last one and we can increment that from 0 to 1
      if (map.get(s[left]) === 0) {
        neededLen++;
      }
      map.set(s[left], map.get(s[left]) + 1);
      left++;
    }
    right++;
  }
  return str;
};

module.exports = minWindow;
