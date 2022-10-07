/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = function (nums, target) {
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target);
  } else {
    const copyOfNums = nums.splice("");
    copyOfNums.push(target);
    copyOfNums.sort((a, b) => a - b);
    return copyOfNums.indexOf(target);
  }
};