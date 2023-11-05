// link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

var letterCombinations = function (digits) {
  // if digits is empty, then we can simply return an empty array
  if (digits.length === 0) return [];

  // create a map of the letters for each number to make it easier to work with
  const letters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  // for each digit in the digits string, we can create a new 2D array to hold all the digits we want to use.
  const combinations = [];
  for (const char of digits) {
    combinations.push(letters[char]);
  }

  const res = [];
  // back track function
  function backtrack(str, i) {
    // if i is equal to the length of our 2d array, aka the length of digits, we know we have reached the end and can push the string into our results array and break out of the recursive loop
    if (i === combinations.length) {
      res.push(str);
      return;
    }
    // for every letter that our digits represent, we can add it to our string variable, increment i and continue recursing through.
    for (let a = 0; a < combinations[i].length; a++) {
      backtrack(str + combinations[i][a], i + 1);
    }
  }
  backtrack("", 0);
  return res;
};
