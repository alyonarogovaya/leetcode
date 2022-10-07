/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 const intersection = function (nums1, nums2) {
  const res = [];
  const set1 = [...new Set(nums1)];
  const set2 = [...new Set(nums2)];

  for (let num1 of set1) {
    for (let num2 of set2) {
      if (num1 === num2) {
        res.push(num1);
      }
    }
  }
  return res;
};