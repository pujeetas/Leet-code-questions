function intersection(arr1, arr2) {
  let left = 0;
  let right = 0;
  let newArr = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] === arr2[right]) {
      newArr.push(arr1[left]);
      left++;
      right++;
    }
  }
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
