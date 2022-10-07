/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 const numJewelsInStones = function (jewels, stones) {
  let res = 0;

  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        res++;
      }
    }
  }

  return res;
};