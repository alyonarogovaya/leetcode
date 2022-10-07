/**
 * @param {string} sentence
 * @return {string}
 */
/**
 * @param {string} S
 * @return {string}
 */
 const toGoatLatin = function(str) {
  const res = [];
  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

  const words = str.split(' ');

  for (let i = 0; i < words.length; i++){
      if(vowels.has(words[i].charAt(0))) {
          res.push(words[i] + 'ma' + 'a'.repeat(i+1));
      } else {
          res.push(words[i].slice(1) + words[i].charAt(0) + 'ma' + 'a'.repeat(i+1));
      }
  }
  return res.join(' ');
};