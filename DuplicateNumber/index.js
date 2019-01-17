// Find the Duplicate Number

// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example 1:

// Input: [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: [3,1,3,4,2]
// Output: 3
// Note:

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.

function findDuplicate(arr) {
  const hashMap = {};

  for (let i in arr) {
    const int = arr[i];

    if (!hashMap[int]) {
      hashMap[int] = 1;
    } else {
      hashMap[int]++;
    }
  }

  for (let key in hashMap) {
    if (hashMap[key] >= 2) {
      return key;
    }
  }

  return null;
}

const list1 = [1, 3, 4, 2, 2];
console.log(findDuplicate(list1)); // should return 2

const list2 = [3, 1, 3, 4, 2];
console.log(findDuplicate(list2)); // should return 3
