/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = (nums) => {
  const map = {};
  for (let n of nums) {
    map[n] = (map[n] || 0) + 1;
    if (map[n] > nums.length / 2) return n;
  }
};