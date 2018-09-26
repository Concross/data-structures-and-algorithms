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
  }

  for (let character of bracketString) {
    if (openBrackets.includes(character)) {
      stack.push(character);
    }

    if (closingBrackets.includes(character)) {
      if (brackets[character] === stack.peek()) {
        stack.pop();

      } else {
        return false;
      }
    }
  }

  return !stack.size;
};

module.exports = multiBracketValidation;