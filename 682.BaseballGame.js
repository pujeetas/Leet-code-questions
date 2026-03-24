function game(arr) {
  let record = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      record.push(Number(arr[i]));
    } else {
      if (arr[i] === "C") {
        record.pop(arr[arr.length - 1]);
      } else if (arr[i] === "D") {
        record.push(record[record.length - 1] * 2);
      } else if (arr[i] === "+") {
        record.push(record[record.length - 1] + record[record.length - 2]);
      }
    }
  }

  let sum = 0;
  for (let num of record) {
    sum = sum + num;
    num++;
  }

  return sum;
}

console.log(game(["5", "2", "C", "D", "+"]));
