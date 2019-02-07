function countVotes(arr) {
  let votes = {};
  let compare = 0;
  let tie = [];
  let max;

  for (let i in arr) {
    const name = arr[i];
    if (!votes[name]) {
      votes[name] = 1;
    } else {
      votes[name]++;
    }

    if (votes[name] > compare) {
      compare = votes[name];
      max = votes[name];
    }
  }

  for (name in votes) {
    if (votes[name] === max) {
      tie.push(name);
    }
  }

  const reverseSort = tie.sort((a, b) => {
    return a < b;
  });

  return reverseSort[0];
}

console.log(
  countVotes([
    'veronica',
    'mary',
    'alex',
    'james',
    'mary',
    'michael',
    'alex',
    'michael',
  ])
); // should print 'michael'

console.log(
  countVotes([
    'john',
    'johnny',
    'jackie',
    'johnny',
    'john',
    'jackie',
    'jamie',
    'jamie',
    'john',
    'johnny',
    'jamie',
    'johnny',
    'john',
  ])
); // should print 'johnny'
