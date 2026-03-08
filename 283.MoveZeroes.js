function moveZeroes(nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }

  return nums;
}

console.log(moveZeroes([4, 0, 5, 0, 0, 3, 0, 1]));
