var evalRPN = function (tokens) {
  // testing for edge case where tokens only has an integer
  if (tokens.length === 1) return tokens[0];
  // object to validate whether or not a value is a valid operator
  // object holds a function value that performs the desired operation
  let obj = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    // truncate the division operation, because we need to just cut the decimals off.
    // NOTE: Math.floor does NOT work due to rounding down negative numbers. -.045 => -1 instead of 0
    "/": (a, b) => Math.trunc(a / b),
  };
  // use an array as our stack
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    // if the current element is not in our object, that means its an integer. Convert to an integer and push to our stack
    if (!obj[tokens[i]]) {
      stack.push(Number(tokens[i]));
    } else {
      // when we run into an operator, we can apply the operation to the top 2 values in our stack.
      // value b needs to be the top value, and a needs to be the one below that. ORDER IS IMPORTANT
      const b = stack.pop();
      const a = stack.pop();
      // calculate the value and push back into our stack
      stack.push(obj[tokens[i]](a, b));
    }
  }

  // once the loop is done, we will be left with one value in our stack which is the result.
  return stack[0];
};
