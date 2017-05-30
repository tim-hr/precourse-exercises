'use strict';

const solution = require('../operators_expressions_and_statements');
const assert = require ('chai').assert;

describe('operators, expressions and statements', function() {
  describe('following simple instructions that involve operators, just to get used to the terminology', function() {
    it('should multiply two numbers, given an asterisk representing the multiplication operator', () => {
      assert.equal(solution.multiplyOrDivide('*', 3, 4), 12);
    });

    it('should divide two numbers, given a forward slash representing the division operator', () => {
      assert.equal(solution.multiplyOrDivide('/', 15, 3), 5);
    });
  });
});
