function fs(n) {
    // return the first n elements of sequence
    function f(n) {
        if (n == 1) {
            return -3
        }
        else {
            return -5 * f(n - 1) - 7
        }
    }
    a = []
    for (let i = 1; i <= n; i++) {
        a.push(f(i))
    }
    return a
}

// fs(4) == [f(1), f(2),f(3),f(4)]
