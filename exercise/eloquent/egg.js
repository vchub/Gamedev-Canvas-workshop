// ST = Syntax Tree

// {
//   type: "apply",
//   operator: {type: "word", name: ">"},
//   args: [
//     {type: "word", name: "x"},
//     {type: "value", value: 5}
//   ]
// }

const ENV = {
  true: true,
  false: false,
};
// add primitive function
for (let op of ['+', '-', '*', '/', '==', '<', '>']) {
  ENV[op] = Function('a, b', `return a ${op} b`);
}

const specialForms = Object.create(null);

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
  let args = [];
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

// Exp, Env -> Value
function evalExp(exp, env) {
  // console.log('exp', exp);
  // console.log('value', exp.value, exp.value in specialForms);
  if (exp.type === 'value') {
    return exp.value;
  }
  if (exp.type === 'word') {
    if (exp.value in env) {
      return env[exp.value];
    }
    throw new ReferenceError(`Undefined binding: ${exp.value}`);
  }
  if (exp.type === 'apply') {
    let { operator, args } = exp;
    if (operator.type === 'word' && operator.value in specialForms) {
      return specialForms[exp.operator.value](args, env);
    }
    let op = evalExp(operator, env);
    if (typeof op === 'function') {
      let xs = args.map(x => evalExp(x, env));
      return op(...xs);
    } else {
      throw new TypeError('Applying a non-function.');
    }
  }
}

// String -> Value
function evaluate(s) {
  let exp = parse(s);
  return evalExp(exp, ENV);
}

specialForms.def = (args, env) => {
  var k = args[0];
  if (k.type === 'word') {
    k = k.value;
  } else {
    k = evalExp(k, env);
  }
  const v = evalExp(args[1], env);
  env[k] = v;
  return v;
};

specialForms.if = (args, env) => {
  if (args.length < 2 && args.length > 3) {
    // if (args.length !== 3) {
    throw new SyntaxError('Wrong number of args to if');
  }

  let cond = evalExp(args[0], env);
  if (cond) {
    return evalExp(args[1], env);
  } else {
    let res;
    if (2 in args) {
      res = evalExp(args[2], env);
    }
    return res;
  }
};

specialForms.do = (args, env) => {
  // console.log('do, args', args);
  var res;
  for (var i = 0, len = args.length; i < len; i++) {
    res = evalExp(args[i], env);
  }
  return res;
};

module.exports = {
  evaluate: evaluate,
  parse: parse,
  parseExpression: parseExpression,
  ENV: ENV,
};
