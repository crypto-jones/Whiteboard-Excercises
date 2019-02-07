// F(n) = F(n-1) + F(n-2)

// Iterative Solution

// Time complexity: O(n)
// Space complexity: O(1)
// We calculate the next number by adding the current number
// to the old number.

function fibIterative(n) {
  let x = 1;
  let y = 0;
  let temp;

  while (n >= 0) {
    temp = x;
    x = x + y;
    y = temp;
    n--;
  }

  return y;
}

console.log(fibIterative(1400));

// Memoization Solution

// Time complexity: O(2N)
// Space complexity: O(n)
function fibMemo(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo));
}

console.log(fibMemo(1400));
