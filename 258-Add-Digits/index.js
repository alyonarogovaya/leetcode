/**
 * @param {number} num
 * @return {number}
 */
 const addDigits = function(num) {
  let tmp = num
  while ( tmp > 9 ) {
      tmp = tmp.toString().split('').map(x => parseInt(x)).reduce((xs, x) => xs + x, 0)
  }  
  return tmp
};