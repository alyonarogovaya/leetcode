/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 const wordPattern = function(pattern, s) {
  const words = s.split(" ");
  const m = new Map();
  const used = new Set();
  if (pattern.length !== words.length) {
      return false;
  }
  for (let i = 0; i < pattern.length; i++) {
      if (m.has(pattern[i])) {
          if (m.get(pattern[i]) !== words[i]) {
              return false;   
          }
      } else {
          if (used.has(words[i])) {
              return false;
          }
          m.set(pattern[i], words[i]);
          used.add(words[i]);
      }
  }
  return true;
}