function serachInsert(arr, target) {
  if (arr[arr.length - 1] < target) {
    return arr.length;
  } else if (arr[0] > target) return 0;
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
      else {
        if (arr[i] < target && arr[i + 1] > target) {
          return i + 1;
        }
      }
    }
  }
}

const result = serachInsert([1, 3, 5, 6], 7);
console.log(result);
