f = (i, e) => i * e;
a = [1, 2, 3];
b = a.map(f);
console.log(b);
console.log('++++++++++++++++');

it('works?', () => {
  expect(1).toEqual(1);
});

describe('testing', () => {
  it('works?', () => {
    expect(1).toEqual(1);
  });
});
