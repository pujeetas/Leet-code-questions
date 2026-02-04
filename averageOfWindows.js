function averageOfWindows(arr, k) {
  let average_of_windows = [];
  let sum_of_window = 0;
  let average = 0;

  for (let i = 0; i < k; i++) {
    sum_of_window = sum_of_window + arr[i];
  }
  average = sum_of_window / k;
  average_of_windows.push(average);

  for (let i = k; i < arr.length; i++) {
    sum_of_window = sum_of_window - arr[i - k] + arr[i];
    average = sum_of_window / k;

    average_of_windows.push(average);
  }

  return average_of_windows;
}

// Test:
console.log(averageOfWindows([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
// [2.2, 2.8, 2.4, 3.6, 2.8]

console.log(averageOfWindows([2, 4, 6, 8], 2));
// [3, 5, 7]
