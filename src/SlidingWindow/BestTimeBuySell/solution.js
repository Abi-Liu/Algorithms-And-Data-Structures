// link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let left = 0,
    right = 1,
    max = 0;
  while (right < prices.length) {
    // we only need to check for profit if we can sell for a higher price at a later date
    if (prices[right] > prices[left]) {
      const profit = prices[right] - prices[left];
      max = Math.max(max, profit);
      // if the prices[left] is higher than prices[right] we need to set the left index to the right index because we always want the left to be the lowest value possible.
    } else {
      left = right;
    }
    // increment right no matter what
    right++;
  }
  return max;
};

module.exports = maxProfit;
