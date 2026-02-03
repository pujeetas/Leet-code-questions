function nonRepeatingCharacter(str) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] !== undefined) {
      map[str[i]] += 1;
    } else {
      map[str[i]] = 1;
    }
  }

  for (let item in map) {
    if (map[item] === 1) {
      return item;
    }
  }

  return null;
}

console.log(nonRepeatingCharacter("aabbcdc"));
