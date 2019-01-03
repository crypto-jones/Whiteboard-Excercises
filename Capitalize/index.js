// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let output = [];

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      output.push(str[i].toUpperCase());
    } else {
      output.push(str[i]);
    }
  }

  return str[0].toUpperCase() + output.join('');
}

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));
