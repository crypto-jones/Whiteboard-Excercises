const matrix = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0]
];

// // Expected output: 2, 2

// loop through outer array
// loop through inner arrays
function findLeftMostOne(arr) {
  let innerStore = null;
  let outerStore = null;

  for (let i in matrix) {
    for (let j in matrix[i]) {
      if (matrix[i][j] === 1) {
        if (innerStore === null) {
          innerStore = j;
          outerStore = i;
        } else if (j < innerStore) {
          innerStore = j;
          outerStore = i;
        }
      }
    }
  }

  return [outerStore, innerStore];
}

console.log(findLeftMostOne(matrix));
