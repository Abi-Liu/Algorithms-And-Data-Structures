// link: https://leetcode.com/problems/max-area-of-island/

var maxAreaOfIsland = function (grid) {
  // initialize variables to hold our max area, current area, and row and column lengths
  let max = 0;
  let cur = 0;
  const row = grid.length;
  const col = grid[0].length;

  function dfs(r, c) {
    // the base case: if either our row or column is out of bounds , or if the current square we are in is not a 1
    if (r < 0 || r === row || c < 0 || c === col || grid[r][c] === 0) {
      return;
    }
    // if we make it to this step, we know that the square is an island, so we can increment our current counter, set it to 0 to avoid counting it twice, and recursively call the function for all 4 sides.
    cur++;
    grid[r][c] = 0;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
    max = Math.max(cur, max);
  }

  // now we just loop through the grid, and call dfs everytime we encounter a 1.
  // we also have to remember to set cur back to 0 after every call.
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        cur = 0;
      }
    }
  }
  return max;
};
