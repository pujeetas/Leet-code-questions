function shuffle(arr, n) {
  const newArr = [];
  let i = 0;
  let j = n;

  while (i < j && j < arr.length) {
    newArr.push(arr[i]);
    newArr.push(arr[j]);

    i++;
    j++;
  }
  return newArr;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
