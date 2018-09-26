'use strict';

const Stack = require('./stack');

let multiBracketValidation = (bracketString) => {
  let brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  let stack = new Stack();
  let openBrackets = Object.values(brackets);
  let closingBrackets = Object.keys(brackets);

  if (!bracketString.length) {
    return true;

  } else if (bracketString.length === 1) {
    return false;
  }

  for (let char of bracketString) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    }

    if (closingBrackets.includes(char)) {
      if (brackets[char] === stack.peek()) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.size;
};

module.exports = multiBracketValidation;