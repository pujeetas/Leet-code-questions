function setMismatch(arr) {
  let map = new Map();
  let sum = 0;
  let duplicate = 0;
  let result = [];
  for (let num of arr) {
    if (map.has(num)) {
      duplicate = num;
    } else {
      map.set(num);
      sum += num;
    }
  }
  result.push(duplicate);

  let finalSum = (arr.length * (arr.length + 1)) / 2;

  let missing = finalSum - sum;
  result.push(missing);

  console.log(map);
  console.log(sum);
  return result;
}

console.log(setMismatch([1, 2, 2, 4]));
