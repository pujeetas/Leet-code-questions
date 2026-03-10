function maxSubarray(arr, k) {
  let right = k - 1;
  let max_avg = 0;
  let avg = 0;
  let left = 0;
  let sum = 0;

  for (let i = left; i <= right; i++) {
    sum = sum + arr[i];
  }

  while (right < arr.length) {
    avg = sum / k;

    if (avg > max_avg) {
      max_avg = avg;
    }
    sum = sum + arr[right + 1] - arr[left];

    left++;
    right++;
  }

  return max_avg.toFixed(5);
}

console.log(maxSubarray([1, 12, -5, -6, 50, 3], 4));
