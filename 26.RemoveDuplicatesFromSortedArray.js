function removeDuplicates(nums) {
  let i = 0;
  let j = 1;
  let size = 0;

  if (nums.length === 1) {
    return nums;
  }

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      nums[i] !== nums[j];
      i++;
      nums[i] = nums[j];
      j++;
    }
    size = i + 1;
  }
  return [nums, size];
}

console.log(removeDuplicates([1, 1, 2]));
