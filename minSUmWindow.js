function minSumWindow(arr, k) {
  let min_sum = 0;
  let min_sum_window = 0;

  for (let i = 0; i < k; i++) {
    min_sum_window = min_sum_window + arr[i];
    min_sum = min_sum_window;
  }

  for (let i = k; i < arr.length; i++) {
    min_sum_window = min_sum_window - arr[i - k] + arr[i];

    min_sum = Math.min(min_sum, min_sum_window);
  }
  return min_sum;
}

// Test:
console.log(minSumWindow([4, 2, 1, 7, 8, 1, 2, 8], 3)); // Should return 7
