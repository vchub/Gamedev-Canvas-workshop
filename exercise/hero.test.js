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


// 114 = 1*100 + 1*10 + 4
// 2*10 % 10
// 3*1000 % 10

Math.round()