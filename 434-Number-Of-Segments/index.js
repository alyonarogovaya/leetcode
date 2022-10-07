/**
 * @param {string} s
 * @return {number}
 */
 const countSegments = function (s) {
  if (s.trim() === "") return 0;

  const arr = s.split(" ").sort();
  arr.splice(0, arr.lastIndexOf("") + 1);
  return arr.length;
};