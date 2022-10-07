/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function (x) {
  const str = '' + x;
  const reversedStr = str.split('').reverse().join('');
  return +reversedStr === x;
};
