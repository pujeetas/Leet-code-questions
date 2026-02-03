// Task 1:
function countNumbers(nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]] !== undefined) {
      count[nums[i]] += 1;
    } else {
      count[nums[i]] = 1;
    }
  }
  return count;
}

// Task 2:
function countNumbersShort(nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }
  return count;
}

console.log(countNumbers([1, 2, 1, 3, 2, 1])); // { 1: 3, 2: 2, 3: 1 }
console.log(countNumbersShort([1, 2, 1, 3, 2, 1])); // { 1: 3, 2: 2, 3: 1 }
