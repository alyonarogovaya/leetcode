/**
 * @param {string} moves
 * @return {boolean}
 */
 const judgeCircle = function (moves) {
  const map = {
    D: 0,
    L: 0,
    R: 0,
    U: 0,
  };
  for (let i = 0; i < moves.length; i++) {
    map[moves[i]] += 1;
  }
  console.log(map);

  return map["D"] - map["U"] === 0 && map["L"] - map["R"] === 0;
};