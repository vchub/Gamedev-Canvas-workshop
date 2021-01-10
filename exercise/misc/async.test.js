const { assert } = require('chai');

describe('promise', () => {
  it('many then', () => {
    p = new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve([0]);
      }, 1);
    })
      .then(res => {
        res.push(1);
        return res;
      })
      .then(res => {
        res.push(2);
        return res;
      })
      .then(res => {
        // console.log('res', res);
        assert.deepEqual(res, [0, 1, 2]);
        // done();
      });

    return p;
  });
});
