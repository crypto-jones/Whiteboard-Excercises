// Runtime = O(3^n)
function climbStairs(n) {
  if (n < 0) return 0;
  else if (n === 0) return 1;

  return climbStairs(n - 1) + climbStairs(n - 2) + climbStairs(n - 3);
}

console.log(climbStairs(3)); // should return 4
console.log(climbStairs(10)); // should print 274
