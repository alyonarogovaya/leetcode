/**
 * @param {string[]} operations
 * @return {number}
 */

 const calPoints = function (operations) {
  const res = [];
  for (let i = 0; i < operations.length; i++) {
    if (isFinite(+operations[i])) {
      res.push(+operations[i]);
    } else if (operations[i] === "C") {
      res.pop();
    } else if (operations[i] === "D") {
      res.push(res.at(-1) * 2);
    } else if (operations[i] === "+") {
      res.push(res[res.length - 1] + res[res.length - 2]);
    }
  }
  return res.reduce((sum, curr) => sum + curr, 0);
};