// import { myId } from "./t.js";
if (typeof window === 'undefined') {
  var assert = require('chai').assert;
  myId = require('./t.js').myId;
  segmentIntersect = require('../physics.js').segmentIntersect;
} else {
  assert = chai.assert;
}

describe('id', () => {
  it('local id', () => {
    assert.equal(1, 1);
    assert.deepEqual([1, 2], [1, 2]);
    assert.equal('sa', 'sa');
    function id(x) {
      return x;
    }
    assert.equal(id(1), 1);
  });
  it('myid', () => {
    assert.equal(myId(3), 3);
  });
});

describe('segmentIntersect', () => {
  it('on segment', () => {
    let got = segmentIntersect([[10, 0], [0, 10]], [[0, 0], [10, 0]]);
    assert.equal(got, true);
    got = segmentIntersect([[0, 1], [0, 2]], [[0, 1.5], [0, 2.5]]);
    assert.equal(got, true);
  });
  it('intersect', () => {
    let got = segmentIntersect([[0, 0], [1, 1]], [[0, 1], [1, 0]]);
    assert.equal(got, true);
    got = segmentIntersect([[0, 0], [1, 1]], [[0, 2], [0.5, 0.5]]);
    assert.equal(got, true);
  });
  xit('intersect in one point', () => {
    got = segmentIntersect([[0, 0], [1, 1]], [[1, 0], [1, 1]]);
    assert.equal(got, true);
  });
  it('non intersect', () => {
    let got = segmentIntersect([[0, 0], [1, 1]], [[1, 0], [1, 0.5]]);
    assert.equal(got, false);
    got = segmentIntersect([[0, 0], [1, 1]], [[0, 2], [1, 1.0]]);
    assert.equal(got, false);
  });
});
