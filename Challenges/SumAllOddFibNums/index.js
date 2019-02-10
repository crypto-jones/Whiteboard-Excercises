// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum
// of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1.
// Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

function sumFibs(num) {
  let fib = [];

  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= num; i++) {
    fib.push(fib[i]);
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  const odds = fib.filter(odd => {
    return odd % 2 !== 0;
  });

  const oddsLessThanNum = odds.filter(odd => odd <= num);

  let sum = 0;

  for (let n of oddsLessThanNum) {
    sum += n;
  }

  return sum;
}

console.log(sumFibs(10));
// should return 10

console.log(sumFibs(1000));
//should return 1785.

console.log(sumFibs(4));
// should return 5.
