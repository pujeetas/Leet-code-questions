function removeElements(arr, val) {
  let point = arr.length - 1;
  let arraySize = 0;

  for (i = 0; i < arr.length; i++) {
    while (i < point && arr[point] === val) {
      point--;
    }
    if (i > point) break;
    if (arr[i] === val) {
      let temp = arr[i];
      arr[i] = arr[point];
      arr[point] = temp;
      point--;
    }
    k = po + 1;
  }
  return k;
}

console.log(removeElements([0, 1, 2, 2, 3, 0, 4, 2], 2));
