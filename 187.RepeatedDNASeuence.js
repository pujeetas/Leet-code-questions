function repeat(str) {
  const newSet = new Set();
  const result = [];

  for (let i = 0; i <= str.length - 10; i++) {
    let window = str.slice(i, i + 10);

    if (newSet.has(window)) {
      result.push(window);
    } else {
      newSet.add(window);
    }
  }
  return result;
}

console.log(repeat("AAAAAAAAAAAAA"));
