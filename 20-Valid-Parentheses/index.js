/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
  let stack = [];
  for (let ch of s) {
    if (ch == '(' || ch == '[' || ch == '{') {
      stack.push(ch);
    } else {
      let tmp = stack.pop();
      switch (ch) {
        case ')':
          if (tmp != '(') return false;
          break;
        case ']':
          if (tmp != '[') return false;
          break;
        case '}':
          if (tmp != '{') return false;
          break;
        default:
          return false;
      }
    }
  }
  return stack.length == 0;
};

const isValid2 = function (string) {
  const brackets = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  const stack = [];

  for (const char of string) {
    if (brackets.has(char)) {
      const top = stack.length ? stack.pop() : null;
      if (top !== brackets.get(char)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
