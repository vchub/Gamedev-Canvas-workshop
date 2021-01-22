var assert = require('chai').assert;

describe('roman numbers', function() {
  aR = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

  // (int, String) -> String
  function toRomanUnit(n, one, five, ten) {
    // console.log('in toRomanUnit', n, n < 4, one, one.repeat(n));
    if (n < 1) return '';
    if (n < 4) return one.repeat(n);
    if (n < 5) return one + five;
    if (n === 5) return five;
    if (n < 9) return five + one.repeat(n - 5);
    if (n === 9) return one + ten;
  }

  // int -> String
  function toRoman(n) {
    var unit = toRomanUnit(n % 10, 'I', 'V', 'X');
    var dec = toRomanUnit(Math.trunc(n / 10) % 10, 'X', 'L', 'C');
    var h = toRomanUnit(Math.trunc(n / 100) % 10, 'C', 'D', 'M');
    var th = toRomanUnit(Math.trunc(n / 1000) % 10, 'M');
    return th + h + dec + unit;
  }

  it('arabic -> roman', () => {
    assert.equal('I', toRoman(1));
    assert.equal('III', toRoman(3));
    assert.equal('IV', toRoman(4));
    assert.equal('V', toRoman(5));
    assert.equal('VI', toRoman(6));
    assert.equal('VIII', toRoman(8));
    assert.equal('IX', toRoman(9));
    assert.equal('X', toRoman(10));
    assert.equal('XIII', toRoman(13));
    assert.equal('XIV', toRoman(14));
    assert.equal('XV', toRoman(15));
    assert.equal('XVII', toRoman(17));
    assert.equal('XIX', toRoman(19));
    assert.equal('XXXVI', toRoman(36));
    assert.equal('XLI', toRoman(41));
    assert.equal('XLIX', toRoman(49));
    assert.equal('CLX', toRoman(160));
    assert.equal('CCVII', toRoman(207));
    assert.equal('MLXVI', toRoman(1066));
  });
});
