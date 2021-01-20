const { assert } = require('chai');
const { parse, evaluate } = require('./egg.js');

describe('eval', () => {
  it('do, def', () => {
    // assert.equal(2, evaluate(`do(1,2)`));
    assert.equal(1, evaluate(`def(x,1)`));
    assert.equal(1, evaluate(`do( def(x,1), x)`));
  });

  it('if', () => {
    assert.equal(2, evaluate(`if( <(1,2), 2, 0)`));
    // (if (< 1 2) 2 0)
  });

  it('eval value', () => {
    assert.equal('foo', evaluate(' "foo" '));
    assert.equal(-1.1, evaluate('-1.1'));
  });

  it('parse primitives', () => {
    // const s0 = 'define(x, 0)';
    assert.deepEqual({ type: 'value', value: 'xxx' }, parse(' "xxx"'));
    assert.deepEqual({ type: 'value', value: 10.01 }, parse(' 10.01 '));
    assert.deepEqual({ type: 'value', value: -0.01 }, parse(' -0.01 '));
  });

  it('parse word', () => {
    assert.throws(() => parse('#y'), SyntaxError);
    assert.throws(() => parse('#y'), /Unexpected/);
    assert.deepEqual({ type: 'word', value: 'x' }, parse(' x '));
  });

  it('parse apply', () => {
    assert.deepEqual(
      {
        type: 'apply',
        operator: { type: 'word', value: 'f' },
        args: [{ type: 'value', value: 1 }, { type: 'word', value: 'x' }],
      },
      parse(' f ( 1 , x) '),
    );
    // assert.deepEqual({}, parse('f(1)(2)'));
    // ENV['x'] = { type: 'value', value: 1 };
  });
});
