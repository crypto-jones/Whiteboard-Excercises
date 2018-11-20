// // O(n) Solution

// function reconstructTrip(tix) {
//   const hashMap = {};
//   const path = [];

//   for (let i in tix) {
//     if (tix[i][0] === null) {
//       path[0] = tix[i][1];
//     }

//     hashMap[tix[i][0]] = tix[i][1];
//   }

//   for (let i = 1; i < tix.length - 1; i++) {
//     path[i] = hashMap[path[i - 1]];
//   }

//   return path;
// }

// O(n^2) Solution

function reconstructTrip(tickets) {
  // initialize empty arr
  let route = [];

  for (let i in tickets) {
    // find origin and push it onto route arr
    if (tickets[i][0] === null) {
      route.push(tickets[i][1]);
      tickets.splice(i, 1);
    }

    // find destination and splice it from tickets arr
    if (tickets[i][1] === null) {
      tickets.splice(i, 1);
    }
  }

  console.log(route);

  // loop through tickets arr and compare last element
  // of route arr with each element of tickets arr
  // if match push the element onto the route arr
  while (tickets.length > 0) {
    for (let i in tickets) {
      if (tickets[i][0] === route[route.length - 1]) {
        route.push(tickets[i][1]);
        tickets.splice(i, 1);
      }
    }
  }
  console.log(route);
  return route;
}

const shorterSet = [[null, 'PDX'], ['PDX', 'DCA'], ['DCA', null]];

const longerSet = [
  ['PIT', 'ORD'],
  ['XNA', 'CID'],
  ['SFO', 'BHM'],
  ['FLG', 'XNA'],
  [null, 'LAX'],
  ['LAX', 'SFO'],
  ['CID', 'SLC'],
  ['ORD', null],
  ['SLC', 'PIT'],
  ['BHM', 'FLG'],
];

console.log(reconstructTrip(shorterSet)); // should print [ 'PDX', 'DCA' ]
console.log(reconstructTrip(longerSet)); // should print [ 'LAX', 'SFO', 'BHM', 'FLG', 'XNA', 'CID', 'SLC', 'PIT', 'ORD' ]

// MODEL SOLUTION

// /*
//   O(2n) time complexity with O(2n) space complexity
// */

// function reconstructTrip(tickets) {
//   // use an object to associate sources
//   // and destinations
//   const hash = {};
//   const route = Array(tickets.length - 1);

//   tickets.forEach(ticket => {
//     // check for the start destination of our trip
//     if (ticket[0] === null) {
//       // add it to our `route` array as the first element
//       route[0] = ticket[1];
//     }
//     // hash each ticket with the source as key
//     // and destination as value
//     hash[ticket[0]] = ticket[1];
//   });

//   // loop through our object, grabbing the source's
//   // associated destination and adding it to our route
//   for (let i = 1; i < tickets.length - 1; i++) {
//     route[i] = hash[route[i-1]];
//   }

//   return route;
// }

// /* Some console.log test */
// const shorterSet = [
//   [null, 'PDX'],
//   ['PDX', 'DCA'],
//   ['DCA', null],
// ];

// const longerSet = [
//   ['PIT', 'ORD'],
//   ['XNA', 'CID'],
//   ['SFO', 'BHM'],
//   ['FLG', 'XNA'],
//   [null, 'LAX'],
//   ['LAX', 'SFO'],
//   ['CID', 'SLC'],
//   ['ORD', null],
//   ['SLC', 'PIT'],
//   ['BHM', 'FLG'],
// ];

// console.log(reconstructTrip(shorterSet)); // should print [ 'PDX', 'DCA' ]
// console.log(reconstructTrip(longerSet));  // should print [ 'LAX', 'SFO', 'BHM', 'FLG', 'XNA', 'CID', 'SLC', 'PIT', 'ORD' ]
