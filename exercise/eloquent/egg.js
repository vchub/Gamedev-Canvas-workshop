// ST = Syntax Tree

// {
//   type: "apply",
//   operator: {type: "word", name: ">"},
//   args: [
//     {type: "word", name: "x"},
//     {type: "value", value: 5}
//   ]
// }

ENV = {
  def: (name, val) => (ENV[name] = val),
};

// String -> {exp: ST, rest: String}
function parseExpression(s) {
  s = s.trim();
  let match, exp;
  if ((match = /^"([^"]*)"/.exec(s))) {
    exp = { type: 'value', value: match[1] };
  } else if ((match = /^[+-]?\d+\.?\d*\b/.exec(s))) {
    // console.log(match);
    exp = { type: 'value', value: Number(match[0]) };
  } else if ((match = /^[^\s(),#"]+/.exec(s))) {
    // console.log(match);
    exp = { type: 'word', value: match[0] };
  } else {
    throw new SyntaxError('Unexpected syntax: ' + s);
  }

  return parseApply(exp, s.slice(match[0].length));
}

// ST, String -> {exp: ST, rest: String}
function parseApply(exp, s) {
  s = s.trim();
  if (s[0] != '(') return { exp: exp, rest: s };

  s = s.slice(1).trim();
  args = [];
  while (s[0] !== ')') {
    let o = parseExpression(s);
    args.push(o.exp);
    s = o.rest.trim();
    if (s[0] === ',') {
      s = s.slice(1).trim();
    } else if (s[0] !== ')') {
      throw new SyntaxError("Expected ',' or ')'");
    }
  }
  exp = { type: 'apply', operator: exp, args: args };
  return parseApply(exp, s.slice(1));

  // if (exp.type === 'value') return exp.value;
  // if (exp.type === 'word') return parseApply(ENV[exp.value]);
}

// String -> ST
function parse(s) {
  let { exp, rest } = parseExpression(s);
  if (rest.length > 0) {
    throw new SyntaxError('Unexpected text after program');
  }
  return exp;
}

module.exports = {
  parse: parse,
  parseExpression: parseExpression,
  ENV: ENV,
};
