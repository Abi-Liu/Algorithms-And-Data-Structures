// link: https://leetcode.com/problems/word-search/

var exist = function (board, word) {
  // variables to define the bounds of the board
  const row = board.length,
    col = board[0].length;
  // set to keep track of the current path. We do not want to revist the same square in the board when we are searching.
  const set = new Set();

  function backtrack(r, c, i) {
    // if i === word.length we know we have found the word and we can return true
    if (i === word.length) {
      return true;
    }

    // if we are outside the bounds of the row and column of the board, or we are visiting a cell in our current path, or the current cell does not equal word[i], we can return false
    if (
      r < 0 ||
      r >= row ||
      c < 0 ||
      c >= col ||
      set.has(`${r}, ${c}`) ||
      board[r][c] !== word[i]
    ) {
      return false;
    }

    // if we make it past those if statements, we know we have found a valid path, so we can add our current square into our path set.
    set.add(`${r}, ${c}`);
    // we want to then extend our search to the left/right or up/down blocks
    const result =
      backtrack(r + 1, c, i + 1) ||
      backtrack(r - 1, c, i + 1) ||
      backtrack(r, c + 1, i + 1) ||
      backtrack(r, c - 1, i + 1);

    // we want to then clear the path for future iterations in the board
    set.delete(`${r}, ${c}`);
    return result;
  }

  // then we just brute force through the board and run the backtrack function whenever board[i][j] === word[0]
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        if (backtrack(i, j, 0)) {
          return true;
        }
      }
    }
  }
  return false;
};
