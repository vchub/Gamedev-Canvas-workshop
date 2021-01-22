var assert = require('chai').assert;

describe('roman numbers', function() {
  arabicRoman = {
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

  romanArabic = Object.fromEntries(
    Object.entries(arabicRoman).map(([k, v]) => [v, parseInt(k)]),
  );
  // console.log('romanArabic', romanArabic);

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

  // (String) -> Number
  function toArabic(s) {
    let xs = Array.from(s);
    let b = romanArabic[xs.pop()];
    let res = b;
    while (xs.length > 0) {
      let a = romanArabic[xs.pop()];
      if (a < b) {
        res -= a;
      } else {
        res += a;
      }
      b = a;
    }
    return res;
  }

  it('roman -> arabic', () => {
    assert.equal(1, toArabic('I'));
    assert.equal(3, toArabic('III'));
    assert.equal(4, toArabic('IV'));
    assert.equal(8, toArabic('VIII'));
    assert.equal(9, toArabic('IX'));
    assert.equal(14, toArabic('XIV'));
    assert.equal(39, toArabic('XXXIX'));
    assert.equal(41, toArabic('XLI'));
    assert.equal(160, toArabic('CLX'));
    assert.equal(207, toArabic('CCVII'));
    assert.equal(1066, toArabic('MLXVI'));
  });

  xit('Maps', () => {
    let o = { a: 1, b: 2 };
    console.log(o);
    for (const k in o) {
      console.log(k, o.k, o[k]);
    }
    let m = new Map(Object.entries(o));
    // console.log('o.entries', O.entries, o.keys);
    console.log('m', m);
    for (const [k, v] of m) {
      console.log(k, v);
    }
  });
});
