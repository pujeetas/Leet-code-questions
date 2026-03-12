function validAnagram(str, p) {
  const pMap = new Map();

  let counter = 0;
  let result = [];
  let i = 0;

  for (let char in p) {
    pMap[p[char]] = (pMap[p[char]] || 0) + 1;
  }

  for (let i = 0; i <= str.length - p.length; i++) {
    const sMap = new Map();

    for (let j = i; j < i + p.length; j++) {
      sMap[str[j]] = (sMap[str[j]] || 0) + 1;
    }

    for (const [key, val] of sMap) {
      if (pMap.has(key) && pMap.get(key) === val) {
        result.push(i);
      }
    }
  }

  console.log(result);
}

console.log(validAnagram("cbaebabacd", "abc"));
