function majorityElement(nums) {
  const elementCounter = {};
  let count = 0;
  let result;

  for (let i in nums) {
    const int = nums[i];

    if (!elementCounter[int]) {
      elementCounter[int] = 1;
    } else {
      elementCounter[int]++;
    }
  }

  for (let key in elementCounter) {
    if (elementCounter[key] > count) {
      count = elementCounter[key];
      result = key;
    }
  }

  return parseInt(result);
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([3, 2, 3])); // 3
