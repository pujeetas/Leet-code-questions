function maxProfit(arr) {
  let max_profit = 0;

  let buy = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < buy) {
      buy = arr[i + 1];
    } else {
      let profit = arr[i + 1] - buy;
      if (profit > max_profit) {
        max_profit = profit;
      }
    }
  }
  return max_profit;
}

console.log(maxProfit([3, 1, 4]));
