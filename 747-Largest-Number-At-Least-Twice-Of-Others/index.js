/**
 * @param {number[]} nums
 * @return {number}
 */
 const dominantIndex = function (nums) {
  const maxNum = Math.max(...nums);
  let isDominant = true;
  for (let num of nums) {
    if (num > maxNum / 2 && num !== maxNum) {
      isDominant = false;
      break;
    }
  }

  return isDominant ? nums.indexOf(maxNum) : -1;
};