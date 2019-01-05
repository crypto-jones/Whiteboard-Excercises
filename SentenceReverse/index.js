function reverseWords(arr) {
  const words = arr.join('').split(' ');
  const stack = [];
  const output = [];

  for (let i in words) {
    stack.push(words[i]);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    output.push(stack[i]);
  }

  return output.join(' ').split('');
}

const input = [
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
  '  ',
  'm',
  'a',
  'k',
  'e',
  's',
  '  ',
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e',
];

console.log(reverseWords(input));
