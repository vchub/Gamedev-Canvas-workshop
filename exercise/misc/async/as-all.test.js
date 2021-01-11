const { assert } = require('chai');

// function Promise_all(promises) {
//   return new Promise((resolve, reject) => {
//     // Your code here.
//     async function loop(xs) {
//       if (xs.length < 1) {
//         return xs;
//       }
//       let ys, v;
//       try {
//         v = await xs[0];
//         ys = await loop(xs.slice(1));
//         return [v, ...ys];
//       } catch (e) {
//         reject(e);
//         throw e;
//       }
//     }
//     return resolve(loop(promises));
//   });
// }

function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    // Your code here.
    const n = promises.length;
    if (n == 0) return resolve(promises);

    var cnt = 0;
    const xs = Array(n);
    for (var i = 0; i < n; i++) {
      (i => {
        promises[i]
          .then(d => {
            xs[i] = d;
            cnt++;
            if (cnt >= n) return resolve(xs);
          })
          .catch(e => reject(e));
      })(i);
    }
  });
}

function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 10);
  });
}

describe('Promise_all', () => {
  it('[]', () => {
    return Promise_all([]).then(array => {
      assert.deepEqual([], array);
    });
  });
  it('[1,2,3]', () => {
    return Promise_all([soon(1), soon(2), soon(3)]).then(array => {
      assert.deepEqual([1, 2, 3], array);
    });
  });
  it('error X', () => {
    return Promise_all([soon(1), Promise.reject('X'), soon(3)]).catch(err =>
      assert.equal('X', err),
    );
  });
});

// Test code.
// Promise_all([]).then(array => {
//   console.log('This should be []:', array);
// });

// Promise_all([soon(1), soon(2), soon(3)]).then(array => {
//   console.log('This should be [1, 2, 3]:', array);
// });

// Promise_all([soon(1), Promise.reject('X'), soon(3)])
//   .then(array => {
//     console.log('We should not get here');
//   })
//   .catch(error => {
//     if (error == 'X') console.log('error is X, ok');
//     if (error != 'X') {
//       console.log('Unexpected failure:', error);
//     }
//   });
