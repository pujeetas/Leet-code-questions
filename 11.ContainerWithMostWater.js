function containerWithMostWater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let max_capacity = 0;

  while (left < right) {
    let height = Math.min(arr[right], arr[left]);
    let distance = right - left;
    let volume = distance * height;

    if (arr[left] <= arr[right]) {
      left++;
    } else {
      right--;
    }
    max_capacity = Math.max(volume, max_capacity);
  }

  return max_capacity;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
