// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // initialize a set to check the columns for any duplicats
  const col = new Set();
  // initialize a set to check the rows for any duplicats
  const row = new Set();
  // initialize a map this time to check for duplicates in any 3x3 subgrid
  // for each subgrid we need to initialize a new set in the map.
  // this is what we are going to check for duplicates within the subgrids
  const square = new Map();
  // loop over the rows
  for (let i = 0; i < board.length; i++) {
    // every time the inner loop finishes clear the sets for rows and columns to go over the next set of rows and columns
    col.clear();
    row.clear();
    //inner loop to check each element for duplicates
    for (let j = 0; j < board.length; j++) {
      const rowEl = board[i][j];
      const colEl = board[j][i];
      // we need to find a way to determine which subgrid we are in
      // we can find which subgrid we are in by dividing the row and column we are in by 3 and rounding down.
      // ex -> if we are in index [5, 3] Math.floor(5/3) -> 1, Math.floor(3/3) -> 1
      // now we know this element is in the subgrid (1,1) we can now convert this to a string and use it for the key in our map
      const squareEl = [Math.floor(i / 3), Math.floor(j / 3)].toString();
      if (rowEl !== ".") {
        // if the row set has the current element return false
        if (row.has(rowEl)) {
          return false;
        } else {
          row.add(rowEl);
        }
        // if the square index doesn't exist, create a new one and initialize the value as a set. Then add the current value into the set
        if (!square.has(squareEl)) {
          square.set(squareEl, new Set());
          square.get(squareEl).add(rowEl);
        } else {
          // if the current element is already in the same subgrid, return false.
          if (square.get(squareEl).has(rowEl)) {
            return false;
          } else {
            square.get(squareEl).add(rowEl);
          }
        }
      }
      if (colEl !== ".") {
        if (col.has(colEl)) {
          return false;
        } else {
          col.add(colEl);
        }
      }
    }
  }
  // if we made it through the entire loop without returning false, we know it is a valid sudoku board
  return true;
};
