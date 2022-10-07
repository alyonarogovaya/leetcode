/**
 * @param {string} s
 * @return {boolean}
 */

 const isPalindrome = function (s) {
  const regex = /[^A-Za-z0-9]/gi;
  const solidStr = s.replace(regex, '').toLowerCase();
  const reversedStr = solidStr.split('').reverse().join('');
  return solidStr === reversedStr;
};