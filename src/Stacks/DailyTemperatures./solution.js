// https://leetcode.com/problems/daily-temperatures/

// the key to this problem is to store the index into the stack instead of the temperature. That way you can easily track how many days it has been.

var dailyTemperatures = function (temperatures) {
  // create our stack and answer array
  const stack = [],
    ans = new Array(temperatures.length).fill(0);
  // loop through the temperatures array and find we have a while loop to see if the top of our stack is colder than the current index of the temperature
  // while that is true we will pop the stack and insert the index - i into our answer array at the stack index.
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      ans[stack[stack.length - 1]] = i - stack.pop();
    }
    stack.push(i);
  }
  return ans;
};
