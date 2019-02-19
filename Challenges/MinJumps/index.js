// Dyanmic programming solution
// Time complexity = O(n^2)
function minJumps(arr, n = arr.length) {
  // duplicate input arr to store steps
  const jumps = arr.slice();

  // case if empty arr or first index equals 0
  if (n === 0 || arr[0] === 0) {
    return Infinity;
  }

  jumps[0] = 0;

  // find the min num of jumps
  // to reach arr[i] from arr[0]
  // and assign this value to jumps[i]
  for (let i = 1; i < n; i++) {
    jumps[i] = Infinity; // initially set jumps as Infinity

    for (let j = 0; j < i; j++) {
      if (i <= j + arr[j] && jumps[j] !== Infinity) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
        break;
      }
    }
  }

  return jumps[n - 1];
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
// output: 3
// going from 1 -> 3 -> 8 -> 9
// should print 3
console.log(minJumps([1, 3, 6, 1, 0, 9])); // should print 3
console.log(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1])); // should print Infinity
console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5])); // should print 4
