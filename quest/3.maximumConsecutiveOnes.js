function maximum(arr) {
  const newMap = new Map();
  let count = 0;
  let size = 0;

  for (let i = 0; i < arr.length; i++) {
    newMap.set(arr[i], i);
    if (newMap.has(1) && arr[i] === 1) {
      count++;
      console.log(newMap, `count: ${count}`);
    } else {
      count = 0;
    }
    if (count > size) {
      size = count;
    }
  }

  return size;
}

console.log(maximum([1, 0, 1, 1, 0, 1]));
