// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// link: https://leetcode.com/problems/valid-parentheses/description/

var isValid = function (s) {
  const arr = [];
  const map = { "}": "{", ")": "(", "]": "[" };
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) arr.push(s[i]);
    else {
      if (arr[arr.length - 1] !== map[s[i]]) {
        return false;
      } else {
        arr.pop();
      }
    }
  }
  return arr.length === 0 ? true : false;
};

module.exports = isValid;
