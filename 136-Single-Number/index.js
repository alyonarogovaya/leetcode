/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = function (nums) {
  nums.sort();

  if (nums.length == 1) return nums[0];

  if (nums[0] != nums[1]) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] != nums[i] && nums[i - 1] != nums[i]) return nums[i];
  }
};
