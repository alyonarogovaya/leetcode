/**
 * @param {number[]} nums
 * @return {number}
 */
 const thirdMax = function (nums) {
  const uniqueNums = [...new Set(nums)];
  uniqueNums.sort((a, b) => b - a);
  if (uniqueNums.length < 3) {
    return uniqueNums.at(0);
  } else {
    return uniqueNums[2];
  }
};