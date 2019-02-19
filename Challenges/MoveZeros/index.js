// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

function moveZeros(nums) {
  const zeros = [];
  const nonZeros = [];

  for (let i in nums) {
    if (nums[i] === 0) {
      zeros.push(nums[i]);
    } else {
      nonZeros.push(nums[i]);
    }
  }

  const result = [...nonZeros, ...zeros];
  return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([0, 1, 0, 5, 0, 6, 2, 0, 0, 1]));
