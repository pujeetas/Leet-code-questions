function validAnagram(str, p) {
  let pMap = {};

  let result = [];

  for (let ch of p) {
    pMap[ch] = (pMap[ch] || 0) + 1;
  }

  for (let i = 0; i <= str.length - p.length; i++) {
    let match = true;

    let window = str.slice(i, i + p.length);

    let windMap = {};

    for (let ch of window) {
      windMap[ch] = (windMap[ch] || 0) + 1;
    }

    for (let keys in pMap) {
      if (pMap[keys] !== windMap[keys]) {
        match = false;
        break;
      }
    }
    if (match) result.push(i);
  }
  return result;
}

console.log(validAnagram("cbaebabacd", "abc"));
