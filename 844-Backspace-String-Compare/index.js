/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const clearStr = function (s) {
  const sArr = [];
  for (let char of s) {
    if (char === "#") {
      sArr.pop();
    } else {
      sArr.push(char);
    }
  }
  return sArr.join("");
};

const backspaceCompare = function (s, t) {
  const clearedS = clearStr(s);
  const clearedT = clearStr(t);
  return clearedS === clearedT;
};