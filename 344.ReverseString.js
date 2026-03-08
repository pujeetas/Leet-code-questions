function reverseString(s) {
  let j = s.length - 1;

  let i = 0;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
