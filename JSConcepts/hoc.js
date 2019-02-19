// HIGHER ORDER FUNCTIONS
// with filter, map & reduce

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = num => {
  return num % 2 === 0;
};

const doubleNums = num => {
  return num * 2;
};

const sumAll = (num, acc) => {
  return num + acc;
};

const even = nums.filter(isEven);
const double = nums.map(doubleNums);
const sum = nums.reduce(sumAll);

console.log(even);
console.log(double);
console.log(sum);
