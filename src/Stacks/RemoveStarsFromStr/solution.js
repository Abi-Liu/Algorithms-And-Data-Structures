// link: https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75

// this problem is pretty straightforward. We can use a stack to keep track of each element in the string, and if we encounter a '*', we simply pop off the top of the stack

// once the loop finishes we can join the array and return the value

var removeStars = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "*") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
};

module.exports = removeStars;
