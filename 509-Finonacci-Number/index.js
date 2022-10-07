/**
 * @param {number} n
 * @return {number}
 */
 function fib(n) {
  if (n === 0) return 0
  
let a = 1;
let b = 1;
for (let i = 3; i <= n; i++) {
  let c = a + b;
  a = b;
  b = c;
}
return b;
}