function sort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);

  const right = arr.slice(mid);

  const leftSorted = sort(left);

  const rightSorted = sort(right);

  const sortedArray = merger(leftSorted, rightSorted);

  return sortedArray;
}

function merger(left, right) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

const result = sort([5, 2]);

console.log(result);
