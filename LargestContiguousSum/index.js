function largestContiguousSum(arr) {
  let sum = 0;
  let maxSum = 0;

  for (let i in arr) {
    sum += arr[i];

    if (maxSum < sum) {
      maxSum = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}

console.log(largestContiguousSum([5, -9, 6, -2, 3])); // should print 7
console.log(largestContiguousSum([1, 23, 90, 0, -9])); // should print 114
console.log(largestContiguousSum([2, 3, -8, -1, 2, 4, -2, 3])); // should print 7
