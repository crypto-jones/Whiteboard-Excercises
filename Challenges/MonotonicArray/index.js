// // Monotonic Array
// // An array is monotonic if it is either monotone increasing or monotone decreasing.
// // An array A is monotone increasing if for all i <= j, A[i] <= A[j].
// // An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
// // Return true if and only if the given array A is monotonic.

// // Example 1:
// // Input: [1,2,2,3]
// // Output: true

// // Example 2:
// // Input: [6,5,4,4]
// // Output: true

// // Example 3:
// // Input: [1,3,2]
// // Output: false

// // Example 4:
// // Input: [1,2,4,5]
// // Output: true

// // Example 5:
// // Input: [1,1,1]
// // Output: true

// function isMonotonic(A) {
//   if (A.length === 1) {
//     return true;
//   }

//   if (A[A.length - 1] === 0) {
//     A.pop(A.length - 1);
//   }

//   let flag;

//   if (A[0] < A.length - 1) {
//     flag = 'increasing';
//   } else {
//     flag = 'decreasing';
//   }

//   let output;

//   if (flag === 'increasing') {
//     for (let i = 0; i < A.length; i++) {
//       for (let j = i + 1; j < A.length; j++) {
//         if (A[i] <= A[j]) {
//           if (output === false) {
//             return output;
//           }
//           output = true;
//         } else {
//           output = false;
//         }
//       }
//     }
//   }

//   if (flag === 'decreasing') {
//     for (let i = 0; i < A.length; i++) {
//       for (let j = i + 1; j < A.length; j++) {
//         if (A[i] >= A[j]) {
//           if (output === false) {
//             return output;
//           }
//           output = true;
//         } else {
//           output = false;
//         }
//       }
//     }
//   }

//   return output;
// }

// console.log(isMonotonic([1, 2, 2, 3])); // true
// console.log(isMonotonic([6, 5, 4, 4])); // true
// console.log(isMonotonic([1, 3, 2])); // false
// console.log(isMonotonic([1, 2, 4, 5])); // true
// console.log(isMonotonic([1, 1, 1])); // true
// console.log(isMonotonic([1, 3, 2, 4])); // false
// console.log(isMonotonic([1, 1, 0])); // true
// console.log(isMonotonic([1, 0, 3])); // false
// console.log(isMonotonic([9])); // true
