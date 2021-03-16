var assert = require("chai").assert;

describe("digit sum", () => {
  xit("digitSum", () => {
    assert.equal(1, digitSum(1));
    assert.equal(2, digitSum(11));
    assert.equal(5, digitSum(122));
  });
  it("digitSum1", () => {
    assert.equal(1, digitSum1(1));
    assert.equal(2, digitSum1(11));
    assert.equal(5, digitSum1(122));
  });
});

function digitSum(n) {
  var acc = n % 10;
  while (n >= 1) {
    n = n / 10;
    acc += Math.floor(n) % 10;
  }
  return acc;
}

function digitSum(n) {
  var acc = n % 10;
  while (n >= 1) {
    n = n / 10;
    // ???
  }
  return acc;
}

function digitSum1(n) {
  var acc = 0;
  for (var i = 0; ; i++) {
    let x = n / 10 ** i;
    if (x < 1) break;
    acc += Math.floor(x) % 10;
  }
  return acc;
}
