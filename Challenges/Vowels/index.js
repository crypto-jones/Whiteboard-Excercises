// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const output = [];

  for (let i in str) {
    const char = str[i];
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      output.push(char);
    }
  }

  return output.length;
}

console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'));
console.log(vowels('Why'));
