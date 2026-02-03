function twoSum(arr, target) {
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    let need = target - arr[i];

    if (seen[need] !== undefined) {
      return [seen[need], i];
    }
    seen[arr[i]] = i;
  }

  return [-1, -1];
}

// Test:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
