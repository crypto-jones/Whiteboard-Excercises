// O(n^2) runtime
// function integerPairs(arr, k) {

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === k) {
//         console.log(arr[i], arr[j]) // should print '6 5', '7 4', '8 3', '9 2', '10 1'
//       }
//     }
//   }
// }

// O(n) runtime
function integerPairs(arr, k) {
  let hash = {};

  for (let i in arr) {
    let x = arr[i];
    if (hash[k - x]) {
      console.log(x, k - x); // should print '6 5', '7 4', '8 3', '9 2', '10 1'
    } else {
      hash[x] = i + 1;
    }
  }
}

integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
