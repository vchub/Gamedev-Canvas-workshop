const { assert } = require('chai');

describe('promise ', () => {
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
        return res;
      });

    // return p.should.eventually.deepEqual([1, 2, 3]);
    return p;
  });

  it('recursive loop', () => {
    const N = 3;
    const loop = ([xs, i]) => {
      if (i && i >= N) {
        return xs;
      }
      xs.push(i);
      return loop([xs, i + 1]);
    };
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve([[], 0]);
      }, 1);
    })
      .then(loop)
      .then(xs => {
        assert.deepEqual(xs, [0, 1, 2]);
      });
  });
});

describe('async', () => {
  it('basic', () => {
    function promised(init) {
      return new Promise((resolve, reject) => {
        setTimeout(
          init => {
            // console.log('in promised');
            resolve(init);
          },
          10,
          init,
        );
      });
    }

    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log('in p2');
        resolve('foo');
      }, 1);
    });

    async function aCall(init) {
      // console.log('before', init);
      got = await promised(init * 2);
      assert.equal(4, got);
      // console.log('after');
      g2 = await p2;
      assert.equal('foo', g2);
    }
    return aCall(2);
  });
});

//
//
//
//
//
