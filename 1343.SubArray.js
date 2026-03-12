function subArray(arr, winSize, thres) {
  let left = 0;
  let right = winSize - 1;
  let avg = 0;
  let sum = 0;
  let count = 0;

  for (let i = 0; i <= right; i++) {
    sum = sum + arr[i];
  }

  while (right < arr.length) {
    avg = sum / winSize;
    if (avg >= thres) {
      count++;
    }
    sum = sum - arr[left] + arr[right + 1];

    right++;
    left++;
  }
  return count;
}

console.log(subArray([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
