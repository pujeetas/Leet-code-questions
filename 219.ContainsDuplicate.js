function containsDuplicate(arr, k) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i]) && i - map[arr[i]] <= k) {
      return true;
    }
    map.set(arr[i], i);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1, 2, 3], 2));
