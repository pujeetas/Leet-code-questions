function remove(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === result[result.length - 1]) {
      result.pop(result[result.length - 1]);
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

console.log(remove("abbaca"));
