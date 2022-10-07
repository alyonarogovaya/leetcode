/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 const canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  if (flowerbed.length === 1 && flowerbed[0] === 0) count++;
  for (let i = 0; i < flowerbed.length; i++) {
      if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
          flowerbed[i] = 1
          count++;
      } else if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
          flowerbed[i] = 1
          count++;
      } else if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
          flowerbed[i] = 1
          count++;
      }
  }
  return count >= n;
};