function palindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reverseString = s.split("").reverse().join("");

  if (s === reverseString) {
    return true;
  }
  return false;
}

console.log(palindrome("A man, a plan, a canal: Panama"));
