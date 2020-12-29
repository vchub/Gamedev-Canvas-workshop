const { double } = require("./maps");
const assert = require("assert");

// node built in assert
describe("double", () => {
  describe("two", () => {
    it("sub", () => {
      assert.strictEqual(1 - 1, 0, "0?");
    });
  });

  // expect(double([1, 2])).toBe([2, 4]);
  // expect(double([1, 2])).toStrictEqual([2, 4]);
  // expect(double([1, 2])).toEqual([2, 4]);
});
