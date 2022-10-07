/**
 * @param {number[]} nums
 * @return {boolean}
 */

 const containsDuplicate = function (nums) {
  const duplicate = nums.find(
    (item, index, arr) => arr.indexOf(item) !== index
  );
  return duplicate !== undefined;
};