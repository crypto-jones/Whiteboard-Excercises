// Diff Two Arrays
// Compare two arrays and return a new array with any items
// only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const count = {};

  for (let i in arr1) {
    const val = arr1[i];
    if (!count[val]) {
      count[val] = 1;
    } else {
      count[val]++;
    }
  }

  for (let i in arr2) {
    const val = arr2[i];
    if (!count[val]) {
      count[val] = 1;
    } else {
      count[val]++;
    }
  }

  const result = [];
  const regex = /^\d+$/;

  for (let key in count) {
    const val = count[key];
    if (val === 1) {
      if (key.match(regex)) {
        result.push(parseInt(key));
      } else {
        result.push(key);
      }
    }
  }

  return result;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // 4
console.log(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
); // 'pink wool'
