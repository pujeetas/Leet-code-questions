function firstUniqChar(str) {
  let map = {};

  for (let ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) return i;
  }
  return -1;
}

console.log(firstUniqChar("loveleetcode"));
