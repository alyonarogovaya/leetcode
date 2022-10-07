/**
 * @param {number[]} nums
 * @return {number}
 */
 const maximumProduct = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const res1 = sortedNums[0] * sortedNums[1] * sortedNums[nums.length - 1];
  const res2 =
    sortedNums[nums.length - 1] * sortedNums[nums.length - 2] * sortedNums[nums.length - 3];
  return Math.max(res1, res2);
};