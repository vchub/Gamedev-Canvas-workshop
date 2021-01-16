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
        assert.deepEqual([1,2], halve([1, 2, 3]))
        assert.deepEqual([1], halve([1,2]))

    })
})

function halve(xs) {
    var i = Math.round(xs.length/2)
    return xs.slice(0,i)
}


function concatUp(xs, ys) {
    if (xs.length < ys.length) return xs.concat(ys)
    else if (xs.length > ys.length) return ys.concat(xs)
    else return xs.concat(ys)
}

