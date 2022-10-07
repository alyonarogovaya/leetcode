/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    let num = nums[i];
    if (!num) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};