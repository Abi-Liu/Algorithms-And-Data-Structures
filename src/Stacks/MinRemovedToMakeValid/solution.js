// link: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/

// the logic to this one is fairly straight forward. We can create a stack and have counters for how many open and closed parentheses we come across.
// at any point in time, we cannot have more closed parentheses than open or else they would not be a valid set

// now we have to go in the reverse order to make sure we remove any excess closed parentheses. after we have gone through both iterations, we can join the stack and return

var minRemoveToMakeValid = function (s) {
  let open = 0;
  let close = 0;
  const res = [];
  const backward = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
      res.push(s[i]);
    } else if (s[i] === ")") {
      if (close < open) {
        close++;
        res.push(s[i]);
      }
    } else {
      res.push(s[i]);
    }
  }

  open = 0;
  close = 0;
  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] === ")") {
      close++;
      backward.push(res[i]);
    } else if (res[i] === "(") {
      if (open < close) {
        open++;
        backward.push(res[i]);
      }
    } else {
      backward.push(res[i]);
    }
  }

  return backward.reverse().join("");
};

module.exports = minRemoveToMakeValid;
