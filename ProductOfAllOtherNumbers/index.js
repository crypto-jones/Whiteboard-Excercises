function productOfAllOtherNums(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    output.push(product);
  }
  return output;
}

console.log(productOfAllOtherNums([1, 7, 3, 4]));
// should return [84, 12, 28, 21]
