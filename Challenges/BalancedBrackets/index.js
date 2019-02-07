function balancedBrackets(str) {
  const trim = str.replace(/ /g, '');
  var stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i in trim) {
    if (brackets[stack[stack.length - 1]] === trim[i]) {
      stack.pop();
    } else {
      stack.push(trim[i]);
    }
  }

  return !stack.length;
}

console.log(balancedBrackets('{}[]()')); // should print true
console.log(balancedBrackets('{(([]))}')); // should print true
console.log(balancedBrackets('{ [ ] ( ) }')); // should print true
console.log(balancedBrackets('{ [ ( ] ) }')); // should print false
console.log(balancedBrackets('(')); // should print false
console.log(balancedBrackets('{[}')); // should print false
console.log(balancedBrackets('(]')); // should print false
console.log(balancedBrackets('([)]')); // should print false
