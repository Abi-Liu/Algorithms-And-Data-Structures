// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// link: https://leetcode.com/problems/valid-parentheses/description/

var isValid = function (s) {
  const arr = [];
  // we can reference this map to know if we are dealing with a closing or opening bracket
  const map = { "}": "{", ")": "(", "]": "[" };
  // loop through the string and check to see if s[i] is in the map. If not, that means it is an opening bracket and we can just push it into our stack
  // if it is in the map, pop off the last element and see if the value is the same as the value stored in the map.
  // if it is, that means they are a valid pair and we can take them out of the stack, if not return false
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) arr.push(s[i]);
    else {
      if (arr.pop() !== map[s[i]]) {
        return false;
      }
    }
  }
  // to cover edge cases like '[' we need to make sure that our stack is empty. If it is we know it is a valid string
  return arr.length === 0 ? true : false;
};

module.exports = isValid;
