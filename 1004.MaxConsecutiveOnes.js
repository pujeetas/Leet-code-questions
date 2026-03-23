function max(arr, k) {
  let left = 0;
  let size = 0;
  let swap = 0;

  for (let right = 0; right < arr.length; right++) {
    let window = right - left;

    if (arr[right] === 0) {
      swap++;
    }
    if (swap > k) {
      if (arr[left] === 0) {
        swap--;
      }
      left++;
    }

    size = Math.max(size, window);
  }

  return size;
}

console.log(max([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
