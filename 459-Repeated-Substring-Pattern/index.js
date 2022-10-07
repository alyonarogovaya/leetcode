/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    let i = 1
    let len = s.length;
    while (i <= Math.floor(len/2)) {
        if (s.slice(0, i).repeat(len/i) == s) return true;
        i++
    }
    return false;
};