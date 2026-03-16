function validAnagram(s, t) {
  let sMap = {};
  let tMap = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let ch of s) {
    sMap[ch] = (sMap[ch] || 0) + 1;
  }

  for (let ch of t) {
    tMap[ch] = (tMap[ch] || 0) + 1;
  }

  for (let keys of s) {
    if (sMap[keys] !== tMap[keys]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("rat", "cat"));
