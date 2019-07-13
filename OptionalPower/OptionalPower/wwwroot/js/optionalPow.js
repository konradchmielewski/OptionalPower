var a, b;

// Optional math power function, depending on the input - OK or Cancel.
function optionalPow(a, b) {
    if (confirm('Click >OK to Math.pow(a, b) and click Cancel to Math.pow(b, a)')) {
        return Math.pow(a, b)
    }
    return Math.pow(b, a)
}

console.log(optionalPow(2, 3));