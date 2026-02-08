function intersection(arr1, arr2) {
  let set = new Set(arr1);

  const result = new Set();

  for (let num of arr2) {
    if (set.has(num)) {
      result.add(num);
    }
  }
  return Array.from(result);
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
