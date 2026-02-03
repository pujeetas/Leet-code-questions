function countFruits(fruits) {
  const count = {};

  for (let i = 0; i < fruits.length; i++) {
    if (count[fruits[i]] !== undefined) {
      count[fruits[i]] += 1;
    } else {
      count[fruits[i]] = 1;
    }
  }

  return count;
}

// Test:
console.log(
  countFruits(["apple", "banana", "apple", "orange", "banana", "apple"]),
);
// { apple: 3, banana: 2, orange: 1 }
