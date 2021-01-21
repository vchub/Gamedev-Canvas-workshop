const { assert } = require('chai');
const { parse, evaluate } = require('./egg.js');

describe('eval', () => {
  it('function', () => {
    assert.equal(
      2,
      evaluate(`do( def(addone, fun(x, +(x,1))),
									addone(1))`),
    );
    assert.equal(
      24,
      evaluate(`do(
						def(fact, fun(n, if(<(n,2), 1, *(n, fact(-(n,1)))))),
						fact(4))
							`),
    );
  });

  it('while', () => {
    assert.equal(
      6,
      evaluate(`do(
						def(i,0),
						def(fact,1),
					while(<(i,3),
					do(
					def(i, +(i,1)),
					def(fact, *(fact,i)),
					)
					),
					fact)`),
    );
  });

  it('do, def', () => {
    assert.equal(2, evaluate(`do(1,2)`));
    assert.equal(1, evaluate(`def(x,1)`));
    assert.equal(1, evaluate(`do( def(x,1), x)`));
    assert.equal(false, evaluate(`do( <(2,1))`));
    assert.equal(false, evaluate(`do( def(x,<(2,1)), x)`));
  });

  it('basic fun', () => {
    assert.equal(1, evaluate(`+(1, 0)`));
    assert.equal(2, evaluate(`*(1, 2)`));
    assert.equal(true, evaluate(`<(1, 2)`));
    assert.equal(false, evaluate(`>(1, 2)`));
    assert.equal(false, evaluate(`<(3, 2)`));
  });

  it('if', () => {
    assert.equal(true, evaluate(`if( true, true, false)`));
    assert.equal(false, evaluate(`if( false, true, false)`));
    assert.equal(3, evaluate(`if( <(1,2), 3, 0)`));
    assert.equal(0, evaluate(`if( <(2,1), 3, 0)`));
    assert.equal(3, evaluate(`if( <(0,1), 3)`));
    assert.equal(undefined, evaluate(`if( >(0,1), 3)`));
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
    assert.deepEqual({ type: 'word', name: 'x' }, parse(' x '));
  });

  it('parse apply', () => {
    assert.deepEqual(
      {
        type: 'apply',
        operator: { type: 'word', name: 'f' },
        args: [{ type: 'value', value: 1 }, { type: 'word', name: 'x' }],
      },
      parse(' f ( 1 , x) '),
    );
    // assert.deepEqual({}, parse('f(1)(2)'));
    // ENV['x'] = { type: 'value', value: 1 };
  });
});
