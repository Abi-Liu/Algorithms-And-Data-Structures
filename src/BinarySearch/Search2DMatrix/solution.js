// OPTIMAL SOLUTION
var searchMatrix = function (matrix, target) {
  // since it is a 2d array, we need to initialize pointers for both the row and columns, this way we can do a binary search for both.
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[top].length - 1;
  // initialize loop
  while (top <= bottom && left <= right) {
    // variable to binary search the rows. This is so we don't need to do work on all the rows
    const midRow = Math.floor((top + bottom) / 2);
    // variable to binary search over the columns.
    const midCol = Math.floor((left + right) / 2);
    // if the first value in the row is greater than the target, we can split the rows in half and begin looking in the bottom half of the rows
    if (matrix[midRow][0] > target) {
      bottom = midRow - 1;
      // else we look at the top half
    } else if (matrix[midRow][right] < target) {
      top = midRow + 1;
      // the rest is just a basic binary search of the columns to find the target
    } else if (matrix[midRow][midCol] === target) {
      return true;
    } else if (matrix[midRow][midCol] > target) {
      right = midCol - 1;
    } else {
      left = midCol + 1;
    }
  }
  return false;
};

module.exports = searchMatrix;

// UNOPTIMAL SOLUTION
// if (matrix.length === 1 && matrix[0].length === 1) {
//   if (matrix[0][0] === target) return true;
//   else false;
// }
// let top = 0,
//   left = 0,
//   right = matrix[top].length - 1,
//   bottom = matrix.length - 1;

// while (top <= bottom && left <= right) {
//   console.log("ran");
//   const mid = left == 0 && right == 0 ? 0 : Math.floor((left + right) / 2);
//   const val = matrix[top][mid];
//   if (val === target) {
//     return true;
//   } else if (val > target) {
//     right = mid - 1;
//   } else if (val < target) {
//     left = mid + 1;
//   } else if (left === right) {
//     top++;
//     if (top > matrix.length - 1) {
//       console.log("stopping");
//       return false;
//     } else {
//       left = 0;
//       right = matrix[top].length - 1;
//     }
//   }
// }
// return false;
