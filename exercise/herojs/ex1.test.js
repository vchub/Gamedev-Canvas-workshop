var assert = require('chai').assert;

// test example
function id(x) {
  return x;
}

// id2 = (x) => { x }

describe('test example', function() {
  it('id', () => {
    assert.equal(id(1), 1);
  });
});
