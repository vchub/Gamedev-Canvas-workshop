const { assert } = require('chai');
const { parse, ENV } = require('./egg.js');

describe('eval', () => {
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
