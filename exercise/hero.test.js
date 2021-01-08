function toCase(s) {
    return s.toLowerCase() + "-" + s.toUpperCase()
}

toCase('Mthatha')

toCase('Mthatha') === 'mthatha-MTHATHA'