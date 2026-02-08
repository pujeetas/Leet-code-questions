function ransomNote(ransom, mag) {
  let ransomMap = {};

  let magMap = {};
  for (let char of mag) {
    magMap[char] = (magMap[char] || 0) + 1;
  }
  for (let char of ransom) {
    ransomMap[char] = (ransomMap[char] || 0) + 1;
  }

  console.log(magMap);
  console.log(ransomMap);

  for (let key in ransomMap) {
    if (!(key in magMap) || magMap[key] < ransomMap[key]) {
      return false;
    }
  }
  return true;
}

console.log(ransomNote("aa", "ab"));
