// CURRYING

// ES5
// function outer(x) {
//   return function inner(y) {
//     return x + y;
//   }
// }

//ES6
const outer = x => y => x + y;

console.log(outer(2)(1)); // 3
console.log(outer(2)); // function
