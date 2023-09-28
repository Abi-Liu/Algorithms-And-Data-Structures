// link: https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function (n) {
  // only add '(' if open count < n
  // only add ')' if close count < open count
  // stop when open === close === n

  const res = [];

  function backtrack(open, close, str) {
    if (open == close && close === n) {
      res.push(str);
      return;
    }
    if (open < n) {
      backtrack(open + 1, close, str + "(");
    }
    if (close < open) {
      backtrack(open, close + 1, str + ")");
    }
  }

  backtrack(0, 0, "");

  return res;
};

module.exports = generateParenthesis;
