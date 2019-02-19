// BIND
const person1 = { name: 'Jeremy' };
const person2 = { name: 'Rob' };

function speak() {
  return `Welcome ${this.name}`;
}

const speaker1 = speak.bind(person1);
const speaker2 = speak.bind(person2);

speaker1();
speaker2();

// CALL
const person = { name: 'Zenia' };

const speak = function(a, b, c) {
  return `Hi! I'm ${this.name}. I love ${a}, ${b}, ${c}.`;
};

speak.call(person, 'music', 'food', 'traveling');

// APPLY
const person = { name: 'Trey' };

const speak = function(a, b, c) {
  return `Hi! I'm ${this.name}. I love ${a}, ${b}, ${c}.`;
};

const arr = ['food', 'music', 'traveling'];

speak.apply(person, arr);
