// link: https://leetcode.com/problems/number-of-islands/description/

// recursive DFS solution
var numIslands = function (grid) {
  let count = 0;
  const row = grid.length;
  const col = grid[0].length;

  function search(r, c) {
    // base case, if the row or col variable are out of bounds, or if the element does not equal '1', return
    if (r < 0 || r === row || c < 0 || c === col || grid[r][c] === "0") {
      return;
    }
    // we could use a set to keep track of all the locations we have already visited, but it's more memory efficient to just set each visited square to '0'
    grid[r][c] = "0";
    // next we recursively search all surrounding squares and if they are a '1', we will repeat this process
    search(r + 1, c);
    search(r - 1, c);
    search(r, c + 1);
    search(r, c - 1);
  }

  // now we can iterate over the grid and call our function if we encounter a '1'
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        count++;
        search(i, j);
      }
    }
  }

  return count;
};
module.exports = numIslands;
