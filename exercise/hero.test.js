var assert = require("chai").assert;

// test example
function id(x) {
  return x;
}

describe("test example", () => {
  it("id", () => {
    assert.equal(id(1), 1);
  });
});
// EDN test example

function toCase(s) {
  return s.toLowerCase() + "-" + s.toUpperCase();
}

toCase("Mthatha");

toCase("Mthatha") === "mthatha-MTHATHA";
