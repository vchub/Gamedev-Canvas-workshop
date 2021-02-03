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
    it("add", () => {
        assert.equal(1, add("1"))
        assert.equal(11, add("1+10"))
        assert.equal(35, add("1+23+11"))
    })

    it("mean", () => {
        // [Number] -> Number
        function sum(xs) {
            var y = 0
            for (let i = 0; i < xs.length; i++) {
                y = y + xs[i]
            }
            return y
        }
        // [Number] -> Number
        function mean(xs) {
            return sum(xs) / xs.length
        }
        assert.equal(1, mean([1]))
        assert.equal(1.5, mean([1, 2]))
        assert.equal(2.5, mean([1, 3, 5, 1]))
    })
    xit("reverse", () => {
        assert.equal("h", reverse("h"))
        assert.equal("ih", reverse("hi"))
        assert.equal("oll eh", reverse("he llo"))
    })
    it("reverse Array", () => {
        // [Object] -> [Object]
        function reverse(xs) {
            var ys = []
            for (let i = xs.length - 1; i >= 0; i--) {
                ys.push(xs[i])
            }
            return ys
        }
        assert.deepEqual([1], reverse([1]))
        assert.deepEqual([2, 1], reverse([1, 2]))
        assert.deepEqual([3, 4, 2, 1], reverse([1, 2, 4, 3]))
    })

    it("recurcive reverse Array", () => {
        // reverse([]) = []
        // reverse(xs) = last(xs) + reverse(xs.slice(0,last))
        // reverse([1,2,3]) == [3] + reverse([1,2])
        // [Object] -> [Object]
        function reverse(xs) {
            if (xs.length === 0) return xs
            var l = xs[xs.length - 1]
            var hs = xs.slice(0, xs.length - 1)
            return [l].concat(reverse(hs))
        }
        assert.deepEqual([1], reverse([1]))
        assert.deepEqual([2, 1], reverse([1, 2]))
        assert.deepEqual([3, 4, 2, 1], reverse([1, 2, 4, 3]))
    })
    it("recurcive reverse str", () => {
        //  str -> str
        function reverse(s) {
            if (s.length === 0) return s
            var l = s[s.length - 1]
            var hs = s.slice(0, s.length - 1)
            return l + reverse(hs)
        }
        assert.deepEqual("h", reverse("h"))
        assert.deepEqual("hi", reverse("ih"))
    })

    it("in place reverse Array", () => {
        // [Object] -> undefind
        function reverse(xs) {
            var n = xs.length
            for (let i = 0; i < n / 2; i++) {
                var t = xs[i]
                xs[i] = xs[n - 1 - i]
                xs[n - 1 - i] = t
            }
        }
        var xs = [1]
        reverse(xs)
        assert.deepEqual([1], xs)
        xs = [1, 2]
        reverse(xs)
        assert.deepEqual([2, 1], xs)
        xs = [1, 2, 3]
        reverse(xs)
        assert.deepEqual([3, 2, 1], xs)
        xs = [1, 2, 4, 3]
        reverse(xs)
        assert.deepEqual([3, 4, 2, 1], xs)
    })
})




// (String) -> Number
function add(s) {
    xs = s.split("+")
    y = 0
    for (let i = 0; i < xs.length; i++) {
        y = y + parseFloat(xs[i])
    }
    return y
}

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

function arabic(s) {
    var I = 1
    var V = 5
    var X = 10
    var L = 50
    var C = 100
    var D = 500
    var M = 1000
    var ys = s.split("")
    var n = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (ys[i] === "I") {
            if (i < s.length && (ys[i + 1] === "V" || ys[i + 1] === "X")) {
                n = n - I
            }
            else {
                n = n + I
            }
        }

        if (ys[i] === "V") {
            if (i < s.length && (ys[i + 1] === "L" || ys[i + 1] === "C" || ys[i + 1] === "D" || ys[i + 1] === "M")) {
                n = n - V
            }
            else {
                n = n + V
            }
        }
        if (ys[i] === "X") {
            if (i < s.length && (ys[i + 1] === "L" || ys[i + 1] === "C")) {
                n = n - X
            }
            else {
                n = n + X
            }
        }
        if (ys[i] === "L") {
            if (i < s.length && (ys[i + 1] === "D" || ys[i + 1] === "M")) {
                n = n - L
            }
            else {
                n = n + L
            }
        }
        if (ys[i] === "C") {
            if (i < s.length && (ys[i + 1] === "D" || ys[i + 1] === "M")) {
                n = n - C
            }
            else {
                n = n + C
            }
        }
        if (ys[i] === "D") {
            if (i < s.length && (ys[i + 1] === "M")) {
                n = n - D
            }
            else {
                n = n + D
            }
        }
        if (ys[i] === "M") {
            n = n + M
        }

    }
    return n
}

describe("arabic", () => {
    it("arabic", () => {
        assert.deepEqual(1, arabic("I"))
        assert.deepEqual(2, arabic("II"))
        assert.deepEqual(3, arabic("III"))
        assert.deepEqual(5, arabic("V"))
        assert.deepEqual(4, arabic("IV"))
        assert.deepEqual(6, arabic("VI"))
        assert.deepEqual(7, arabic("VII"))
        assert.deepEqual(8, arabic("VIII"))
        assert.deepEqual(9, arabic("IX"))
        assert.deepEqual(10, arabic("X"))
        assert.deepEqual(11, arabic("XI"))
        assert.deepEqual(24, arabic("XXIV"))
        assert.deepEqual(29, arabic("XXIX"))
        assert.deepEqual(39, arabic("XXXIX"))
        assert.deepEqual(94, arabic("XCIV"))
        assert.deepEqual(483, arabic("CDLXXXIII"))
        assert.deepEqual(999, arabic("CMXCIX"))
        assert.deepEqual(49, arabic("XLIX"))

    })
    it("repeat", () => {
        assert.deepEqual("1", repeat("1", 1))
        assert.deepEqual("22", repeat("2", 2))
        assert.deepEqual("III", repeat("I", 3))
    })

    it("roman", () => {
        assert.deepEqual("", roman(0))
        assert.deepEqual("I", roman(1))
        assert.deepEqual("II", roman(2))
        assert.deepEqual("III", roman(3))
        assert.deepEqual("IV", roman(4))
        assert.deepEqual("V", roman(5))
        assert.deepEqual("VI", roman(6))
        assert.deepEqual("VII", roman(7))
        assert.deepEqual("VIII", roman(8))
        assert.deepEqual("IX", roman(9))
    })
    it("roman10++", () => {
        assert.deepEqual("X", roman(10))
        assert.deepEqual("XX", roman(20))
        assert.deepEqual("LX", roman(60))


        assert.deepEqual("XI", roman(11))
        assert.deepEqual("XII", roman(12))
        assert.deepEqual("XIII", roman(13))
        assert.deepEqual("XIV", roman(14))
        assert.deepEqual("XV", roman(15))
        assert.deepEqual("XCIX", roman(99))
    })
    it("roman20++", () => {
        assert.deepEqual("XXI", roman(21))
        assert.deepEqual("XXII", roman(22))
        assert.deepEqual("XXXIII", roman(33))
        assert.deepEqual("XLIV", roman(44))
        assert.deepEqual("LV", roman(55))
    })
    it("roman100++", () => {
        assert.deepEqual("CXI", roman(111))
        assert.deepEqual("CCXXIII", roman(223))
        assert.deepEqual("DLXIV", roman(564))
        assert.deepEqual("DCCXXXII", roman(732))
        assert.deepEqual("CMXCV", roman(995))
    })
})

// число n разложим на десятки и единицы 
// переведём едицицы в римские 
// переведём десятки в римские 
// Number -> String
function roman(n) {
    var u = n % 10
    var d = Math.floor(n / 10) % 10
    var c = Math.floor(n / 100) % 10
    var m = Math.floor(n / 1000) % 10
    // var su = roman1(u)
    // var sd = roman10(d)
    // var sc = roman100(c)
    // var sm = roman1000(m)
    var su = romanG(u, 'I', 'V', 'X')
    var sd = romanG(d, 'X', 'L', 'C')
    var sc = romanG(c, 'C', 'D', 'M')
    var sm = romanG(m, 'M')
    return sm + sc + sd + su
}
// Number, String, String, String -> String
function romanG(n, i, v, x) {
    if (n < 4) return repeat(i, n)
    if (n == 4) return i+v
    if (n == 5) return v
    if (n > 5 && n < 9) return v + repeat(i, n - 5)
    if (n == 9) return i+x
}

// Number -> String
function roman1(n) {
    if (n < 4) return repeat("I", n)
    if (n == 4) return "IV"
    if (n == 5) return "V"
    if (n > 5 && n < 9) return "V" + repeat("I", n - 5)
    if (n == 9) return "IX"
}
// Number -> String
function roman10(n) {
    if (n < 4) return repeat("X", n)
    if (n == 4) return "XL"
    if (n == 5) return "L"
    if (n > 5 && n < 9) return "L" + repeat("X", n - 5)
    if (n == 9) return "XC"
}
// Number -> String
function roman100(n) {
    if (n < 4) return repeat("C", n)
    if (n == 4) return "CD"
    if (n == 5) return "D"
    if (n > 5 && n < 9) return "D" + repeat("C", n - 5)
    if (n == 9) return "CM"
}
// Number -> String
function roman1000(n) {
    if (n < 4) return repeat("M", n)
}



// 34
// u = 4 
// x = 3
// f(u) -> IV
// f(x) -> XXX
// XXX + IV
// f(u) + f(x)

// String , Number -> String
function repeat(s, n) {
    s1 = ""
    for (let i = 0; i < n; i++) {
        s1 = s1 + s
    }
    return s1
}


