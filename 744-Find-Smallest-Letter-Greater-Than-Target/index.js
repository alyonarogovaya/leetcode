/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 const nextGreatestLetter = function (letters, target) {
  letters.push(target);
  const sortedLetters = letters.sort();
  const uniqueLetters = [...new Set(sortedLetters)];
  const targetIndex = uniqueLetters.indexOf(target);
  return uniqueLetters[targetIndex + 1] === undefined
    ? uniqueLetters[0]
    : uniqueLetters[targetIndex + 1];
};