/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 const selfDividingNumbers = function(left, right) {
  const arr = [];
for (let i = left; i <= right; i++) {
let str = i.toString();
let isSelfDividing = true;
for (s of str) {
  if (i % parseInt(s) !== 0) {
    isSelfDividing = false;
    break;
  }
}
if (isSelfDividing) arr.push(i);
}
return arr;
};
