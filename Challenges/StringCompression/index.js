// String Compression: Implement a method to perform basic string compression
// using the counts of repeated characters. For example, the string aabcccccaaa
// would become a2b1c5a3. If the "compressed" string would not become smaller
// than the original string, your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

// input = 'aabcccccaaa'
// output = 'a2b1c5a3'

function stringCompress(str) {
  let compressed = '';
  let currChar = '';
  let count = '';

  for (let i in str) {
    if (currChar !== str[i]) {
      compressed = compressed + currChar + count;
      currChar = str[i];
      count = 1;
    } else {
      count++;
    }
  }

  compressed = compressed + currChar + count;

  return compressed;
}

console.log(stringCompress('aabcccccaaa'));
