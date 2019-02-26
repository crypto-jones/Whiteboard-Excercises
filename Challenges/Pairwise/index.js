// Given an array arr, find element pairs whose sum equal
// the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements
// but different indices. Each pair should use the lowest possible available indices.
// Once an element has been used it cannot be reused to pair with another element.
// For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1]
// using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6.
// The pairs that sum to 20 are [7, 13] and [9, 11].
// We can then write out the array with their indices and values.

function pairwise(arr, arg) {
  if (arr.length === 0) return 0;

  const newArr = [];

  for (let i in arr) {
    for (let j in arr) {
      if (arr[i] + arr[j] === arg) {
        newArr.push(parseInt(i), parseInt(j));
        delete arr[i];
        delete arr[j];
      }
    }
  }

  const set = new Set(newArr);
  const uniqueIndicesArray = Array.from(set);

  if (uniqueIndicesArray.length % 2 !== 0) {
    uniqueIndicesArray.pop();
  }

  const sum = uniqueIndicesArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  return sum;
}

console.log(pairwise([1, 3, 2, 4], 4));
// should return 1.

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
// should return 11.
