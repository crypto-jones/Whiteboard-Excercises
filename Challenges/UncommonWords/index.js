// Uncommon Words from Two Sentences

// We are given two sentences A and B.  (A sentence is a string of space separated words.
// Each word consists only of lowercase letters.) A word is uncommon if it appears exactly
// once in one of the sentences, and does not appear in the other sentence. Return a list of all
// uncommon words. You may return the list in any order.

//  Example 1:

// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: A = "apple apple", B = "banana"
// Output: ["banana"]

function uncommonWords(A, B) {
  const splitA = A.split(' ');
  const splitB = B.split(' ');
  const words = {};
  const output = [];

  for (let i in splitA) {
    const word = splitA[i];

    if (!words[word]) {
      words[word] = 1;
    } else {
      words[word]++;
    }
  }

  for (let i in splitB) {
    const word = splitB[i];

    if (!words[word]) {
      words[word] = 1;
    } else {
      words[word]++;
    }
  }

  for (let word in words) {
    if (words[word] === 1) {
      output.push(word);
    }
  }

  return output;
}

console.log(uncommonWords('this apple is sweet', 'this apple is sour'));
console.log(uncommonWords('apple orange', 'banana cucumber orange'));
