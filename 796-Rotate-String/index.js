/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 const rotateString = function (s, goal) {
  let counter = 0;
  while (counter !== s.length) {
    s = s.slice(1) + s.slice(0, 1);
    if (s === goal) return true;
    ++counter;
  }

  return false;
};