/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = function (s) {
  const trimedStr = s.trimEnd();
  return trimedStr.slice(trimedStr.lastIndexOf(" ") + 1).length;
};
