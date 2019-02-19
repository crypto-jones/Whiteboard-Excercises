/*
  Implement an EventEmitter that supports standard operations, such as adding and removing listeners and emitting events by topic.
*/

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(evtName, cb) {
    if (!this.events[evtName]) {
      this.events[evtName] = [];
    }

    this.events[evtName].push(cb);
  }

  emit(evtName, ...args) {
    if (this.events[evtName]) {
      for (let func of this.events[evtName]) {
        func(...args);
      }
    }
  }

  removeListener(evtName, cb) {
    if (this.events[evtName]) {
      this.events[evtName] = this.events[evtName].filter(funcs => funcs !== cb);
    }
  }

  once(evtName, cb) {
    if (!this.events[evtName]) {
      this.events[evtName] = [];
    }

    const HOF = (...args) => {
      cb(...args);
      this.removeListener(evtName, HOF);
    };

    this.events[evtName].push(HOF);
  }
}

const logger = (...args) => console.log(...args);
const adder = (...args) => console.log(args.reduce((acc, cur) => acc + cur));
const subtracter = (...args) =>
  console.log(args.reduce((acc, cur) => acc - cur));
const multiplier = (...args) =>
  console.log(args.reduce((acc, cur) => acc * cur));

const emitter = new EventEmitter();
// emitter.on('print', logger)
// emitter.on('print', adder)
// emitter.on('print', subtracter)
// emitter.on('print', multiplier)
emitter.once('print', logger); // [HOC]
// emitter.removeListener('print', logger)
// console.log(emitter.events)
emitter.emit('print', 1, 2, 3); // '1, 2, 3'
emitter.emit('print', 1, 2, 3); //
emitter.emit('print', 1, 2, 3); //
emitter.emit('print', 1, 2, 3); //
emitter.emit('print', 1, 2, 3); //
// emitter.emit('print', 8, 8) // "8, 8"
// emitter.on('sum', reducer)
// emitter.emit('sum', 4, 5, 6)
// emitter.once('print', logger)
// emitter.emit('print', 1, 2, 3) // 6
// emitter.emit('print', 4, 5, 6) // undefined
// emitter.emit('print', 8 ,8) // undefined
// emitter.removeListener('print', logger)
// emitter.removeListener('sum', reducer)
