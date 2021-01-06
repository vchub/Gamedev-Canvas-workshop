const { double } = require('./maps');
const assert = require('assert');

describe('array maps', () => {
  describe('two', () => {
    it('double array', () => {
      a = [1, 2, 3];
      exp = [2, 4, 6];
      assert.deepEqual(double(a), exp);
    });

    /**
     * возведи каждый элемент в квадрат
     */
    xit('square array', () => {
      function square(xs) {
        return;
      }

      a = [1, 2, 3];
      exp = [1, 4, 9];
      assert.deepEqual(square(a), exp);
    });
  });
});
