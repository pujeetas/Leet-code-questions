function containsDuplicate(arr) {
  let left = 0;
  let right = 0;
  let map = {};

  while (right < arr.length) {
    map[arr[right]] = (map[arr[right]] || 0) + 1;

    if (map[arr[right]] > 1) {
      return true;
    }
    right++;
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));
