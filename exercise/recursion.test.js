const assert = require('assert');

describe('recursion', () => {
  it('fib recursion', () => {
    const fib = n => {
      if (n == 1 || n == 2) {
        return n;
      }
      return fib(n - 1) + fib(n - 2);
    };
    assert.equal(fib(2), 2);
    assert.equal(fib(5), 8);
    assert.deepEqual([5, 6, 7].map(fib), [8, 13, 21]);
  });

  it('fib iter', () => {
    function fib(n) {
      let f1 = 1,
        f2 = 2;
      for (var i = 2; i <= n; i++) {
        [f2, f1] = [f2 + f1, f2];
      }
      return f1;
    }
    assert.equal(fib(2), 2);
    assert.equal(fib(5), 8);
    assert.deepEqual([5, 6, 7].map(fib), [8, 13, 21]);
  });
});
