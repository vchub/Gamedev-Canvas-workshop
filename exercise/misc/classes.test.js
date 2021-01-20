const { assert } = require('chai');

describe('class examples ', () => {
  it('function class', () => {
    function Point(x, y) {
      this.x = x;
      this.y = y;
      this.dist = () => (this.x ** 2 + this.y ** 2) ** 0.5;
    }

    p = new Point(1, 2);
    assert.equal(p.x, 1);
    assert.equal(p.y, 2);
    assert.equal(p.dist(), 5 ** 0.5);
    // mutate
    p.x = 0;
    assert.equal(p.x, 0);
    assert.equal(p.y, 2);
    // console.log(p);
    assert.equal(p.dist(), 2);
  });

  it('factory', () => {
    function point(x, y) {
      return { x: x, y: y, dist: () => (x ** 2 + y ** 2) ** 0.5 };
    }
    p = point(1, 2);
    assert.equal(p.x, 1);
    assert.equal(p.y, 2);
    assert.equal(p.dist(), 5 ** 0.5);
    // mutate
    p.x = 0;
    assert.equal(p.x, 0);
    assert.equal(p.y, 2);
    // console.log(p);
    assert.notEqual(p.dist(), 2);
  });

  it('class', () => {
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      dist = () => (this.x ** 2 + this.y ** 2) ** 0.5;
      dist_x() {
        return this.x;
      }
    }

    p = new Point(1, 2);
    assert.equal(p.x, 1);
    assert.equal(p.y, 2);
    assert.equal(p.dist(), 5 ** 0.5);
    // mutate
    p.x = 0;
    assert.equal(p.x, 0);
    assert.equal(p.y, 2);
    // console.log(p);
    assert.equal(p.dist(), 2);
    assert.equal(p.dist_x(), 0);
  });

  it('get', () => {
    class A {
      constructor() {
        this.aa = () => this.a;
        this.a = 2;
      }
      get sq() {
        return this.a ** 2;
      }
      add(x) {
        return this.a + x;
      }
      sub = x => this.a - x;

      b = 4;
      add_b = x => this.b + x;
    }
    const a = new A();
    assert.equal(a.sq, 4);
    assert.equal(a.add(3), 5);
    assert.equal(a.sub(3), -1);
    assert.equal(a.b, 4);
    assert.equal(a.add_b(3), 7);
    a.b = 5;
    assert.equal(a.add_b(3), 8);

    assert.equal(a.aa(), a.a);
  });
});

describe('generators', () => {
  it('Nats', () => {
    function* nats() {
      i = 0;
      for (var i = 0; ; i++) {
        yield i;
      }
    }
    const ns = nats();
    assert.equal(ns.next().value, 0);
    assert.equal(ns.next().value, 1);

    got = [];
    for (let i of nats()) {
      if (i > 3) break;
      got.push(i);
    }
    assert.deepEqual([0, 1, 2, 3], got);
  });
});
