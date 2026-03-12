// function smaller(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[i] && arr[j] !== arr[i]) {
//         count++;
//       }
//     }
//     result.push(count);
//   }
//   return result;
// }

function smaller(arr) {
  let result = [];
  const sorted = arr.toSorted((a, b) => a - b);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    result.push(sorted.indexOf(arr[i]));
  }
  return result;
}

console.log(smaller([8, 1, 2, 2, 3]));
