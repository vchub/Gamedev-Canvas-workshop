function double(xs) {
  let i = 0;
  res = [];
  while (i < xs.length) {
    res.push(xs[i] * 2);
    i++;
  }
  return res;
}

// module.exports = double;
exports.double = double;
