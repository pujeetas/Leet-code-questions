function lengthOfLastWord(str) {
  const newStr = str.trim().split(" ");

  const count = newStr[newStr.length - 1].length;

  return count;
}

const result = lengthOfLastWord("   fly me   to   the moon  ");

console.log(result);
