function missingNumber(arr) {
  let presentSum = 0;
  let finalSum = 0;

  for (let num of arr) {
    presentSum = presentSum + num;
  }

  let lastElement = arr.length;
  finalSum = (lastElement * (lastElement + 1)) / 2;

  let requiredNumber = finalSum - presentSum;

  return requiredNumber;
}

console.log(missingNumber([0, 1]));
