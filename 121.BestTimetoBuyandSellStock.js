function bestTime(arr) {
  let min = arr[0];
  let max_profit = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    let profit = arr[i + 1] - min;

    if (profit > max_profit) {
      max_profit = profit;
    }
  }
  return max_profit;
}

const result = bestTime([7, 6, 4, 3, 1]);
console.log(result);
