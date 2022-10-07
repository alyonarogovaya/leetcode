/**
 * @param {string} s
 * @return {number}
 */
 const firstUniqChar = function (s) {
  const arr = s.split("");
  const res = arr.filter(
    (el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el)
  )[0];
  return res ? s.indexOf(res) : -1;
};