function maximumWealth(accounts) {
  let max_sum = 0;

  for (let row = 0; row < accounts.length; row++) {
    let sum = 0;

    for (let col = 0; col < accounts[row].length; col++) {
      sum += accounts[row][col];
    }
    max_sum = Math.max(sum, max_sum);
  }

  return max_sum;
}

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ]),
);
