/**
 * @param {string} word
 * @return {boolean}
 */
 const detectCapitalUse = function (word) {
  const lowerCaseWord = word.toLowerCase();
  if (word === lowerCaseWord.toUpperCase()) return true;
  if (word === lowerCaseWord) return true;
  if (
    word.slice(0, 1) !== lowerCaseWord.slice(0, 1) &&
    word.slice(1) === lowerCaseWord.slice(1)
  )
    return true;

  return false;
};