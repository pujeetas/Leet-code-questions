function valid(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arr.push(s[i]);
    } else {
      if (s[i] === ")" && arr[arr.length - 1] === "(") {
        arr.pop(s[i]);
      } else if (s[i] === "}" && arr[arr.length - 1] === "{") {
        arr.pop(s[i]);
      } else if (s[i] === "]" && arr[arr.length - 1] === "[") {
        arr.pop(s[i]);
      } else return false;
    }
  }

  return arr.length === 0;
}

console.log(valid("([)]"));
