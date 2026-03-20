function fruit(arr) {
  let k = 2;
  let left = 0;
  let map = {};
  let total = 0;
  let size = 0;

  for (let right = 0; right < arr.length; right++) {
    map[arr[right]] = (map[arr[right]] || 0) + 1;
    if (map[arr[right]] === 1) {
      size++;
    }

    while (size > k) {
      map[arr[left]]--;

      if (map[arr[left]] === 0) {
        delete map[arr[left]];

        size--;
      }
      left++;
    }

    total = Math.max(total, right - left + 1);
  }
  return total;
}

console.log(fruit([1, 2, 3, 2, 2]));
