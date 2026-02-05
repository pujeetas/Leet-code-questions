function kDistinctCharacter(s, k) {
  let map = {};
  let left = 0;
  let max_size = 0;

  for (let right = 0; right < s.length; right++) {
    map[s[right]] = (map[s[right]] || 0) + 1;

    while (map[s[right]] > k) {
      map[s[left]]--;
      left++;
    }
    let size = right - left + 1;
    max_size = Math.max(size, max_size);
  }

  return max_size;
}

console.log(kDistinctCharacter("eceba", 2));
