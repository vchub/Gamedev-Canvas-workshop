const { double } = require('./maps');

// function double(xs) {
//   let i = 0;
//   res = [];
//   while (i < xs.length) {
//     res.push(xs[i] * 2);
//     i++;
//   }
//   return res;
// }

test('double', () => {
  // expect(double([1, 2])).toBe([2, 4]);
  expect(double([1, 2])).toStrictEqual([2, 4]);
  expect(double([1, 2])).toEqual([2, 4]);
});
