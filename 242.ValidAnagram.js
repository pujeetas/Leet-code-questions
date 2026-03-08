function validAnagram(s, t) {
  let map = {};

  if (s.length !== t.length) return false;

  for (let i in s) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for (let char of t) {
    if (!map[char]) return false;
    map[char]--;
  }
  return true;
}

console.log(validAnagram("ab", "a"));
