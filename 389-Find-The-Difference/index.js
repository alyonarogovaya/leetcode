/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 const findTheDifference = function (s, t) {
  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();
  let i = 0;
  while (sortedS[i] === sortedT[i]) {
    i++;
  }
  return sortedT[i];
};