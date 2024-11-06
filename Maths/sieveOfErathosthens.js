function isPrime(a) {
    if (a <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(a)); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}

function erasthones(n) {
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

erasthones(10);
