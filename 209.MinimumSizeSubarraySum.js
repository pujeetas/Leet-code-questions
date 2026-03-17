function subarray(arr, target) {
  let left = 0;
  let right = 0;
  let size = Infinity;
  let sum = 0;

  while (right < arr.length) {
    if (sum < target) {
      sum += arr[right];
      right++;
    } else if (sum >= target) {
      sum = sum - arr[left];
      left++;
    }

    size = Math.min(size, right - left + 1);
  }

  return size;
}

console.log(subarray([2, 3, 1, 2, 4, 3], 7));
