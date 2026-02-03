function hasFruit(fruits, target) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === target) {
      return true;
    }
  }
  return false;
}

const fruits = ["apple", "banana", "orange"];
console.log(hasFruit(fruits, "banana"));
console.log(hasFruit(fruits, "grape"));
