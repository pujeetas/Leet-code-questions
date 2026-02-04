function lengthOfLongestSubstring(s) {
  let size = 0;
  let left = 0;
  let subtring = {};

  for (let right = 0; right < s.length; right++) {
    subtring[s[right]] = (subtring[s[right]] || 0) + 1;

    while (subtring[s[right]] > 1) {
      subtring[s[left]]--;
      left++;
    }
    let currentsize = right - left + 1;
    size = Math.max(size, currentsize);
  }

  return size;
}

// Test cases:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // 3 ("wke")
console.log(lengthOfLongestSubstring("")); // 0
