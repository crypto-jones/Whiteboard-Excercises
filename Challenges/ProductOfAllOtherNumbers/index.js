// Solution 1
// Runtime O(n^2)
// function productOfAllOtherNums(arr) {
//   if (arr.length < 2) {
//     return [];
//   }

//   let output = [];

//   for (let i = 0; i < arr.length; i++) {
//     let product = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j) {
//         product *= arr[j];
//       }
//     }
//     output.push(product);
//   }
//   return output;
// }

// Solution 2
function productOfAllOtherNums(arr) {
  if (arr.length < 2) {
    return [];
  }

  let output = [];
  let productSoFar = 1;

  for (let i in arr) {
    output[i] = productSoFar;
    productSoFar *= arr[i];
  }

  productSoFar = 1;

  for (let j = arr.length - 1; j >= 0; j--) {
    output[j] *= productSoFar;
    productSoFar *= arr[j];
  }

  return output;
}

console.log(productOfAllOtherNums([1, 7, 3, 4]));
// should return [84, 12, 28, 21]
