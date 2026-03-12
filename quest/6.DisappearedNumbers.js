function disappearedNumbers(arr) {
  const set = new Set(arr);
  const result = [];

  for (let i = 1; i <= arr.length; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(disappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
