// import { myId } from "./t.js";
if (typeof window === 'undefined') {
  var assert = require('chai').assert;
  myId = require('./t.js').myId;
  segmentIntersect = require('../src/physics.js').segmentIntersect;
  ballRectCollide = require('../src/physics.js').ballRectCollide;
} else {
  assert = chai.assert;
}

describe('id', () => {
  const myid = x => x;
  it('const v = ()=>', () => {
    assert.equal(1, myid(1));
  });
});

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

describe('collision', () => {
  let p = { x: 0, y: 3, w: 3, h: 3 };
  xit('left', () => {
    let b = { x: -1, y: -1, r: 3, dx: 2, dy: -2 };
    let [dx, dy] = ballRectCollide(b, p);
    assert.deepEqual([dx, dy], [-2, -2]);
  });
});

//
