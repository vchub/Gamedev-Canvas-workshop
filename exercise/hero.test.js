var assert = require("chai").assert;

// test example
function id(x) {
    return x;
}

// id2 = (x) => { x }


describe("test example", function () {
    it("id", () => {
        assert.equal(id(1), 1);
    });

    it("firstWord one word", () => {
        assert.equal(0, 0);
        var got = firstWord('hello')
        var exp = "hello"
        // debug print
        // console.log('+++++++++ got:', got)
        assert.equal(got, exp)
        // or the same
        assert.equal(firstWord('hello'), 'hello')
    });

    it("firstWord 2 word", () => {
        assert.equal(firstWord('hello world'), 'hello')
    });

    it("start with space", () => {
        assert.equal(firstWord('   hello world'), 'hello')
    });

    it("normalize", () => {
        var got = normalize('21-1')
        console.log("++++++++++ got", got)
        assert.equal(got, '21/1')

        // assert.equal(normalize('21-1'),'21/1')
    });


});
// EDN test example


function firstWord(s) {
    s = s.trim()
    let i = s.indexOf(" ");
    if (i <= -1) {
        return s
    }
    return s.substr(0, i)
}

function normalize(s) {
    while (s.indexOf("-") >= 0) {
        s = s.replace("-", "/")
    }
    return s
}

describe("numbers", () => {
    it("onesDigit", () => {
        assert.equal('number', typeof onesDigit(10))
        assert.equal(0, onesDigit(10))
        assert.equal(1, onesDigit(1))
        assert.equal(4, onesDigit(424))
    })

    it("onesDigit2", () => {
        assert.equal('number', typeof onesDigit2(10))
        assert.equal(0, onesDigit2(10))
        assert.equal(1, onesDigit2(1))
        assert.equal(4, onesDigit2(424))
    })
})

function onesDigit(n) {
    var s = n.toString()
    var i = s.length - 1
    return parseInt(s[i])

}

function onesDigit2(n) {
    return n % 10
}





describe("add, nand, xor", () => {
    it("add", () => {
        assert.equal(6, add("1+5"))
        assert.equal(106, add("100+6"))
        assert.equal(7032, add("1032+6000"))
        assert.equal(106, add("   100 + 6   "))
    })
    it("nand", () => {
        assert.equal(false, nand(true, true))
        assert.equal(true, nand(false, true))
        assert.equal(true, nand(false, false))
        assert.equal(true, nand(true, false))
    })

    it("xor", () => {
        assert.equal(false, xor(true, true))
        assert.equal(false, xor(false, false))
        assert.equal(true, xor(false, true))
        assert.equal(true, xor(true, false))
    })

})

function xor(a, b) {
    if ((a && b) || (!a && !b)) return false
    return true









}

function add(s) {
    var i = s.indexOf("+")
    var a = s.substr(0, i)
    var b = s.substr(i + 1)
    return parseInt(a) + parseInt(b)
}

// !true == false
// !false == true

// if true return false
// if false return true
// (a && b)
// !true
// !false
function nand(a, b) {
    // if (a && b) return false
    // return true
    return !(a && b)
}

nand(true, false)
nand(true, true)


function nor(a, b) {
    c = a || b
    res = !c
    return res
}


describe("repdigit", () => {
    it("repdigit 2d", () => {
        assert.equal("Repdigit!", repdigit(11))
        assert.equal("No Repdigit!", repdigit(12))
        assert.equal("No Repdigit!", repdigit(73))
        assert.equal("Repdigit!", repdigit(22))
    })

    it("repdigit nd", () => {
        assert.equal("Repdigit!", repdigit(1))
        assert.equal("Repdigit!", repdigit(11))
        assert.equal("Repdigit!", repdigit(222))
        assert.equal("Repdigit!", repdigit(2222222222222))

        assert.equal("No Repdigit!", repdigit(73))
        assert.equal("No Repdigit!", repdigit(222222222222221))
    })
})

// 22 -> '22' -> true
// 222 -> '222' -> true
function repdigit(n) {
    var s = n.toString()
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[0]) {
            return "No Repdigit!"
        }
    }
    return "Repdigit!"
}

// n = d*10 + o
// n = h*100 + d*10 + o
// function repdigit(n) {
//     var a = n % 10
//     var b = Math.round(n / 10)
//     return a === b
// }



function rotate(xs) {
    xs.push(xs.shift())
}
rotate([1, 2, 3])

describe("array", () => {
    it("concatUp", () => {
        assert.deepEqual([], concatUp([], []))
        assert.deepEqual([1], concatUp([1], []))
        assert.deepEqual([1, 2], concatUp([1], [2]))
        assert.deepEqual([1, 2, 3], concatUp([1], [2, 3]))
        assert.deepEqual([1, 3, 2], concatUp([3, 2], [1]))
    })

    it("halve ", () => {
        assert.deepEqual([], halve([]))
        assert.deepEqual([1, 2], halve([1, 2, 3]))
        assert.deepEqual([1], halve([1, 2]))

    })
    it("subArray ", () => {
        assert.deepEqual([], subArray([], 0, 2))
        assert.deepEqual([1], subArray([1], 0, 2))
        assert.deepEqual([3, 4], subArray([1, 2, 3, 4], 2, 4))
        assert.deepEqual([2, 3], subArray([1, 2, 3, 4], 1, 3))
    })
    it("flat ", () => {
        assert.deepEqual([], flat([[], []]))
        assert.deepEqual([1], flat([[], [1]]))
        assert.deepEqual([1, 2], flat([[1], [2]]))
        assert.deepEqual([1, 2, 3, 4], flat([[1], [2], [3, 4]]))
    })
    it("flat1", () => {
        assert.deepEqual([], flat1([[], []]))
        assert.deepEqual([1], flat1([[], [1]]))
        assert.deepEqual([1, 2], flat1([[1], [2]]))
        assert.deepEqual([1, 2, 3, 4], flat1([[1], [2], [3, 4]]))
    })
})

/**
  описание функции 
  документация
 */
function flat1(xsn) {
    ys = []
    i = 0
    for (let i = 0; i < xsn.length; i++) {  // my comment
        const xs = xsn[i];
        ys = ys.concat(xs)
    }
    return ys
}

function flat(xsn) {
    ys = []
    i = 0
    for (let i = 0; i < xsn.length; i++) {
        const xs = xsn[i];
        for (let j = 0; j < xs.length; j++) {
            ys.push(xs[j])
        }
    }
    return ys
}


function halve(xs) {
    var i = Math.round(xs.length / 2)
    return xs.slice(0, i)
}


function concatUp(xs, ys) {
    if (xs.length < ys.length) return xs.concat(ys)
    else if (xs.length > ys.length) return ys.concat(xs)
    else return xs.concat(ys)
}

function subArray(xs, start, end) {
    i = start
    ys = []
    while (i < end && i < xs.length
    ) {
        ys.push(xs[i])
        i++
    }
    return ys
}

function list(xs) {
    n = xs.length
    if (n < 1) return ""
    else if (n === 1) return xs[0].toString()
    return xs.slice(0, xs.length - 1).join(" , ") + " and " + xs[xs.length - 1]
}


function halve(xs) {
    var i = Math.round(xs.length / 2)
    return xs.slice(0, i)
}


function concatUp(xs, ys) {
    if (xs.length < ys.length) return xs.concat(ys)
    else if (xs.length > ys.length) return ys.concat(xs)
    else return xs.concat(ys)
}

function subArray(xs, start, end) {
    i = start
    ys = []
    while (i < end && i < xs.length
    ) {
        ys.push(xs[i])
        i++
    }
    return ys
}

function list(xs) {
    n = xs.length
    if (n < 1) return ""
    else if (n === 1) return xs[0].toString()
    return xs.slice(0, xs.length - 1).join(" , ") + " and " + xs[xs.length - 1]
}


function halve(xs) {
    var i = Math.round(xs.length / 2)
    return xs.slice(0, i)
}


function concatUp(xs, ys) {
    if (xs.length < ys.length) return xs.concat(ys)
    else if (xs.length > ys.length) return ys.concat(xs)
    else return xs.concat(ys)
}

function subArray(xs, start, end) {
    i = start
    ys = []
    while (i < end && i < xs.length
    ) {
        ys.push(xs[i])
        i++
    }
    return ys
}

function list(xs) {
    n = xs.length
    if (n < 1) return ""
    else if (n === 1) return xs[0].toString()
    return xs.slice(0, xs.length - 1).join(" , ") + " and " + xs[xs.length - 1]
}


function halve(xs) {
    var i = Math.round(xs.length / 2)
    return xs.slice(0, i)
}


function concatUp(xs, ys) {
    if (xs.length < ys.length) return xs.concat(ys)
    else if (xs.length > ys.length) return ys.concat(xs)
    else return xs.concat(ys)
}

function subArray(xs, start, end) {
    i = start
    ys = []
    while (i < end && i < xs.length
    ) {
        ys.push(xs[i])
        i++
    }
    return ys
}

function list(xs) {
    n = xs.length
    if (n < 1) return ""
    else if (n === 1) return xs[0].toString()
    return xs.slice(0, xs.length - 1).join(" , ") + " and " + xs[xs.length - 1]
}



function median(xs) {
    var n = xs.length
    if (n % 2 == 0)
        return (xs[n / 2 - 1] + xs[n / 2]) / 2

    else return xs[Math.round(n / 2) - 1]
}

describe("string , numbers", () => {
    it("cutComment", () => {
        assert.deepEqual(null, cutComment(""))
        assert.deepEqual(null, cutComment("hello"))
        assert.deepEqual("hi", cutComment("hello // hi"))
        assert.equal("bar", cutComment('let foo; // bar'))
    })
    it("factorial", () => {
        assert.deepEqual(1, factorial(0))
        assert.deepEqual(1, factorial(1))
        assert.deepEqual(6, factorial(3))
    })
    it("mean", () => {
        assert.deepEqual(1, mean([1]))
        assert.deepEqual(5, mean([5]))
        assert.deepEqual(2, mean([1, 2, 3]))
        assert.deepEqual(2.5, mean([2, 3]))
    })
    it("spaces ", () => {
        assert.deepEqual("", spaces(0))
        assert.deepEqual("  ", spaces(2))
    })
    xit("lcm", () => {
        assert.deepEqual(1, lcm(1, 1))
        assert.deepEqual(10, lcm(2, 5))
        assert.deepEqual(21, lcm(3, 7))
        assert.deepEqual(12, lcm(4, 6))
        assert.deepEqual(12, lcm(6, 4))

    })
    xit("swap", () => {
        var a = 1
        var b = 2
        swap(a, b)
        assert.equal(2, a)
        assert.equal(1, b)
    })

    xit("js [] assignment", () => {
        var a = 1
        var b = 2
        [a, b] = [2, a]
        assert.equal(2, a)
        assert.equal(1, b)
    })
    it("gcd", () => {
        assert.equal(1, gcd(1, 0))
        assert.equal(1, gcd(3, 5))
        assert.equal(7 * 11, gcd(7 * 11, 3 * 7 * 11))
    })

    it("isPrime ", () => {
        assert.equal(false, isPrime(1))
        assert.equal(true, isPrime(2))
        assert.equal(false, isPrime(4))
        assert.equal(false, isPrime(6))
        assert.equal(false, isPrime(3 * 5 * 11))
        assert.equal(true, isPrime(19))
    })
    it("sum ", () => {
        assert.equal(0, sum([[]]))
        assert.equal(6, sum([[1], [2, 3]]))
        assert.equal(6, sum([[1], [2], [3]]))
        assert.equal(0, sum([[1, 2], [-3]]))
    })
    it("sumr ", () => {
        assert.equal(0, sumr([]))
        assert.equal(6, sumr([1, 2, 3]))

        assert.equal(0, sumr([[]]))
        assert.equal(6, sumr([[1], [2, 3]]))
        assert.equal(6, sumr([[1], [2], [3]]))
        assert.equal(0, sumr([[1, 2], [-3]]))

        assert.equal(8, sumr([[[1, 2], 2], [3]]))

        assert.equal(1, sumr(1))
    })
    it("max  ", () => {
        assert.equal(1, max(1))
        assert.equal(3, max(1, 2, 3))
        assert.equal(4, max(3, 1, 4, 2))
        assert.equal(6, max(1, 5, 3, 6, 6, 5, 1))
    })
    it("parseFirstInt", () => {
        assert.isNaN(parseFirstInt("hello"))
        assert.equal(12, parseFirstInt("hello 12"))
        assert.equal(-12, parseFirstInt("hel -12 lo 3"))

        assert.equal(12, parseFirstInt("hel12lo3"))
        assert.equal(12, parseFirstInt("12xxxx"))
    })
})

// (String) -> Number
function parseFirstInt(s) {
    var ns = ""
    for (let i = 0; i < s.length; i++) {
        const x = parseInt(s[i]);
        if (!isNaN(x)) {
            if (i - 1 >= 0 && s[i - 1] === "-" || s[i - 1] === "+") ns = ns + s[i - 1]
            ns = ns + s[i]
        }
        if (isNaN(x) && ns.length > 0) break
    }
    return parseInt(ns)
}
// function parseFirstInt(s) {
//     const xs = s.split(" ")
//     // console.log(xs)
//     for (let i = 0; i < xs.length; i++) {
//         const x = parseInt(xs[i]);
//         if (!isNaN(x)) return x
//     }
//     return NaN
// }


function max() {
    var m = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > m) m = arguments[i]
    }
    return m
}

function sumr(xss) {
    if (xss.length < 1) return 0
    if (typeof xss === "number") return xss
    const h = xss[0]
    const t = xss.slice(1)
    return sumr(h) + sumr(t)
}

// function sumr(xss) {
//     if (xss.length < 1) return 0
//     const h = xss[0]
//     const t = xss.slice(1)
//     if (typeof h === "number") return h + sumr(t)
//     return sumr(h) + sumr(t)
// }


function sum(xss) {
    let a = 0
    for (let i = 0; i < xss.length; i++) {
        let ts = xss[i]
        for (let j = 0; j < ts.length; j++) {
            a = a + ts[j]
        }
    }
    return a
}

function isPrime(n) {
    if (n === 1) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false
    }
    return true
}

// GCG
// gcd(a,0) = a
// gcd(a,b) = gcd(b, a%b)

// Euclid algorithm:
// gcd(a,0) = a
// gcd(a,b) = gcd(b, a-b) if a-b < b
// gcd(a,b) = gcd(a-b, b) if a-b >= b

function gcd(a, b) {
    if (b === 0) return a
    return gcd(b, a % b)
}

function swap(a, b) {
    let t = a
    a = b
    b = t
}


function lcm(a, b) {
    if (a > b) {
        let t = a
        a = b
        b = t
    }
    // for (let i = 1; true; i++) {
    //     if (a*i % b == 0) return a*i
    // }
    var i = 1
    do {
        if (a * i % b == 0) return a * i
        i++
    } while (i <= b);
}



function spaces(n) {
    // var i = 0
    // var s = ""
    // while (i < n) {
    //     s = s + " "
    //     i++
    // }
    // return s
    const ar = Array(n)
    for (let i = 0; i < ar.length; i++) {
        ar[i] = " "
    }
    return ar.join("")
}

function cutComment(s) {
    var n = s.indexOf("//")
    if (n < 0) return null
    return s.slice(n + 3)
}


function addTo(n) {
    var y = 0
    for (let i = 0; i <= n; i++) {
        y = y + i
    }
    return y
}


function factorial(n) {
    var y = 1
    for (let i = 1; i <= n; i++) {
        y = y * i
    }
    return y
}

function mean(xs) {
    y = 0
    for (let i = 0; i < xs.length; i++) {
        y = y + xs[i]
    }
    return y / xs.length
}


// s = "some foo 10 foo"
// s.split(" ")



