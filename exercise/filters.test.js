const assert = require("assert");

describe("use loop examples", () => {
  it("while loop examples", () => {
    let odds = (xs) => {
      res = [];
      let i = 0;
      while (i < xs.length) {
        // console.log(i, xs.length);
        if (xs[i] % 2 == 1) {
          res.push(xs[i]);
        }
        i++;
      }
      return res;
    };
    assert.deepStrictEqual(odds([]), []);
    assert.deepStrictEqual(odds([1, 2, 3, 4]), [1, 3]);
  });

  it("for loop examples", () => {
    let odds = (xs) => {
      res = [];
      for (let i = 0; i < xs.length; ++i) {
        if (xs[i] % 2 == 1) {
          res.push(xs[i]);
        }
      }
      return res;
    };
    assert.deepStrictEqual(odds([]), []);
    assert.deepStrictEqual(odds([1, 2, 3, 4]), [1, 3]);
  });
});

describe("use filter examples", () => {
  it("filter odds", () => {
    assert.deepStrictEqual(
      [1, 2, 3].filter((x) => x < 3),
      [1, 2],
      "less then 3"
    );
    assert.notDeepStrictEqual(
      [1, 2, 3].filter((x) => x < 3),
      [3],
      "less then 3"
    );
  });
});

describe("ex. filters", () => {
  it("filter odd numbers", () => {
    const odds = (xs) => {
      return xs.filter((x) => x % 2 == 1);
    };

    assert.deepStrictEqual(odds([]), []);
    assert.deepStrictEqual(odds([1, 2, 3, 4]), [1, 3]);
  });

  xit("filter even numbers", () => {
    const evens = (xs) => {
      return null;
    };

    assert.deepStrictEqual(evens([]), []);
    assert.deepStrictEqual(evens([1, 2, 3, 4]), [2, 4]);
  });

  xit("filter numbers diveded by 3 and 5", () => {
    const d35 = (xs) => {
      return null;
    };

    assert.deepStrictEqual(d35([]), []);
    assert.deepStrictEqual(d35([15, 30, 25, 40, 45]), [15, 30, 45]);
  });

  xit("what this function does?", () => {
    const oddInd = (xs) => {
      return null;
    };

    assert.deepStrictEqual(oddInd([]), []);
    assert.deepStrictEqual(oddInd(["a", "c", "x", "a", "y", "x"]), [
      "c",
      "a",
      "x",
    ]);
  });
});
