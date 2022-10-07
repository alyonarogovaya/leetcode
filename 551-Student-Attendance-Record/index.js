/**
 * @param {string} s
 * @return {boolean}
 */
 const checkRecord = function (s) {
  const arr = s.split("");
  const absentArr = arr.filter((char) => char === "A");
  if (absentArr.length >= 2) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2] && arr[i] === "L")
      return false;
  }
  return true;
};