// PROTOTYPAL INHERITANCE
// without new keyword
const Animal = function(name) {
  const animal = Object.create(Animal.prototype);
  animal.name = name;

  return animal;
};

Animal.prototype.getName = function() {
  return this.name;
};

const dog = Animal('Fluffy');
dog.getName();

// with new keyword
const Person = function(name) {
  this.name = name;
};

Person.prototype.getName = function() {
  return this.name;
};

const user = new Person('John');
user.getName();

// CLASSICAL INHERITANCE
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  getName() {
    return this.name;
  }

  getWeight() {
    return this.weight;
  }

  addWeight(num) {
    this.weight += num;
    return this.weight;
  }
}

const dog = new Animal('Fido', 20);

dog.getName();
dog.getWeight();
dog.addWeight(10);
